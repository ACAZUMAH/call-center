import { RouteObject } from "react-router-dom";
import { Products } from "../products";
import { MainLayout } from "../layouts/main";
import { routesEndPoints } from "../constants";
import { Settings } from "../settings";
import { Login } from "../authentication/login";
import { RouteProtector } from "./RouteProtector";

export const routes: RouteObject[] = [
  {
    path: routesEndPoints.HOME,
    element: <MainLayout />,
    children: [
      {
        element: <RouteProtector />,
        children: [
          {
            index: true,
            element: <Products />,
          },
          {
            path: routesEndPoints.SETTINGS,
            element: <Settings />,
          },
        ],
      },
    ],
  },
  {
    path: routesEndPoints.LOGIN,
    element: <Login />,
  },
]; 