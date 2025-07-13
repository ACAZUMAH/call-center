import { Alert, Divider, Paper } from "@mantine/core";
import React from "react";
import { ProductsHeader } from "./components/productsHeader";
import { ProductsTable } from "./components/ProductsTable";
import { useQuery } from "@tanstack/react-query";
import { useProductsQueryOptions } from "./hooks/useGetProductsQuery";
import { Conditional } from "../components";

export const Products: React.FC = () => {
  const { data, isLoading, isError } = useQuery(
    useProductsQueryOptions({ enabled: true })
  );
  const { productList } = data?.data || {};

  const loading = isLoading || !productList;
  const showData =
    !isLoading && !isError && productList && productList.length > 0;
  const showError = isError && !loading;

  return (
    <>
      <Paper w="auto" withBorder radius="lg">
        <ProductsHeader />

        <Divider />

        <ProductsTable
          products={productList}
          loading={loading}
          showData={showData}
        />

        <Conditional condition={showError}>
          <Alert>Error loading products. Please try again later.</Alert>
        </Conditional>
      </Paper>
    </>
  );
};
