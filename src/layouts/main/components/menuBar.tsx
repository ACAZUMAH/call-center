import { Container, Paper, ScrollArea, Tabs } from "@mantine/core";
import React, { useMemo } from "react";
import { menuItems } from ".";
import classes from "../css/index.module.css";
import { MenuBarItems } from "./menuBarItems";
import { useLocation } from "react-router-dom";

export const MenuBar: React.FC = () => {

  const location = useLocation();

  const active = useMemo(
    () => location.pathname, [location.pathname]
  );

  return (
    <ScrollArea scrollbars="x" scrollbarSize={0}>
      <Paper pt={8} withBorder className={classes.paper}>
        <Container size="95%" fluid>
          <Tabs
            value={active}
            bd={0}
            miw={600}
            classNames={{ list: classes.tabsList }}
          >
            <Tabs.List>
              {menuItems.map((menu, index) => (
                <MenuBarItems {...menu} key={index} />
              ))}
            </Tabs.List>
          </Tabs>
        </Container>
      </Paper>
    </ScrollArea>
  );
};
