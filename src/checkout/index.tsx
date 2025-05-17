import { Button, Container, Grid, Paper, Text } from "@mantine/core";
import { CartSummery } from "./components/CartSummery";
import { DeliveryMap } from "./components/DeliveryMap";
import { CustomerDetails } from "./components/CustomerDetails";

export const Checkout = () => {
  return (
    <Container fluid mt="xl">
      <Grid align="flex-start">
        <Grid.Col span={{ base: 12, sm: 7 }} order={{ base: 2, sm: 1 }}>
          <Paper withBorder p="md" mb="xl">
            <Text size="lg" mb="md" fw={500}>
                Customer details
            </Text>

            <CustomerDetails />

            <Button fullWidth radius="xl" mt="xl" >
                Confirm
            </Button>
          </Paper>
          <DeliveryMap />
        </Grid.Col>
        <Grid.Col span={{ base: 12, sm: 5 }} order={{ base: 1, sm: 2 }}>
          <CartSummery />
        </Grid.Col>
      </Grid>
    </Container>
  );
};
