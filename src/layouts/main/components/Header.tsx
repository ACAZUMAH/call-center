import { ActionIcon, Box, Container, Group, Title } from "@mantine/core";
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
          <Group>
            <Title ta="center" order={3} c="brand">
              Call Center
            </Title>
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
