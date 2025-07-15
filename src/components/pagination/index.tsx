import { Group, Pagination, Paper, Select, Text } from "@mantine/core";
import React from "react";
import { pageSizes } from "../../constants/tables";

interface TablePaginationProps {
  limit: number;
  onLimitChange: (limit: number) => void;
  onPageChange?: (page: number) => void;
}

export const TablePagination: React.FC<TablePaginationProps> = ({
  limit,
  onLimitChange,
}) => {
  return (
    <>
      <Paper p="md" my="sm">
        <Group justify="flex-end">
          <Group>
            <Text>Rows: </Text>
            <Select
              size="xs"
              w={60}
              data={pageSizes}
              value={limit?.toString()}
              onChange={(value) => onLimitChange(parseInt(value!))}
            />
          </Group>
          <Pagination.Root total={3}>
            <Group gap={5}>
              <Pagination.First />
              <Pagination.Previous />
              <Pagination.Items />
              <Pagination.Next />
            </Group>
          </Pagination.Root>
        </Group>
      </Paper>
    </>
  );
};
