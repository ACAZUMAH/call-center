import { Table, Text } from "@mantine/core";
import { IconArrowUp, IconSearch } from "@tabler/icons-react";
import React from "react";

interface LocationTableItemProps {
  location: any; // TODO: Define a proper type for location
  onSelect: (location: any) => void;
}

export const LocationTableItem: React.FC<LocationTableItemProps> = ({
  location,
  onSelect,
}) => {
  return (
    <Table.Tr onClick={() => onSelect(location)} style={{ cursor: "pointer" }}>
      <Table.Td ta="center">
        <IconSearch size={20} />
      </Table.Td>
      <Table.Td ta="center">
        <Text size="sm" fw="bold">
          {location.name}
        </Text>
      </Table.Td>
      <Table.Td ta="center">
        <IconArrowUp
          style={{
            rotate: "45deg",
          }}
        />
      </Table.Td>
    </Table.Tr>
  );
};
