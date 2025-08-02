import { Container, Divider, Group, Paper } from "@mantine/core";
import React from "react";
import { OrderTableHeader } from "./components/OrderTableHeader";
import { OrdersTable } from "./components/OrdersTable";
import { OrderStatus } from "./components/OrderStatus";
import { OrderNavs } from "./components/OrderNavs";

export const OrderManagement: React.FC = () => {
  return (
    <Container fluid py="xl" mb="lg">
      <Group align="flex-start">
        <OrderNavs />
        
        <Paper withBorder flex={1} radius="xl">
          <OrderStatus />
          <Divider />
          <OrderTableHeader />
          <Divider />
          <OrdersTable />
        </Paper>
      </Group>
    </Container>
  );
};
