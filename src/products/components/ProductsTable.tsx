import { Divider, Table } from "@mantine/core";
import React, { useState } from "react";
import { ProductTableItem, ProductTableItemLoader } from "./ProductTableItem";
import { Conditional } from "../../components";
import { ProductsTableProps } from "../interfaces";
import { TablePagination } from "../../components/pagination";
import { Product } from "../../product";

export const ProductsTable: React.FC<ProductsTableProps> = ({
  products,
  loading,
  showData,
  limit,
  onLimitChange,
  onNextPage,
  hasNextPage,
}) => {
  const [viewProduct, setViewProduct] = useState<string>();
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
              <ProductTableItem product={product} index={index} key={index} onEdit={setViewProduct}/>
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
      <Product
        opened={Boolean(viewProduct)}
        productId={viewProduct}
        onClose={() => setViewProduct(undefined)}
      />
    </>
  );
};
