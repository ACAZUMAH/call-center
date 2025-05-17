import { Box, Button, Group, Select } from "@mantine/core";
import { IconChevronDown } from "@tabler/icons-react";
import React from "react";
import { useAppNavigation } from "../../hooks/useAppNavigation";
import { routesEndPoints } from "../../constants";

export const ConfirmOrder: React.FC = () => {
  const navigateToCheckout = useAppNavigation(routesEndPoints.CHECKOUT)
  return (
    <Box>
      <Group justify="space-between">
        <Select
          flex="1"
          label="Order Method"
          radius="md"
          c="dimmed"
          rightSection={<IconChevronDown stroke={1.5}/>}
          data={["Pick up", "Delivery"]}
        />
        <Select
          flex="1"
          label="Payment Method"
          radius="md"
          c="dimmed"
          rightSection={<IconChevronDown stroke={1.5}/>}
          data={["Cash", "MOMO"]}
        />
      </Group>
      <Button color="brand" fullWidth my="md" radius="xl" onClick={navigateToCheckout}>
        Checkout
      </Button>
    </Box>
  );
};
