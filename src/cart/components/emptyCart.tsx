import { Flex, Paper, Text } from "@mantine/core";
import { IconShoppingCart } from "@tabler/icons-react";
import React from "react";

export const EmptyCart: React.FC = () => {
  return (
    <Paper withBorder radius="xl" py="lg" px="md" mt="md">
      <Flex direction="column" align="center">
        <IconShoppingCart stroke={1.5} size={30} color="#06449c" />
        <Text ta="center" size="lg">Your cart is empty, add products</Text>
      </Flex>
    </Paper>
  );
};
