import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { routes } from "./routes";
import { useForceUpdate } from "@mantine/hooks";
import { useAppAuthentication } from "../hooks/useAppAuthentication";
import { useEffect } from "react";

export const AppRouter = () => {
    const forceUpdate = useForceUpdate()
    const { isLoggedIn } = useAppAuthentication()

    const router = createBrowserRouter([{
        element: <Outlet />,
        children: [...routes]
    }])

    useEffect(() => forceUpdate(), [isLoggedIn])
    
    return <RouterProvider router={router}/>
}