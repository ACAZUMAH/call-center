import { Table, Text } from "@mantine/core";
import { IconArrowUp, IconSearch } from "@tabler/icons-react";
import React from "react";

interface LocationTableProps {
  name: string;
  placeId?: string;
  onSelect?: (placeId: string) => void;
}

export const LocationsTable: React.FC<LocationTableProps> = ({ name, placeId, onSelect }) => {
  return (
    <Table>
      <Table.Tbody>
        <Table.Tr>
          <Table.Td>
            <IconSearch size={20} />
          </Table.Td>
          <Table.Td>
            <Text size="md" fw="bold">
              {name}
            </Text>
          </Table.Td>
          <Table.Td>
            <IconArrowUp style={{
                 rotate: "45deg",
                 }} />
          </Table.Td>
        </Table.Tr>
      </Table.Tbody>
    </Table>
  );
};
