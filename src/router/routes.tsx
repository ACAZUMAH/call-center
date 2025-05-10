import { RouteObject } from "react-router-dom";
import { MainLayout } from "../layouts/main";
import { routesEndPoints } from "../constants";
import { Login } from "../authentication/login";
import { RouteProtector } from "./RouteProtector";
import { History } from "../history";
import { Home } from "../Home";

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
            element: <Home />,
          },
          {
            path: routesEndPoints.HISTORY,
            element: <History />,
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