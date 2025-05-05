import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { routes } from "./routes";

export const AppRouter = () => {

    const router = createBrowserRouter([{
        element: <Outlet />,
        children: [...routes]
    }])

    return <RouterProvider router={router}/>
}