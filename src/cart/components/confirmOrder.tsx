import { Box, Button, Group, Select, TextInput } from "@mantine/core";
import { IconChevronDown } from "@tabler/icons-react";
import React from "react";
import { ConfirmOrderProps } from "../interface";
import { useOderCheckoutForm } from "../hooks/useOrderCheckoutForm";
import { createSelectData } from "../../helpers";
import { PaymentOptionType } from "../../interfaces/graphql/graphql";

export const ConfirmOrder: React.FC<ConfirmOrderProps> = ({ branch }) => {
  const form = useOderCheckoutForm();

  const handleChangeOderMethod = (value: any) => {
    form.setFieldValue("orderMethod", value);
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
          onChange={(event) =>
            form.setFieldValue("customerName", event.currentTarget.value)
          }
        />
        <TextInput
          name="phoneNumber"
          label="Phone Number"
          radius="md"
          placeholder="Enter customer phone number"
          withAsterisk
          c="dimmed"
          value={form.values.customerPhone}
          onChange={(event) =>
            form.setFieldValue("customerPhone", event.currentTarget.value)
          }
        />
      </Group>
      <Group grow mb="sm">
        <TextInput
          name="branch"
          label="Branch"
          radius="md"
          placeholder="Select branch"
          withAsterisk
          c="dimmed"
          disabled
          value={branch?.name || ""}
        />
        <TextInput
          name="location"
          label="Location"
          radius="md"
          placeholder="Select location"
          withAsterisk
          c="dimmed"
          value={form.values.location}
          onChange={(event) =>
            form.setFieldValue("location", event.currentTarget.value)
          }
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
          data={["Pickup", "Delivery"]}
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
      <Button
        color="brand"
        fullWidth
        my="sm"
        radius="xl"
        disabled={!form.isValid}
      >
        Checkout
      </Button>
    </Box>
  );
};
