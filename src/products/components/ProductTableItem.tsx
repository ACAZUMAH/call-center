import { ActionIcon, Center, Skeleton, Table } from "@mantine/core";
import React from "react";
import { ProductTableItemProps } from "../interfaces";
import { IconPlus } from "@tabler/icons-react";
import { useAddItemToCart } from "../../hooks/useAppCart";

export const ProductTableItem: React.FC<ProductTableItemProps> = ({
  id,
  index,
  name,
  category,
  price,
}) => {
  const addToCart = useAddItemToCart()

  return (
    <Table.Tr>
      <Table.Td ta="center">{index}</Table.Td>
      <Table.Td ta="center">{name}</Table.Td>
      <Table.Td ta="center">{category}</Table.Td>
      <Table.Td ta="center">GH¢ {price}</Table.Td>
      <Table.Td ta="center">
        <ActionIcon
          variant="transparent"
          aria-label="add to cart icon"
          size="sm"
          onClick={() => addToCart({ id, name, category, price})}
        >
          <IconPlus />
        </ActionIcon>
      </Table.Td>
    </Table.Tr>
  );
};

export const ProductTableItemLoader = () => {
  return (
    <Table.Tr>
      <Table.Td w={20}>
        <Skeleton width={20} height={20} radius="xl" />
      </Table.Td>
      <Table.Td>
        <Center>
          <Skeleton width={90} height={20} />
        </Center>
      </Table.Td>
      <Table.Td>
        <Center>
          <Skeleton width={90} height={20} />
        </Center>
      </Table.Td>
      <Table.Td>
        <Center>
          <Skeleton width={50} height={20} />
        </Center>
      </Table.Td>
      <Table.Td>
        <Center>
          <Skeleton width={15} height={20} />
        </Center>
      </Table.Td>
    </Table.Tr>
  );
};
