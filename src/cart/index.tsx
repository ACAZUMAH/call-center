import { Drawer } from "@mantine/core";
import React from "react";
import { useCartOpened, useCartClose } from "../hooks/useAppCart";

export const Cart: React.FC = () => {
  const close = useCartClose();
  const opened = useCartOpened();

  return (
    <>
      <Drawer
        opened={opened}
        onClose={close}
        title="Cart"
        position="right"
        size="lg"
      >
        <h1>Cart</h1>
      </Drawer>
    </>
  );
};
