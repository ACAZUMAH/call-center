import { RouteObject } from "react-router-dom";
import { MainLayout } from "../layouts/main";
import { routesEndPoints } from "../constants";
import { Login } from "../authentication/login";
import { OrderManagement } from "../orders";
import { Home } from "../Home";
import { Checkout } from "../checkout";
import { routeProtector } from "./RouteProtector";

export const routes: RouteObject[] = [
  {
    path: routesEndPoints.HOME,
    element: <MainLayout />,
    loader: routeProtector().requireLoggedIn(),
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: routesEndPoints.CHECKOUT,
        element: <Checkout />,
      },
      {
        path: routesEndPoints.ORDERS,
        element: <OrderManagement />,
      },
    ],
  },
  {
    path: routesEndPoints.LOGIN,
    loader: routeProtector().requireNotLoggedIn(),
    element: <Login />,
  },
];
