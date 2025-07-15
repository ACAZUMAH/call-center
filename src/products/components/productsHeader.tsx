import {
  Button,
  Group,
  Paper,
  Select,
  TextInput,
} from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";
import { IconRefresh, IconSearch } from "@tabler/icons-react";
import React from "react";
import { createSelectData } from "../../helpers";
import { ProductCategoryTypeType } from "../../interfaces/graphql/graphql";
import { ProductsTableHeaderProps } from "../interfaces";

export const ProductsHeader: React.FC<ProductsTableHeaderProps> = ({
  refresh,
  setSearch,
  filters,
  setFilters,
  dateRange,
  onDateChange,
  setPrice,
}) => {
  return (
    <>
      <Paper top="0" mt="xs" px="xs" w="100%" pb="xs" pos="sticky">
        <Group mb="sm">
          <TextInput
            flex={1}
            radius="md"
            name="search"
            placeholder="Search products..."
            value={filters?.name!}
            rightSection={<IconSearch stroke={1.5} size={18} />}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Button
            variant="default"
            onClick={() => {
              refresh();
            }}
          >
            <IconRefresh />
          </Button>
        </Group>
        <Group grow w="100%" gap="sm" pb="xs">
          <DatePickerInput
            w={300}
            type="range"
            valueFormat="DD/MM/YYYY"
            placeholder="Pick a date range"
            value={dateRange}
            onChange={onDateChange}
            clearable
          />
          <TextInput
            name="Price"
            w={200}
            placeholder="Filter by price"
            onChange={(e) => setPrice ? setPrice(Number(e.target.value)) : undefined}
          />
          <Select
            w={150}
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
        </Group>
      </Paper>
    </>
  );
};
