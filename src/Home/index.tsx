import { Container, Text, Title } from "@mantine/core";
import React from "react";
import { Products } from "../products";
import { Cart } from "../cart";
import classes from "./css/index.module.css";
export const Home: React.FC = () => {
  return (
    <Container fluid py="lg" mb="lg">
      <Title order={2} fw={500}>
        Hello, Azumah
      </Title>
      <Text c="dimmed" size="lg">
        Create a new sale
      </Text>
      {/* <SimpleGrid w="100%" cols={{ base: 1, md: 2}}>
        <div className={classes.products}>
          <Products />
        </div>
        <div className={classes.cart}>
          <Cart />
        </div>
      </SimpleGrid> */}
      <div className={classes.main}>
        <div className={classes.products}>
          <Products />
        </div>
        <div className={classes.cart}>
          <Cart />
        </div>
      </div>
    </Container>
  );
};
