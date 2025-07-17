import { Box, Button, Group, Select, TextInput } from "@mantine/core";
import { IconChevronDown } from "@tabler/icons-react";
import React from "react";
import { ComfirmOrderProps } from "../interface";
import { useOderCheckoutForm } from "../hooks/useOrderCheckoutForm";
import { createSelectData } from "../../helpers";
import { EnumDeliveryType, PaymentOptionType } from "../../interfaces/graphql/graphql";

export const ConfirmOrder: React.FC<ComfirmOrderProps> = ({ openMap }) => {
  const form = useOderCheckoutForm();

  const handleChangeOderMethod = (value: any) => {
    form.setFieldValue("orderMethod", value);
    if (value === EnumDeliveryType.Motor) {
      openMap();
    }
  };

  return (
    <Box>
      <Group grow mb="sm">
        <TextInput
          name="Name"
          label="Name"
          radius="md"
          placeholder="Enter customer name"
          withAsterisk
          c="dimmed"
          value={form.values.customerName}
          onChange={(event) => form.setFieldValue("customerName", event.currentTarget.value)}
        />
        <TextInput
          name="phoneNumber"
          label="Phone Number"
          radius="md"
          placeholder="Enter customer phone number"
          withAsterisk
          c="dimmed"
          value={form.values.customerPhone}
          onChange={(event) => form.setFieldValue("customerPhone", event.currentTarget.value)}
        />
      </Group>
      <Group grow>
        <Select
          mb="md"
          flex="1"
          label="Order Method"
          radius="md"
          withAsterisk
          c="dimmed"
          placeholder="Select order method"
          rightSection={<IconChevronDown stroke={1.5} />}
          data={createSelectData(EnumDeliveryType)}
          value={form.values.orderMethod}
          onChange={handleChangeOderMethod}
        />
        <Select
          mb="md"
          flex="1"
          label="Payment Method"
          radius="md"
          c="dimmed"
          withAsterisk
          placeholder="Select payment method"
          rightSection={<IconChevronDown stroke={1.5} />}
          data={createSelectData(PaymentOptionType)}
          value={form.values.paymentMethod}
          onChange={(value) => form.setFieldValue("paymentMethod", value)}
        />
      </Group>
      <Button color="brand" fullWidth my="sm" radius="xl">
        Checkout
      </Button>
    </Box>
  );
};
