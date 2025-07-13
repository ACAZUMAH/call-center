import { Group, Select, TextInput } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import React from "react";

export const ProductsHeader: React.FC = () => {
  return (
    <>
      <Group gap={0}>
        <TextInput
          p="sm"
          radius="md"
          name="search"
          placeholder="Search products..."
          w={500}
          rightSection={<IconSearch stroke={1.5} size={18} />}
        />
        <Select p="sm" radius="md" name="category" placeholder="Select category" data={[]} />
      </Group>
    </>
  );
};
