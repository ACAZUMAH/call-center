import { ActionIcon, Checkbox, Table } from "@mantine/core";
import React from "react";
import { CurrencyFormatter } from "../../components/currency/currency";
import { IconArrowsMaximize } from "@tabler/icons-react";

interface OrderTableItemProps {
  order: any;
}

export const OrderTableItem: React.FC<OrderTableItemProps> = ({ order }) => {
  return (
    <Table.Tr>
      <Table.Td ta="center">
        <Checkbox variant="outline" color="brand" />
      </Table.Td>
      <Table.Td>
        <ActionIcon variant="transparent" size="sm">
          <IconArrowsMaximize stroke={1.5}/>
        </ActionIcon>
      </Table.Td>
      <Table.Td ta="center">{order.Date}</Table.Td>
      <Table.Td ta="center">{order.orderCode}</Table.Td>
      <Table.Td ta="center">
        <CurrencyFormatter value={order.amount} />
      </Table.Td>
      <Table.Td ta="center">{order.branch}</Table.Td>
      <Table.Td ta="center">{order.paid ? "Yes" : "No"}</Table.Td>
      <Table.Td ta="center">{order.orderType}</Table.Td>
      <Table.Td ta="center">{order.customerName}</Table.Td>
      <Table.Td ta="center">{order.customerPhone}</Table.Td>
    </Table.Tr>
  );
};
