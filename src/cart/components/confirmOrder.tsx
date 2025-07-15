import { Box, Button, Group, Select } from "@mantine/core";
import { IconChevronDown } from "@tabler/icons-react";
import React from "react";
import { orderMethodsSelectData } from "../constants";
import { ComfirmOrderProps } from "../interface";
import { useOderCheckoutForm } from "../hooks/useOrderCheckoutForm";
import { createSelectData } from "../../helpers";
import { PaymentOptionType } from "../../interfaces/graphql/graphql";

export const ConfirmOrder: React.FC<ComfirmOrderProps> = ({ openMap }) => {
  const form = useOderCheckoutForm();

  const handleChangeOderMethod = (value: any) => {
    form.setFieldValue("orderMethod", value);
    console.log(value)
    if (value === "delivery") {
      openMap();
    }
  };

  return (
    <Box>
      <Group justify="space-between">
        <Select
          flex="1"
          label="Order Method"
          radius="md"
          c="dimmed"
          rightSection={<IconChevronDown stroke={1.5} />}
          data={orderMethodsSelectData}
          value={form.values.orderMethod}
          onChange={handleChangeOderMethod}
        />
        <Select
          flex="1"
          label="Payment Method"
          radius="md"
          c="dimmed"
          rightSection={<IconChevronDown stroke={1.5} />}
          data={createSelectData(PaymentOptionType)}
          value={form.values.paymentMethod}
          onChange={(value) => form.setFieldValue("paymentMethod", value)}
        />
      </Group>
      <Button color="brand" fullWidth my="md" radius="xl">
        Checkout
      </Button>
    </Box>
  );
};
