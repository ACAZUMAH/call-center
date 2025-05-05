import { AppShell } from "@mantine/core";
import { MainHeader } from "./components/Header";
import { SideBar } from "./components/SideBar";
import { Outlet } from "react-router-dom";
import { Cart } from "../../cart";

export const MainLayout = () => {
  return (
    <>
      <AppShell
        header={{ height: "60" }}
        navbar={{ width: 180, breakpoint: "md", collapsed: { mobile: true } }}
      >
        <AppShell.Header>
          <MainHeader />
        </AppShell.Header>
        <AppShell.Navbar>
          <SideBar />
        </AppShell.Navbar>
        <AppShell.Main>
          <Outlet />
        </AppShell.Main>
      </AppShell>
      <Cart />
    </>
  );
};
