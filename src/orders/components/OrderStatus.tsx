import { Badge, Group, Text } from "@mantine/core";
import React from "react";

export const OrderStatus: React.FC = () => {
  return (
    <Group px="md" py="md" gap="xl">
      <Group gap="xs">
        <Text size="sm">All</Text>
        <Badge color="green">3</Badge>
      </Group>
      <Group gap="xs">
        <Text size="sm">Pedding</Text>
        <Badge c="yellow" color="gray" variant="light">
          4
        </Badge>
      </Group>
      <Group gap="xs">
        <Text size="sm">Accepted</Text>
        <Badge color="gray" c="blue" variant="light">
          3
        </Badge>
      </Group>
      <Group gap="xs">
        <Text size="sm">Ready</Text>
        <Badge color="gray" c="green" variant="light">
          3
        </Badge>
      </Group>
      <Group gap="xs">
        <Text size="sm">Delivering</Text>
        <Badge color="gray" c="green" variant="light">
          3
        </Badge>
      </Group>
      <Group gap="xs">
        <Text size="sm">Delivered</Text>
        <Badge color="gray" c="green" variant="light">
          3
        </Badge>
      </Group>
      <Group gap="xs">
        <Text size="sm">Completed</Text>
        <Badge color="gray" c="green" variant="light">
          3
        </Badge>
      </Group>
      <Group gap="xs">
        <Text size="sm">Cancelled</Text>
        <Badge color="gray" c="green" variant="light">
          3
        </Badge>
      </Group>
      <Group gap="xs">
        <Text size="sm">Refunded</Text>
        <Badge color="gray" c="green" variant="light">
          3
        </Badge>
      </Group>
    </Group>
  );
};
