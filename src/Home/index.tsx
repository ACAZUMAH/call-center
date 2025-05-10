import { Container, Text, Title } from "@mantine/core";
import React from "react";
import { Products } from "../products";
import { Cart } from "../cart";

export const Home: React.FC = () => {
  return (
    <Container size="95%" w="100%">
      <Title order={2} mt="md" fw={500}>
        Hello, Azumah
      </Title>
      <Text c="dimmed" size="lg">
        Create a new sales
      </Text>
      <div style={{ display: "flex", gap: "16px" }}>
        <div style={{ flex: 2, marginTop: "15px" }}>
          <Products />
        </div>
        <div style={{ flex: 1}}>
          <Cart />
        </div>
      </div>
    </Container>
  );
};
