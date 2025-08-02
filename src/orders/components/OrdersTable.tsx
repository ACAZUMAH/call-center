import { Checkbox, Table } from "@mantine/core";
import React from "react";
import { ordersTestData } from ".";
import { OrderTableItem } from "./OrderTableItem";

export const OrdersTable: React.FC = () => {
  return (
    <Table
      mt="xs"
      striped
      highlightOnHover
      stickyHeader
      verticalSpacing="sm"
      stickyHeaderOffset={102}
    >
      <Table.Thead>
        <Table.Tr>
            <Table.Th ta="center">
                <Checkbox variant="outline"/>
            </Table.Th>
            <Table.Th ta="center"></Table.Th>
            <Table.Th ta="center">Date</Table.Th>
            <Table.Th ta="center">Order Code</Table.Th>
            <Table.Th ta="center">Amount</Table.Th>
            <Table.Th ta="center">Branch</Table.Th>
            <Table.Th ta="center">Paid</Table.Th>
            <Table.Th ta="center">Order Type</Table.Th>
            <Table.Th ta="center">Customer Name</Table.Th>
            <Table.Th ta="center">Customer Phone</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        {ordersTestData.map((order, index) => (
            <OrderTableItem order={order} key={index} />
        ))}
      </Table.Tbody>
    </Table>
  );
};
