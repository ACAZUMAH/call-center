import { Menu } from "@mantine/core";
import React from "react";
import { UserButton } from "./UserButton";
import { IconLogout, IconSettings } from "@tabler/icons-react";
import { useAppAuthentication } from "../../../hooks/useAppAuthentication";

export const MainDropDown: React.FC = () => {
  const { phoneNumber } = useAppAuthentication();
  return (
    <Menu width={200} offset={0} position="bottom-end">
      <Menu.Target>
        <div style={{ margin: 0 }}>
          <UserButton
            image="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png"
            name={phoneNumber!}
          />
        </div>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item leftSection={<IconSettings />} p={10}>
          Settings
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item leftSection={<IconLogout />} color="red" p={10}>
          Log out
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};
