import { ActionIcon, Container, Group, Image } from "@mantine/core";
import React from "react";
import { Conditional } from "../../../components";
import { IconMoon, IconSunHigh } from "@tabler/icons-react";
import { useAppSettings } from "../../../hooks/useAppSettings";

export const AuthHeader: React.FC = () => {
  const appSettings = useAppSettings();
  return (
    <Container fluid h="60%" pt="xs">
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

        <ActionIcon
          size="lg"
          variant="light"
          aria-label="setting"
          onClick={appSettings.toggleTheme}
        >
          <Conditional condition={appSettings.darkMode}>
            <IconSunHigh stroke={1.5} />
          </Conditional>
          <Conditional condition={!appSettings.darkMode}>
            <IconMoon stroke={1.5} />
          </Conditional>
        </ActionIcon>
      </Group>
    </Container>
  );
};
