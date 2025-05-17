import { Box, Divider, Group, Text } from "@mantine/core";
import React from "react";

export const CartTotals: React.FC = () => {
  return (
    <Box>
      <Group justify="space-between" mb="sm">
        <Text>Subtotal</Text>
        <Text>GH¢</Text>
      </Group>
      <Group justify="space-between" mb="sm">
        <Text>Delivery</Text>
        <Text>GH¢</Text>
      </Group>
      <Divider />
      <Group justify="space-between" mt="sm">
        <Text c="brand" size="lg" fw="bold">
          Total
        </Text>
        <Text c="brand" size="lg" fw="bold">
          GH¢
        </Text>
      </Group>
    </Box>
  );
};
