import { AppShell } from "@mantine/core";
import { MainHeader } from "./components/Header";
import { Outlet } from "react-router-dom";
//import { MenuBar } from "./components/menuBar";
//import { Cart } from "../../cart";

export const MainLayout = () => {
  return (
    <>
      <AppShell header={{ height: 102 }} >
        <AppShell.Header>
          <MainHeader />
        </AppShell.Header>
        <AppShell.Main>
          <Outlet />
        </AppShell.Main>
      </AppShell>
    </>
  );
};
