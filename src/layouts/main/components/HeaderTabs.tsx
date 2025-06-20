import { Group, Paper, ScrollArea } from "@mantine/core";
import React from "react";
import classes from "../css/index.module.css";
import { headerTabs } from "../constants";
import { HeaderTabItems } from "./HeaderTabsItem";

export const HeaderTabs: React.FC = () => {
  return (
    <ScrollArea scrollbars="x" scrollbarSize={0}>
      <Paper mt="3px" className={classes.paper}>
        <Group>
          {headerTabs.map((item) => ( <HeaderTabItems {...item} />))}
        </Group>
      </Paper>
    </ScrollArea>
  );
};
