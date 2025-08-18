import {
  AspectRatio,
  Button,
  Center,
  Divider,
  Group,
  Loader,
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
import { APIProvider, Map } from "@vis.gl/react-google-maps";
import { useFindLocationListQueryOptions } from "../hooks/useLocationListQuery";
import { useDebouncedState } from "@mantine/hooks";
import { Conditional } from "../../components";
import { useQuery } from "@tanstack/react-query";
import { LocationsTable } from "./LocationsTable";

export const MapModal: React.FC<MapModalProps> = ({ opened, onClose }) => {
  const [address, setAddress] = useDebouncedState("", 200);
  const { data, isLoading } = useQuery(
    useFindLocationListQueryOptions(address)
  );

  return (
    <>
      <Modal
        opened={opened}
        onClose={onClose}
        size="100%"
        radius="xl"
        title="Select Location"
        px={0}
        overlayProps={{
          backgroundOpacity: 0.55,
          blur: 3,
        }}
      >
        <AspectRatio ratio={21 / 9} style={{ border: 0 }}>
          <Paper
            style={{ position: "absolute", zIndex: 1 }}
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
            <Stack gap="lg">
              <Stack gap={3}>
                <TextInput
                  radius="xl"
                  placeholder="Search location"
                  onChange={(e) => setAddress(e.currentTarget.value)}
                />
                <Text size="xs" c="dimmed">
                  Where would you like your order to be delivered to?
                </Text>
              </Stack>
              <ScrollArea>
                <Conditional condition={isLoading}>
                  <Center>
                    <Loader size="xs" />
                  </Center>
                </Conditional>
                {/* This is where you would map the list of locations available when the user search */}
                <Conditional condition={!isLoading && data?.length}>
                  {data?.map((loc: any) => (
                    <LocationsTable name={loc.name} />
                  ))}
                </Conditional>
              </ScrollArea>
              <Button radius="xl">Confirm Location</Button>
            </Stack>
          </Paper>
          <APIProvider apiKey={`${import.meta.env.VITE_GOOGLE_API_KEY}`}>
            <Map
              style={{ width: "88vw", height: "70vh" }}
              defaultCenter={{ lat: 22.54992, lng: 0 }}
              defaultZoom={3}
              gestureHandling={"greedy"}
              disableDefaultUI={true}
            />
          </APIProvider>
        </AspectRatio>
      </Modal>
    </>
  );
};
