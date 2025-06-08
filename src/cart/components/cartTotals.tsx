import { Box, Divider, Group, Text } from "@mantine/core";
import React from "react";
import { useCartTotals } from "../../hooks/useAppCart";
import { CurrencyFormatter } from "../../components/currency/currency";

export const CartTotals: React.FC = () => {
  const { delivery, total, subTotal } = useCartTotals();
  return (
    <Box>
      <Group justify="space-between" mb="sm">
        <Text>Subtotal</Text>
        <Text>
          <CurrencyFormatter value={subTotal} />
        </Text>
      </Group>
      <Group justify="space-between" mb="sm">
        <Text>Delivery</Text>
        <Text>
          <CurrencyFormatter value={delivery} />
        </Text>
      </Group>
      <Divider />
      <Group justify="space-between" mt="sm">
        <Text c="brand" size="lg" fw="bold">
          Total
        </Text>
        <Text c="brand" size="lg" fw="bold">
          <CurrencyFormatter value={total} />
        </Text>
      </Group>
    </Box>
  );
};
