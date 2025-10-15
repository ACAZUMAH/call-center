import {
  Button,
  Card,
  Group,
  Paper,
  ScrollArea,
  Stack,
  Text,
} from "@mantine/core";
import React, { useEffect, useState } from "react";
import { Conditional } from "../components";
import { EmptyCart } from "./components/emptyCart";
import { useCartItems, useClearCart } from "../hooks/useAppCart";
import { CartItemList } from "./components/cartItemList";
import { CartTotals } from "./components/cartTotals";
import { ConfirmOrder } from "./components/confirmOrder";
import { BranchesSearch } from "./components/BranchesSearch";
import {
  BranchType,
  CallCenterPaymentOptionType,
  EnumDeliveryType,
} from "../interfaces/graphql/graphql";
import { useCheckAvailabilityMutation } from "./hooks/useCheckAvailability";
import { showNotification } from "@mantine/notifications";
import { useHover } from "@mantine/hooks";
import { useOderCheckoutForm } from "./hooks/useOrderCheckoutForm";
import { IconCircleChevronRight } from "@tabler/icons-react";
import { useCreateOrderMutation } from "./hooks/useCreateOrderMutation";
import { v4 as uuidv4 } from "uuid";

export const Cart: React.FC = () => {
  const { hovered, ref } = useHover<HTMLButtonElement>();
  const [branch, setBranch] = useState<BranchType>();
  const cartItems = useCartItems();
  const clearCart = useClearCart();
  const form = useOderCheckoutForm();
  const { handleCheckAvailability } = useCheckAvailabilityMutation();
  const { handleCreateOrder, isPending } = useCreateOrderMutation();

  useEffect(() => {
    const productIds = cartItems.map((item) => item.item._id!);
    if (productIds.length < 1 || !branch) return;

    const fetchAvailability = async () => {
      const response = await handleCheckAvailability({
        productIds,
        branchId: branch?._id!,
      });

      if (response.unAvailable.length > 0) {
        const unavailableItems = cartItems
          .filter((cartItem) =>
            response.unAvailable.includes(cartItem.item._id)
          )
          .map((cartItem) => cartItem.item.name)
          .join(", ");

        showNotification({
          title: "Unavailable Items",
          message: `The following items are unavailable at the selected branch: ${unavailableItems}`,
          color: "red",
          autoClose: 8000,
        });
      }
    };

    fetchAvailability();
  }, [branch]);

  const handleCheckoutOrder = async () => {
    const res = await handleCreateOrder({
      branchId: branch?._id!,
      customerName: form.values.customerName,
      address: form.values.address,
      phoneNumber: form.values.customerPhone,
      momoNumber:
        form.values.paymentMethod === CallCenterPaymentOptionType.MobilePayment
          ? form.values.customerPhone
          : undefined,
      paymentOption:
        form.values.orderMethod === EnumDeliveryType.Pickup
          ? CallCenterPaymentOptionType.Cash
          : form.values.paymentMethod,
      packages: cartItems.map((item) => ({
        productId: item.item._id!,
        quantity: item.quantity,
      })),
      pickup: form.values.orderMethod === EnumDeliveryType.Pickup,
      deliveryType: form.values.orderMethod,
      idempotencyKey: uuidv4(),
    });

    if (res && res.success) {
      clearCart();
      setBranch(undefined);
      form.resetForm();
    }
  };

  return (
    <>
      <ScrollArea
        scrollHideDelay={0}
        h="auto"
        offsetScrollbars
        scrollbarSize={5}
      >
        <Paper radius="lg" p={10} withBorder>
          <Stack gap="md">
            <ConfirmOrder branch={branch} form={form} setBranch={setBranch} />
            <Conditional condition={cartItems.length >= 1}>
              <Conditional condition={!branch}>
                <BranchesSearch setBranch={setBranch} />
              </Conditional>
            </Conditional>
            <Card withBorder>
              <Group justify="space-between" mb="sm">
                <Text size="sm">Cart Items</Text>
                <Button
                  ref={ref as React.Ref<HTMLButtonElement>}
                  color="rgba(255, 10, 10, 0.85)"
                  variant={hovered ? "light" : "subtle"}
                  radius="xl"
                  onClick={() => {
                    clearCart();
                    setBranch(undefined);
                  }}
                >
                  Clear
                </Button>
              </Group>

              <Conditional condition={cartItems.length >= 1}>
                <Stack>
                  {cartItems.map((cartItem, index) => (
                    <CartItemList {...cartItem} key={index} />
                  ))}
                </Stack>
              </Conditional>
              <Conditional condition={cartItems.length < 1}>
                <EmptyCart />
              </Conditional>
            </Card>
            <Conditional condition={cartItems.length >= 1}>
              <Paper withBorder p="md">
                <CartTotals />
                <Group justify="flex-end">
                  <Button
                    color="brand"
                    mt="sm"
                    radius="xl"
                    disabled={!form.isValid}
                    rightSection={<IconCircleChevronRight size="1rem" />}
                    onClick={handleCheckoutOrder}
                    loading={isPending}
                  >
                    Checkout
                  </Button>
                </Group>
              </Paper>
            </Conditional>
          </Stack>
        </Paper>
      </ScrollArea>
    </>
  );
};
