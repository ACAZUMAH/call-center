import React from "react";
import { CartItem } from "../../interfaces/redux";
import {
  ActionIcon,
  Flex,
  Group,
  Paper,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { IconMinus, IconPlus } from "@tabler/icons-react";

export const CartItemList: React.FC<CartItem> = (cartItem) => {
  const { item, quantity } = cartItem;

  return (
    <Paper withBorder radius="md" p="md" shadow="0">
      <Flex direction="row">
        <Stack justify="space-between" flex={8}>
          <Text size="lg">{item.name}</Text>
          <Group justify="space-between">
            <Group justify="baseLine">
              <Title order={3} c="brand">
                GH¢ {item.price}
              </Title>
            </Group>
            <Group gap="sm">
              <ActionIcon variant="default" radius="xl">
                <IconMinus stroke={1.5} size={12} />{" "}
              </ActionIcon>
              <Text>{quantity}</Text>
              <ActionIcon variant="default" radius="xl">
                <IconPlus stroke={1.5} size={12} />{" "}
              </ActionIcon>
            </Group>
          </Group>
        </Stack>
      </Flex>
    </Paper>
  );
};
