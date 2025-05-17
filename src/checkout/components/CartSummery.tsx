import { Box, Card, Flex, Paper, Text } from "@mantine/core";
import React from "react";
import { useCartItems } from "../../hooks/useAppCart";
import { CurrencyFormatter } from "../../components/currency/currency";
import { CartTotals } from "../../components/cartTotals/cartTotals";

interface Props {
  item: any;
  quantity: number;
}
const CartSummaryItem: React.FC<Props> = (cartItem) => {
  const { item, quantity } = cartItem;

  return (
    <>
      <Card withBorder padding="xs" radius="md" mb="md" mt="lg">
        <Box px="md">
          <Text size="xl">{item.name}</Text>
          <Flex justify="space-between">
            <Text>Quantity: {quantity}</Text>
            <Text size="xl">
              <CurrencyFormatter value={item.price} />
            </Text>
          </Flex>
        </Box>
      </Card>
    </>
  );
};

export const CartSummery: React.FC = () => {
  const cartItems = useCartItems();
  return (
    <>
      <Paper withBorder p="md">
        <Text size="lg" fw={500}>
          Cart summary
        </Text>

        {cartItems.map((cartItem) => (
          <CartSummaryItem {...cartItem} key={cartItem.item?.id} />
        ))}

        <CartTotals /> 
      </Paper>
    </>
  );
};
