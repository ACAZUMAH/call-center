import React from "react";
import { useAppAuthentication } from "../hooks/useAppAuthentication";
import { Navigate, Outlet } from "react-router-dom";
import { routesEndPoints } from "../constants";
import { Conditional } from "../components";

export const RouteProtector: React.FC = () => {
  const { isLoggedIn } = useAppAuthentication();
  return (
    <>
      <Conditional condition={isLoggedIn}>
        <Outlet />
      </Conditional>
      <Conditional  condition={!isLoggedIn}>
        <Navigate to={routesEndPoints.LOGIN} />
      </Conditional>
    </>
  );
};
