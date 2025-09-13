import { ScrollArea, Table } from "@mantine/core";
import React from "react";
import { LocationTableItem } from "./LocationTableItem";

interface LocationTableProps {
  locations: any[]; // TODO: Define a proper type for locations
  onSelect: (location: any) => void;
}

export const LocationsTable: React.FC<LocationTableProps> = ({
  locations,
  onSelect,
}) => {
  return (
    <ScrollArea h={200} scrollbarSize="xs">
      <Table
        highlightOnHover
        stickyHeader
        verticalSpacing="sm"
        stickyHeaderOffset={102}
      >
        <Table.Tbody>
          {locations.map((location, index) => (
            <LocationTableItem
              location={location}
              key={index}
              onSelect={onSelect}
            />
          ))}
        </Table.Tbody>
      </Table>
    </ScrollArea>
  );
};
