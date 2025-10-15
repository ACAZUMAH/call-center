import { Divider, Group, Stack, Text } from "@mantine/core";
import React from "react";
import { useCartTotals } from "../../hooks/useAppCart";
import { CurrencyFormatter } from "../../components/currency/currency";

export const CartTotals: React.FC = () => {
  const { total, subTotal, delivery } = useCartTotals();
  return (
    <Stack gap={5}>
      <Group justify="space-between">
        <Text>Subtotal</Text>
        <Text>
          <CurrencyFormatter value={subTotal} />
        </Text>
      </Group>
      <Group justify="space-between">
        <Text>Delivery</Text>
        <Text>
          <CurrencyFormatter value={delivery} />
        </Text>
      </Group>
      <Divider my="xs" />
      <Group justify="space-between">
        <Text c="brand" size="lg" fw="bold">
          Total
        </Text>
        <Text c="brand" size="lg" fw="bold">
          <CurrencyFormatter value={total} />
        </Text>
      </Group>
      <Divider my="xs" />
    </Stack>
  );
};
