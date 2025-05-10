import { Group, Pagination, Paper, Select, Text } from "@mantine/core";
import React from "react";

export const TablePagination: React.FC = () => {
  return (
    <>
      <Paper p="md" my="sm" >
        <Group justify="flex-end">
          <Group>
            <Text>Rows: </Text>
            <Select size="xs" w={60} value="10" data={['10', '25', '50', '100']}/>
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
