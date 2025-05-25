import { LoaderFunctionArgs, redirect } from "react-router-dom";
import { routesEndPoints } from "../constants";
import { store } from "../redux/store";


type customLoaderFunction = (
  loaderArgs: LoaderFunctionArgs
) => Promise<ReturnType<typeof redirect> | null>

export const routeProtector = () => {
  const protectorArray: customLoaderFunction[] = []

  const processFlow = async (loaderArgs: LoaderFunctionArgs) => {
    const promises = protectorArray.map((protector) => protector(loaderArgs))

    const results = await Promise.all(promises)

    const redirectResult = results.find((result: any) => result?.status === 302)

    return redirectResult || null
  }

  processFlow.requireLoggedIn = () => {
    protectorArray.push(async () => {
      const authentication = store.getState().authentication

      if (!authentication.isLoggedIn) {
        return redirect(routesEndPoints.LOGIN)
      }
      return null
    })
    return processFlow
  }

  processFlow.requireNotLoggedIn = () => {
    protectorArray.push(async () => {
      const authentication = store.getState().authentication

      if (authentication.isLoggedIn) {
        return redirect(routesEndPoints.HOME)
      }
      return null
    })
    return processFlow
  }

  return processFlow
}

