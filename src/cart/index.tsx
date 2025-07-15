import {
  Button,
  Fieldset,
  Group,
  ScrollArea,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import React, { useState } from "react";
import { Conditional } from "../components";
import { EmptyCart } from "./components/emptyCart";
import {
  useCartItems,
  useCartItemsCount,
  useClearCart,
} from "../hooks/useAppCart";
import { CartItemList } from "./components/cartItemList";
import { CartTotals } from "./components/cartTotals";
import { ConfirmOrder } from "./components/confirmOrder";
import { CustomerDetails } from "./components/customerDetails";
import { MapModal } from "./components/MapModal";

export const Cart: React.FC = () => {
  const [showMap, setShowMap] = useState(false);
  const itemCount = useCartItemsCount();
  const cartItems = useCartItems();
  const clearCart = useClearCart();

  return (
    <>
      <ScrollArea
        scrollHideDelay={0}
        h="auto"
        offsetScrollbars
        scrollbarSize={5}
      >
        <Fieldset
          legend={
            <Title ta="center" order={2} fw={500}>
              Cart
            </Title>
          }
          radius="lg"
          p={10}
        >
          <Conditional condition={cartItems.length >= 1}>
            <Text size="lg" c="dimmed" my="md">
              Review your shopping cart, and checkout your order
            </Text>
            <Stack gap="md">
              <Group justify="space-between">
                <Text size="lg">Cart Items: {itemCount}</Text>
                <Button
                  color="rgba(255, 10, 10, 0.85)"
                  variant="outline"
                  size="xs"
                  radius="xl"
                  onClick={() => clearCart()}
                >
                  Clear all
                </Button>
              </Group>
              <Stack>
                {cartItems.map((cartItem, index) => (
                  <CartItemList {...cartItem} key={index} />
                ))}
              </Stack>
              <CartTotals />
              <CustomerDetails />
              <ConfirmOrder openMap={() => setShowMap(true)} />
            </Stack>
          </Conditional>
          <Conditional condition={cartItems.length === 0}>
            <EmptyCart />
          </Conditional>
        </Fieldset>
      </ScrollArea>
      <MapModal opened={showMap} onClose={() => setShowMap(!showMap)} />
    </>
  );
};
