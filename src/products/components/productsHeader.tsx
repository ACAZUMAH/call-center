import { Button, Group, Paper, Select, TextInput } from "@mantine/core";
import { IconRefresh, IconSearch } from "@tabler/icons-react";
import React from "react";
import { createSelectData } from "../../helpers";
import { ProductCategoryTypeType } from "../../interfaces/graphql/graphql";
import { ProductsTableHeaderProps } from "../interfaces";

export const ProductsHeader: React.FC<ProductsTableHeaderProps> = ({
  refresh,
  setSearch,
  filters,
  setFilters
}) => {
  return (
    <>
      <Paper top="0" mt="xs" px="xs" w="100%" pos="sticky">
        <Group>
          <TextInput
            flex={1}
            radius="md"
            name="search"
            placeholder="Search products..."
            value={filters?.megSearch || ""}
            rightSection={<IconSearch stroke={1.5} size={18} />}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Select
            w={200}
            radius="md"
            name="category"
            placeholder="Select category"
            data={createSelectData(ProductCategoryTypeType)}
            value={filters?.productionCategory}
            onChange={(value) => {
              setFilters({
                productionCategory: value ? value : undefined,
              });
            }}
          />
          <Button
            variant="default"
            onClick={() => { refresh() }}
          >
            <IconRefresh />
          </Button>
        </Group>
      </Paper>
    </>
  );
};
