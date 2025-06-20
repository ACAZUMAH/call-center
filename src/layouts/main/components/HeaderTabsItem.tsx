import React from "react";
import { HeaderTabItemsProps } from "../interfaces";
import { useAppNavigation } from "../../../hooks/useAppNavigation";
import { Anchor } from "@mantine/core";
import classes from "../css/index.module.css";
import { useLocation } from "react-router-dom";

export const HeaderTabItems: React.FC<HeaderTabItemsProps> = ({
  label,
  route,
}) => {
  const navigateToRoute = useAppNavigation(route);

  const location = useLocation();

  return (
    <Anchor<"a">
      href="route"
      className={classes.mainLink}
      data-active={location.pathname === route || undefined}
      onClick={(e) => {
        e.preventDefault();
        navigateToRoute();
      }}
    >
      {label}
    </Anchor>
  );
};
