import { Divider, Table } from "@mantine/core";
import React from "react";
import { ProductTableItem, ProductTableItemLoader } from "./ProductTableItem";
import { Conditional } from "../../components";
import { ProductsTableProps } from "../interfaces";
import { TablePagination } from "../../components/pagination";

export const ProductsTable: React.FC<ProductsTableProps> = ({
  products,
  loading,
  showData,
  limit,
  onLimitChange,
  onNextPage,
  hasNextPage,
}) => {
  return (
    <>
      <Table
        mt="xs"
        striped
        highlightOnHover
        stickyHeader
        verticalSpacing="sm"
        stickyHeaderOffset={102}
      >
        <Table.Thead>
          <Table.Tr>
            <Table.Th ta="center">#</Table.Th>
            <Table.Th ta="center">Product Name</Table.Th>
            <Table.Th ta="center">Category</Table.Th>
            <Table.Th ta="center">Price</Table.Th>
            <Table.Th ta="center">Actions</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          <Conditional condition={showData}>
            {products?.map((product, index) => (
              <ProductTableItem
                product={product}
                index={index}
                key={index}
              />
            ))}
          </Conditional>
          <Conditional condition={loading}>
            {Array.from({ length: 20 }).map((_, index) => (
              <ProductTableItemLoader key={index} />
            ))}
          </Conditional>
        </Table.Tbody>
      </Table>
      <Divider />
      <Conditional condition={showData}>
        <TablePagination
          limit={limit}
          onLimitChange={onLimitChange}
          onNextPage={onNextPage}
          showNext={hasNextPage}
          showPrevious={false}
        />
      </Conditional>
    </>
  );
};
