import { Alert, Divider, Paper } from "@mantine/core";
import React from "react";
import { ProductsHeader } from "./components/productsHeader";
import { ProductsTable } from "./components/ProductsTable";
import { Conditional } from "../components";
import { useProducts } from "./hooks/useProducts";

export const Products: React.FC = () => {
  const products = useProducts();
  const { data, isLoading, isError, actions, filters } = products;
  const showData = !isLoading && data?.data?.productList?.length > 0;
  const showError = isError && !isLoading;

  return (
    <>
      <Paper w="auto" withBorder radius="lg">
        <ProductsHeader
          refresh={actions.refetch}
          setSearch={actions.handleSearchChange}
          filters={filters}
          setFilters={actions.handleFiltersChange}
          dateRange={products.dateRange}
          onDateChange={actions.handleDateChange}
          setPrice={actions.handlePriceChange}
        />

        <Divider mt="xs" />

        <ProductsTable
          products={data?.data?.productList || []}
          loading={isLoading}
          showData={showData}
          limit={filters.limit!}
          onLimitChange={actions.handleLimitChange}
        />

        <Conditional condition={showError}>
          <Alert>Error loading products. Please try again later.</Alert>
        </Conditional>
      </Paper>
    </>
  );
};
