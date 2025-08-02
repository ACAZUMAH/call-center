import {
  ActionIcon,
  Button,
  Group,
  Paper,
  TextInput,
} from "@mantine/core";
import {
  IconAdjustmentsHorizontal,
  IconDotsVertical,
  IconSearch,
} from "@tabler/icons-react";
import React from "react";

export const OrderTableHeader: React.FC = () => {
  return (
    <>
      <Paper top="0" px="7px" py="xs" w="100%" pos="sticky">
        <Group mt="8px">
          <TextInput
            radius="xl"
            flex={1}
            rightSection={<IconSearch size={20} />}
            placeholder="Search orders..."
            name="search"
          />
          <Button
            radius="xl"
            leftSection={<IconAdjustmentsHorizontal stroke={1.5} size={20} />}
          >
            Show Filters
          </Button>

          <ActionIcon variant="transparent">
            <IconDotsVertical />
          </ActionIcon>
        </Group>
      </Paper>
    </>
  );
};
