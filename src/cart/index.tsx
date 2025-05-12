import {
  Button,
  Container,
  Group,
  Paper,
  ScrollArea,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import React from "react";
import { Conditional } from "../components";
import { EmptyCart } from "./components/emptyCart";
import { useCartItems, useCartItemsCount } from "../hooks/useAppCart";
import { CartItemList } from "./components/cartItemList";

export const Cart: React.FC = () => {
  const itemCount = useCartItemsCount();
  const cartItems = useCartItems();

  return (
    <>
      <Container fluid w="100%">
        <ScrollArea scrollHideDelay={0} h={600} offsetScrollbars scrollbarSize={5}>
          <Title ta="center" order={2} fw={500}>
            Cart
          </Title>
          <Conditional condition={cartItems.length === 0}>
            <EmptyCart />
          </Conditional>

          <Conditional condition={cartItems.length >= 1}>
            <Text size="lg" c="dimmed" my="md">
              Review your shopping cart, and checkout your order
            </Text>
            <Paper withBorder py="sm" px="md" shadow="md">
              <Stack gap="xl">
                <Group justify="space-between">
                  <Text size="lg">Cart Items: {itemCount}</Text>
                  <Button
                    color="rgba(255, 10, 10, 0.85)"
                    variant="outline"
                    size="xs"
                  >
                    Clear all
                  </Button>
                </Group>
                <Stack>
                  {cartItems.map((cartItem, index) => (
                    <CartItemList {...cartItem} key={index} />
                  ))}
                </Stack>
              </Stack>
            </Paper>
          </Conditional>
        </ScrollArea>
      </Container>
    </>
  );
};
