import { AppShell } from "@mantine/core";
import React from "react";
import { AuthHeader } from "./components/AuthHeader";
import { Outlet } from "react-router-dom";

export const AuthLayout: React.FC = () => {
  return (
    <AppShell header={{ height: "60" }}>
      <AppShell.Header>
        <AuthHeader />
      </AppShell.Header>
      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
};
