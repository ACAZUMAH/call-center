import {
  Button,
  Fieldset,
  Group,
  ScrollArea,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import React, { useEffect, useState } from "react";
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
import { BranchesSearch } from "./components/BranchesSearch";
import { BranchType } from "../interfaces/graphql/graphql";
import { useCheckAvailabilityMutation } from "./hooks/useCheckAvailability";
import { AvailabilityModal } from "./components/AvailabilityModal";

export const Cart: React.FC = () => {
  const [branch, setBranch] = useState<BranchType>();
  const [availability, setAvailability] = useState<any>();

  const itemCount = useCartItemsCount();
  const cartItems = useCartItems();
  const clearCart = useClearCart();

  const { handleCheckAvailability } = useCheckAvailabilityMutation();

  useEffect(() => {
    const productIds = cartItems.map((item) => item.item._id!);
    if (productIds.length < 1 || !branch) return;

    const fetchAvailability = async () => {
      const response = await handleCheckAvailability({
        productIds,
        branchId: branch?._id!,
      });

      setAvailability(response);
    };

    fetchAvailability();
  }, [branch]);

  console.log("checkAvailability", JSON.stringify(availability, null, 2));

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
                  onClick={() => {
                    clearCart();
                    setBranch(undefined);
                    setAvailability(undefined);
                  }}
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
              <Conditional condition={!branch}>
                <BranchesSearch setBranch={setBranch} />
              </Conditional>
              <ConfirmOrder />
            </Stack>
          </Conditional>
          <Conditional condition={cartItems.length === 0}>
            <EmptyCart />
          </Conditional>
        </Fieldset>
      </ScrollArea>

      <AvailabilityModal
        opened={Boolean(availability)}
        onClose={() => setAvailability(undefined)}
        availability={availability}
      />
    </>
  );
};
