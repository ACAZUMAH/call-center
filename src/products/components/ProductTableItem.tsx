import { ActionIcon, Center, Group, Skeleton, Table } from "@mantine/core";
import React from "react";
import { ProductTableItemProps } from "../interfaces";
import { IconEye, IconPlus } from "@tabler/icons-react";
// import { useAddItemToCart } from "../../hooks/useAppCart";
import { CurrencyFormatter } from "../../components/currency/currency";

export const ProductTableItem: React.FC<ProductTableItemProps> = ({
  index,
  product,
}) => {
  // const addToCart = useAddItemToCart();

  return (
    <Table.Tr>
      <Table.Td ta="center">{index}</Table.Td>
      <Table.Td ta="center">{product?.name}</Table.Td>
      <Table.Td ta="center">{product?.productionCategory}</Table.Td>
      <Table.Td ta="center">
        <CurrencyFormatter value={product?.unitPrice!} />
      </Table.Td>
      <Table.Td ta="center">
        <Group justify="center" gap="sm">
          <ActionIcon
            variant="transparent"
            aria-label="view product icon"
            size="sm"
            onClick={() => {}}
            disabled
          >
            <IconEye />
          </ActionIcon>
          <ActionIcon
            variant="transparent"
            aria-label="add to cart icon"
            size="sm"
            onClick={() => {}}
          >
            <IconPlus />
          </ActionIcon>
        </Group>
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
          <Skeleton width={90} height={20} radius="xl" />
        </Center>
      </Table.Td>
      <Table.Td>
        <Center>
          <Skeleton width={90} height={20} radius="xl" />
        </Center>
      </Table.Td>
      <Table.Td>
        <Center>
          <Skeleton width={50} height={20} radius="xl" />
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
