import {
  Box,
  Button,
  Container,
  Paper,
  PasswordInput,
  Stack,
  TextInput,
  Title,
} from "@mantine/core";
import React from "react";
import { useLoginForm } from "./hooks/useLoginForm";
import { useLoginMutation } from "./hooks/useLoginMutation";

export const Login: React.FC = () => {
  const form = useLoginForm();
  const { handleLogin, loading } = useLoginMutation();

  const handleSubmit = async () => {
    const res = await handleLogin(
      form.values.phoneNumber,
      form.values.password
    );
    if (res) {
      form.resetForm();
    }
  };

  return (
    <>
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
              <Button
                radius="xl"
                mt="sm"
                disabled={!form.isValid}
                loading={loading}
                onClick={handleSubmit}
              >
                Sign in
              </Button>
            </Stack>
          </Paper>
        </Box>
      </Container>
    </>
  );
};
