import { Container, Text, Title } from "@mantine/core";
import React from "react";
import { Products } from "../products";
import { Cart } from "../cart";

export const Home: React.FC = () => {
  return (
    <Container size="95%" fluid py="lg" mb="lg">
      <Title order={2} fw={500}>
        Hello, Azumah
      </Title>
      <Text c="dimmed" size="lg">
        Create a new sale
      </Text>
      <div style={{ display: "flex", gap: "16px" }}>
        <div style={{ flex: 3, marginTop: "15px" }}>
          <Products />
        </div>
        <div style={{ flex: 2 }}>
          <Cart />
        </div>
      </div>
    </Container>
  );
};
