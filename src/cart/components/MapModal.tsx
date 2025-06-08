import {
  AspectRatio,
  Button,
  Divider,
  Group,
  Modal,
  Paper,
  ScrollArea,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";
import React from "react";
import { MapModalProps } from "../interface";
import { IconMapPin } from "@tabler/icons-react";

export const MapModal: React.FC<MapModalProps> = ({ opened, onClose }) => {
  return (
    <>
      <Modal
        opened={opened}
        onClose={onClose}
        size="100%"
        radius="xl"
        title="Select Location"
        px={0}
      >
        <AspectRatio ratio={21 / 9} style={{ border: 0 }}>
          <Paper
            style={{ position: "absolute" }}
            w="27%"
            h="auto"
            radius="xl"
            p={20}
            mt="md"
            ml="sm"
          >
            <Stack align="flex-end" gap={0} mb="sm">
              <Text c="dimmed" size="md">
                Selected closest branch
              </Text>
              <Text fw="bold" size="md">
                {""}
              </Text>
            </Stack>
            <Stack mb="sm" gap={0}>
              <Group>
                <IconMapPin size={30} />
                <Stack gap={0}>
                  <Text c="dimmed" size="md">
                    Selected delivery location
                  </Text>
                  <Text fw="bold" size="md">
                    {""}
                  </Text>
                </Stack>
              </Group>
            </Stack>
            <Divider mb="sm" />
            <Stack>
              <TextInput radius="xl" placeholder="Search location" />
              <ScrollArea>
                {/* This is where you would map the list of locations available when the user search */}
              </ScrollArea>
              <Button radius="xl">Confirm Location</Button>
            </Stack>
          </Paper>
          <iframe
            src="https://www.google.com/maps/embed"
            title="Google map"
            style={{ border: 0, borderRadius: "var(--mantine-radius-xl)" }}
          />
        </AspectRatio>
      </Modal>
    </>
  );
};
