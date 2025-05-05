import { RouteObject } from "react-router-dom";
import { Products } from "../products";
import { MainLayout } from "../layouts/main";
import { routesEndPoints } from "../constants";
import { Settings } from "../settings";

export const routes: RouteObject[] = [
    {
        path: routesEndPoints.HOME,
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Products />
            },
            {
                path: routesEndPoints.SETTINGS,
                element: <Settings />
            }
        ]
    }
] 