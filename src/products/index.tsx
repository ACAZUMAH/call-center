import { Divider, Paper } from "@mantine/core";
import React from "react";
import { ProductsHeader } from "./components/productsHeader";
import { ProductsTable } from "./components/ProductsTable";
import { TablePagination } from "../components/pagination";

export const Products: React.FC = () => {
  return (
    <>
      <Paper w="auto" withBorder radius="lg">
        <ProductsHeader />

        <Divider />

        <ProductsTable />

        <Divider />

        <TablePagination />
      </Paper>
    </>
  );
};
