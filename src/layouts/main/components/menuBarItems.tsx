import React from "react";
import { SidebarItemsProps } from "../interfaces";
import { useAppNavigation } from "../../../hooks/useAppNavigation";
import { Tabs } from "@mantine/core";

export const MenuBarItems: React.FC<SidebarItemsProps> = ({ label, Icon, route }) => {
  
  const navigateToRoute = useAppNavigation(route);

  return (
    <>
      <Tabs.Tab value={route} leftSection={<Icon stroke={1.5} size={20} onClick={navigateToRoute}/>}>
        {label}
      </Tabs.Tab>
    </>
  );
};
