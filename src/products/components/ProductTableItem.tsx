import { ActionIcon, Center, Skeleton, Table } from "@mantine/core";
import React from "react";
import { ProductTableItemProps } from "../interfaces";
import { IconPlus } from "@tabler/icons-react";

export const ProductTableItem: React.FC<ProductTableItemProps> = ({
  index,
  name,
  category,
  quantity,
}) => {
  return (
    <Table.Tr>
      <Table.Td ta="center">{index}</Table.Td>
      <Table.Td ta="center">{name}</Table.Td>
      <Table.Td ta="center">{category}</Table.Td>
      <Table.Td ta="center">{quantity}</Table.Td>
      <Table.Td ta="center">
        <ActionIcon
          variant="transparent"
          aria-label="add to cart icon"
          size="sm"
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
