import React from "react";
import { CartItem } from "../../interfaces/redux";
import {
  ActionIcon,
  Badge,
  Card,
  Flex,
  Group,
  Stack,
  Text,
} from "@mantine/core";
import {
  IconCircleX,
  IconMinus,
  IconPlus,
} from "@tabler/icons-react";
import {
  useDecreaseCartItemQuantity,
  useIncreaseCartItemQuantity,
  useRemoveItemFromCart,
} from "../../hooks/useAppCart";
import { CurrencyFormatter } from "../../components/currency/currency";

export const CartItemList: React.FC<CartItem> = (cartItem) => {
  const { item, quantity } = cartItem;
  const increaseQuantity = useIncreaseCartItemQuantity();
  const decreaseQuantity = useDecreaseCartItemQuantity();
  const removeItem = useRemoveItemFromCart();

  return (
    <Card withBorder radius="md" p="md" shadow="sm">
      <Flex direction="row">
        <Stack justify="space-between" flex={8}>
          <Group justify="space-between">
            <Text size="lg">{item.name}</Text>
            <ActionIcon
              p={0}
              h={24}
              w={24}
              color="red"
              variant="subtle"
              radius="sm"
              onClick={() => removeItem(item._id!)}
            >
              <IconCircleX size={16} />
            </ActionIcon>
          </Group>
          <Group justify="space-between">
            <Group justify="baseLine">
              <Badge size="xl">
                <CurrencyFormatter value={item.unitPrice!} />
              </Badge>
            </Group>
            <Group gap="sm">
              <ActionIcon
                variant="default"
                radius="xl"
                onClick={() => decreaseQuantity(cartItem)}
              >
                <IconMinus stroke={1.5} size={12} />
              </ActionIcon>
              <Text>{quantity}</Text>
              <ActionIcon
                variant="default"
                radius="xl"
                onClick={() => increaseQuantity(cartItem)}
              >
                <IconPlus stroke={1.5} size={12} />
              </ActionIcon>
            </Group>
          </Group>
        </Stack>
      </Flex>
    </Card>
  );
};
