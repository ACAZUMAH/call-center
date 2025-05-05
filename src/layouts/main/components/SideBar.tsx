import { AppShell, ScrollArea } from "@mantine/core";
import React from "react";
import { menuItems } from ".";
import { SideBarItems } from "./sideBarItems";
//import classes from "../css/index.module.css";

export const SideBar: React.FC = () => {
  return (
    <AppShell.Section grow component={ScrollArea}>
      {menuItems.map((item) => (
        <SideBarItems {...item} key={item.label} />
      ))}
    </AppShell.Section>
  );
};
