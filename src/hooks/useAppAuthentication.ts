import { useAppSelector } from "./useAppReduxHooks"

export const useAppAuthentication = () => {
    const authentication = useAppSelector((state) => state.authentication)

    return { ...authentication }
}