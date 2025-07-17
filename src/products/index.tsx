import { Alert, Divider, Paper } from "@mantine/core";
import React from "react";
import { ProductsHeader } from "./components/productsHeader";
import { ProductsTable } from "./components/ProductsTable";
import { Conditional } from "../components";
import { useProducts } from "./hooks/useProducts";

export const Products: React.FC = () => {
  const products = useProducts();
  const { data, isLoading, isFetchingNextPage, isError, actions, filters } = products;

  const showData = !isLoading && data?.length > 0;
  const showError = isError && !isLoading;
  const showNoDatalert = !isLoading && !showData && !showError;

  return (
    <>
      <Paper w="auto" withBorder radius="lg">
        <ProductsHeader
          refresh={actions.refetch}
          setSearch={actions.handleSearchChange}
          filters={filters}
          setFilters={actions.handleFiltersChange}
        />

        <Divider mt="xs" />

        <ProductsTable
          products={data || []}
          loading={isLoading || isFetchingNextPage}
          showData={showData}
          limit={filters.limit!}
          onLimitChange={actions.handleLimitChange}
          onNextPage={() => actions.fetchNextPage()}
          loadingNext={isFetchingNextPage}
        />

        <Conditional condition={showNoDatalert}>
          <Alert color="yellow">
            <Conditional condition={Boolean(filters?.megSearch!)}>
              No products match your search criteria: "{filters.megSearch}".
            </Conditional>
            <Conditional condition={!filters.megSearch}>
              No products are currently available.
            </Conditional>
          </Alert>
        </Conditional>

        <Conditional condition={showError}>
          <Alert>Error loading products. Please try again later.</Alert>
        </Conditional>
      </Paper>
    </>
  );
};
