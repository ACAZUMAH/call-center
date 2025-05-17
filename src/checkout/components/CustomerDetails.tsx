import { Group, TextInput } from "@mantine/core";
import React from "react";

export const CustomerDetails: React.FC = () => {
  return (
    <>
      <Group justify="space-between">
        <TextInput flex="1" label="Name" placeholder="Enter name"/>
        <TextInput flex="1" label="Phone Number" placeholder="Enter phone number"/>
      </Group>
      <TextInput label="Location" mt="sm" placeholder="Enter location"/>
    </>
  );
};
