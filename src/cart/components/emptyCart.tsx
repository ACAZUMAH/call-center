import { Flex, Text } from "@mantine/core";
import { IconShoppingCart } from "@tabler/icons-react";
import React from "react";

export const EmptyCart: React.FC = () => {
  return (
    <Flex direction="column" align="center" p="sm">
      <IconShoppingCart stroke={1.5} size={35} color="#ee3636" />
      <Text ta="center" size="lg">
        Your cart is empty, add products
      </Text>
    </Flex>
  );
};
