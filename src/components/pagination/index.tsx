import {
  ActionIcon,
  Group,
  Paper,
  Select,
  Text,
} from "@mantine/core";
import React from "react";
import { pageSizes } from "../../constants/tables";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";

interface TablePaginationProps {
  limit: number;
  onLimitChange: (limit: number) => void;
  onNextPage: () => void;
  onPreviousPage?: () => void;
  disabledNext?: boolean;
  disabledPrevious?: boolean;
  loading?: boolean;
  showNext?: boolean;
  showPrevious?: boolean;
}

export const TablePagination: React.FC<TablePaginationProps> = ({
  limit,
  onLimitChange,
  onNextPage,
  onPreviousPage,
  loading,
  showNext,
  showPrevious,
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
          <Group>
            <ActionIcon onClick={onPreviousPage} disabled={showPrevious} loading={loading}>
              <IconChevronLeft stroke={1.5} size={18} />
            </ActionIcon>
            <ActionIcon onClick={onNextPage} loading={loading} disabled={showNext}>
              <IconChevronRight stroke={1.5} size={18} />
            </ActionIcon>
          </Group>
        </Group>
      </Paper>
    </>
  );
};
