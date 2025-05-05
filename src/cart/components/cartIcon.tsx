import { ActionIcon, Badge, Box } from "@mantine/core";
import { IconShoppingCart } from "@tabler/icons-react";
import React from "react";
import { useCartItemsCount, useToggleCart } from "../../hooks/useAppCart";

export const CartIcon: React.FC = () => {
  const toggleCart = useToggleCart();
  const cartItemsCount = useCartItemsCount();

  return (
    <>
      <Box pos="relative">
        <ActionIcon variant="transparent" size="lg" onClick={toggleCart}>
          <IconShoppingCart stroke={1.5} />
        </ActionIcon>
        <Badge pos="absolute" right={0} top={0} circle size="sm">
          {cartItemsCount}
        </Badge>
      </Box>
    </>
  );
};
