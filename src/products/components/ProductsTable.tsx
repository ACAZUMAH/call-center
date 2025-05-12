import { Table } from "@mantine/core";
import React from "react";
import { testProducts } from ".";
import { ProductTableItem, ProductTableItemLoader } from "./ProductTableItem";
import { Conditional } from "../../components";

export const ProductsTable: React.FC = () => {
  return (
    <>
      <Table
        mt="xs"
        striped
        highlightOnHover
        verticalSpacing="sm"
        stickyHeader
        stickyHeaderOffset={60}
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
          <Conditional condition={true}>
            {testProducts.map((item, index) => (
              <ProductTableItem {...item} index={index} key={index} />
            ))}
          </Conditional>
          <Conditional condition={false}>
            {Array.from({ length: 10 }).map((_, index) => (
              <ProductTableItemLoader key={index}/>
            ))}
          </Conditional>
        </Table.Tbody>
      </Table>
    </>
  );
};
