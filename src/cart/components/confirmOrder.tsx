import {
  ActionIcon,
  Box,
  Fieldset,
  Group,
  Select,
  TextInput,
  Tooltip,
} from "@mantine/core";
import { IconChevronDown, IconCircleX } from "@tabler/icons-react";
import React from "react";
import { ConfirmOrderProps } from "../interface";
import { createSelectData } from "../../helpers";
import { CallCenterPaymentOptionType, EnumDeliveryType } from "../../interfaces/graphql/graphql";

export const ConfirmOrder: React.FC<ConfirmOrderProps> = ({ branch, form, setBranch }) => {
  return (
    <Box>
      <Fieldset mb="sm" legend="Customer Information">
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
            placeholder="Enter phone number"
            withAsterisk
            c="dimmed"
            value={form.values.customerPhone}
            onChange={(event) =>
              form.setFieldValue("customerPhone", event.currentTarget.value)
            }
          />
          <TextInput
            name="address"
            label="Address"
            radius="md"
            placeholder="Enter Delivery Address"
            withAsterisk
            c="dimmed"
            value={form.values.address}
            onChange={(event) =>
              form.setFieldValue("address", event.currentTarget.value)
            }
          />
        </Group>
      </Fieldset>
      <Fieldset mb="sm" legend="Branch & Payment">
        <Group grow mb="sm">
          <Tooltip label="Please select a branch below" disabled={!!branch}>
            <TextInput
              name="branch"
              label="Branch"
              radius="md"
              placeholder="Select branch"
              withAsterisk
              c="dimmed"
              disabled
              value={branch?.name || ""}
              rightSection={
                <ActionIcon
                  p={0}
                  h={24}
                  w={24}
                  color="red"
                  variant="subtle"
                  radius="sm"
                  disabled={!branch}
                  onClick={() => setBranch(undefined)}
                >
                  <IconCircleX size={16} />
                </ActionIcon>
              }
            />
          </Tooltip>
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
            onChange={(value) => form.setFieldValue("orderMethod", value)}
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
            data={createSelectData(CallCenterPaymentOptionType)}
            value={form.values.paymentMethod}
            onChange={(value) => form.setFieldValue("paymentMethod", value)}
          />
        </Group>
      </Fieldset>
    </Box>
  );
};
