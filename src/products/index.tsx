import { Alert, Divider, Paper } from "@mantine/core";
import React from "react";
import { ProductsHeader } from "./components/productsHeader";
import { ProductsTable } from "./components/ProductsTable";
import { Conditional } from "../components";
import { useProducts } from "./hooks/useProducts";

export const Products: React.FC = () => {
  const {
    data,
    isLoading,
    isFetchingNextPage,
    hasNextPage,
    isError,
    actions,
    filters,
    isFetchNextPageError,
  } = useProducts();

  const products = data || [];
  const showLoading = isLoading || isFetchingNextPage;
  const showData = !showLoading && data?.length > 0;
  const showError = (isError || isFetchNextPageError) && !isLoading;
  const showNoDatalert = !showLoading && !showData && !showError;

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
          products={products}
          loading={showLoading}
          showData={showData}
          limit={filters.limit!}
          onLimitChange={actions.handleLimitChange}
          onNextPage={() => actions.fetchNextPage()}
          hasNextPage={hasNextPage}
        />

        <Conditional condition={showNoDatalert}>
          <Alert color="yellow" my="sm" mx="1px">
            <Conditional condition={Boolean(filters?.megSearch!)}>
              No products match your search criteria: "{filters.megSearch}".
            </Conditional>
            <Conditional condition={!filters.megSearch}>
              No products are currently available.
            </Conditional>
          </Alert>
        </Conditional>

        <Conditional condition={showError}>
          <Alert my="sm" mx="1px">Error loading products. Please try again later.</Alert>
        </Conditional>
      </Paper>
    </>
  );
};
