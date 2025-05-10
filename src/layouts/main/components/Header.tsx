import { ActionIcon, Box, Container, Group, Image } from "@mantine/core";
import { IconMoon, IconSunHigh } from "@tabler/icons-react";
import React from "react";
import { useAppSettings } from "../../../hooks/useAppSettings";
import { Conditional } from "../../../components";
import { MainDropDown } from "./MainDropDown";
import { CartIcon } from "../../../cart/components/cartIcon";

export const MainHeader: React.FC = () => {
  const appSettings = useAppSettings();

  return (
    <>
      <Container fluid h={60}>
        <Group justify="space-between" h="100%">
          <Group align="center">
            <Image
              src={
                "https://margaherita.fra1.cdn.digitaloceanspaces.com/chrisbsite/pizzamanchickenmanlogo.png"
              }
              h={40}
              fit="contain"
            />
          </Group>
          <Group align="center" justify="space-between">
            <Box mr="sm">
              <CartIcon />
            </Box>
            <ActionIcon
              size="lg"
              variant="light"
              aria-label="setting"
              onClick={appSettings.toggleTheme}
            >
              <Conditional condition={!appSettings.darkMode}>
                <IconMoon stroke={1.5} />
              </Conditional>
              <Conditional condition={appSettings.darkMode}>
                <IconSunHigh stroke={0.5} />
              </Conditional>
            </ActionIcon>
            <MainDropDown />
          </Group>
        </Group>
      </Container>
    </>
  );
};
