import { TextInput } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import React from "react";

export const ProductsHeader: React.FC = () => {
  return (
    <>
      <TextInput
        p="sm"
        radius="md"
        name="search"
        placeholder="Search products..."
        rightSection={<IconSearch stroke={1.5} size={18} />}
      />
    </>
  );
};
