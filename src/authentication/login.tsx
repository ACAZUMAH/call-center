import { ActionIcon, Box, Button, Container, Group, Paper, PasswordInput, Stack, TextInput, Title } from "@mantine/core";
import React from "react";
import { Conditional } from "../components";
import { useAppSettings } from "../hooks/useAppSettings";
import { IconMoon, IconSunHigh } from "@tabler/icons-react";
import { useLoginForm } from "./hooks/useLoginForm";

export const Login: React.FC = () => {
  const appSettings = useAppSettings();
  const form = useLoginForm()

  return (
    <>
      <Group pt={15} px={10} justify="flex-end">
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
      <Container fluid p="xl" py="7%">
          <Box>
            <Title order={3} fw={500} ta="center">
              Sign in
            </Title>
            <Paper
              mt="md"
              p="xl"
              withBorder
              radius="xl"
              shadow="sm"
              maw={500}
              mx="auto"
            >
              <Stack gap="sm">
                <TextInput
                  withAsterisk
                  name="phoneNumber"
                  c="dimmed"
                  label="Phone Number"
                  placeholder="Enter your phone number"
                  size="sm"
                  radius="xl"
                  value={form.values.phoneNumber}
                  onChange={form.handleChange}
                  error={form.errors.phoneNumber}
                />
                <PasswordInput
                  withAsterisk
                  name="password"
                  c="dimmed"
                  label="Password"
                  placeholder="Enter your password"
                  size="sm"
                  radius="xl"
                  value={form.values.password}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  error={form.touched.password ? form.errors.password : ""}
                />
                <Button radius="xl" mt="sm" disabled={!form.isValid}>
                  Sign in
                </Button>
              </Stack>
            </Paper>
          </Box>
      </Container>
    </>
  );
};
