import { Divider, NavLink, Paper } from "@mantine/core";
import React from "react";
import classes from "../css/index.module.css";

export const OrderNavs: React.FC = () => {
  return (
    <Paper withBorder radius="xl" w={210}>
      <NavLink
        label="Orders"
        py="xs"
        variant="subtel"
        classNames={{ root: classes.navFirst }}
      />
      <Divider />
      <NavLink label="New Orders" py="xs" variant="subtel" />
      <Divider />
      <NavLink
        label="Order Refunds"
        py="xs"
        variant="subtel"
        classNames={{ root: classes.navLast }}
      />
    </Paper>
  );
};
