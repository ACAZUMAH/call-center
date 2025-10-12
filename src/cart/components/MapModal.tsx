import {
  AspectRatio,
  Button,
  Center,
  Divider,
  Group,
  Loader,
  Modal,
  Paper,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";
import React, { useEffect, useMemo, useState } from "react";
import { MapModalProps } from "../interface";
import { IconMapPin } from "@tabler/icons-react";
import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";
import { useFindLocationListQueryOptions } from "../hooks/useLocationListQuery";
import { useDebouncedState } from "@mantine/hooks";
import { Conditional } from "../../components";
import { useQuery } from "@tanstack/react-query";
import { LocationsTable } from "./LocationsTable";
import { useFindLocationCoordinatesQueryOptions } from "../hooks/useFindLocationCoordinates";
import { useGetBranchesQueryOptions } from "../hooks/useGetBranches";
import { useCalculateDeliveryPriceQuery } from "../hooks/useCalculateDeliveryPrice";
import { useSetDeliveryFee } from "../../hooks/useAppCart";
import { showNotification } from "@mantine/notifications";

export const MapModal: React.FC<MapModalProps> = ({ opened, onClose }) => {
  const [address, setAddress] = useDebouncedState("", 200);
  const [selectedLocation, setSelectedLocation] = useState<{
    name: string;
    placeId: string;
  } | null>(null);
  const [fallbackCoords, setFallbackCoords] = useState<{
    lat: number;
    lng: number;
  } | null>(null);
  const [shouldCalculatePrice, setShouldCalculatePrice] = useState(false);
  const setDeliveryFee = useSetDeliveryFee();

  const { data, isLoading } = useQuery(
    useFindLocationListQueryOptions(address)
  );

  const { data: coordinates, isLoading: loadingCoordinates } = useQuery(
    useFindLocationCoordinatesQueryOptions(selectedLocation?.placeId || "")
  );

  const searchCoords = useMemo(() => {
    const lat = coordinates?.data?.lat!;
    const lng = coordinates?.data?.lng!;
    if (typeof lat === "number" && typeof lat === "number") return [lat, lng];
    return undefined;
  }, [coordinates?.data?.lat!, coordinates?.data?.lng!]);

  const { data: closeBranch, isLoading: loadingBranch } = useQuery(
    useGetBranchesQueryOptions(
      {
        coordinates: searchCoords || [],
        sortBy: "distance",
        limit: 1,
      },
      Boolean(searchCoords)
    )
  );

  const handleSelectLocation = (location: any) => {
    setSelectedLocation(location);
  };

  const { data: deliveryData, isLoading: loadingDeliveryData } =
    useCalculateDeliveryPriceQuery(
      closeBranch?.data?.branchList[0]?._id || "",
      { latitude: coordinates?.data?.lat!, longitude: coordinates?.data?.lng! },
      shouldCalculatePrice &&
        Boolean(closeBranch?.data?.branchList[0]?._id) &&
        Boolean(coordinates?.data?.lat) &&
        Boolean(coordinates?.data?.lng)
    );

  useEffect(() => {
    if (!coordinates?.lat && !coordinates?.lng && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        setFallbackCoords({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        });
      });
    }
  }, [coordinates]);

  useEffect(() => {
    if (shouldCalculatePrice && deliveryData && !loadingDeliveryData) {
      console.log(JSON.stringify(deliveryData, null, 2));
      if (deliveryData?.success) {
        setDeliveryFee(deliveryData.data.motor);
        onClose();
      } else {
        showNotification({
          title: "Error",
          message:
            deliveryData.message || "Failed to calculate delivery price.",
          color: "red",
        });
      }
      setShouldCalculatePrice(false);
    }
  }, [
    deliveryData,
    loadingDeliveryData,
    shouldCalculatePrice,
    setDeliveryFee,
    onClose,
  ]);

  const loading = loadingCoordinates || loadingBranch;

  const branch = closeBranch?.data?.branchList[0]?.branchLocation;

  const handleConfirmLocation = () => {
    if (selectedLocation && closeBranch?.data?.branchList[0]) {
      setShouldCalculatePrice(true);
    } else {
      showNotification({
        title: "Error",
        message: "Please select a location first.",
        color: "red",
      });
    }
  };

  const canConfirm =
    Boolean(selectedLocation) && Boolean(closeBranch?.data?.branchList[0]);

  return (
    <>
      <Modal
        opened={opened}
        onClose={onClose}
        fullScreen
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
            w="100%"
            h="auto"
            radius="xl"
            p={20}
            mt="md"
            ml="sm"
            maw={350}
            mah={700}
          >
            <Stack align="flex-end" gap={0} mb="sm">
              <Text c="dimmed" size="md">
                Closest branch
              </Text>
              <Text fw="bold" size="md">
                {branch || ""}
              </Text>
            </Stack>
            <Stack mb="sm" gap={0}>
              <Group gap="xs">
                <IconMapPin stroke={1.5} size={30} />
                <Stack gap={0}>
                  <Text c="dimmed" size="md">
                    Delivery location
                  </Text>
                  <Text fw="bold" size="md">
                    {selectedLocation?.name || ""}
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
              <Conditional condition={isLoading}>
                <Center>
                  <Loader size="xs" />
                </Center>
              </Conditional>
              <Conditional condition={!isLoading && data?.length}>
                <LocationsTable
                  locations={data}
                  onSelect={handleSelectLocation}
                />
              </Conditional>
              <Button
                radius="xl"
                loading={loading || loadingDeliveryData}
                onClick={handleConfirmLocation}
                disabled={!canConfirm || loading}
              >
                Confirm Location
              </Button>
            </Stack>
          </Paper>
          <APIProvider apiKey={`${import.meta.env.VITE_GOOGLE_API_KEY}`}>
            <Paper
              radius="3rem"
              style={{
                overflow: "hidden",
                flex: 1,
                border: "none",
                width: "97vw",
                height: "91vh",
              }}
            >
              <Map
                style={{ width: "100vw", height: "100vh" }}
                defaultCenter={
                  coordinates?.lat && coordinates?.lng
                    ? { lat: coordinates?.lat, lng: coordinates?.lng }
                    : fallbackCoords
                    ? fallbackCoords
                    : { lat: 22.54992, lng: 0 }
                }
                defaultZoom={5}
                gestureHandling={"greedy"}
                disableDefaultUI={true}
              >
                <Conditional
                  condition={
                    (Boolean(coordinates?.lat) && Boolean(coordinates?.lng)) ||
                    Boolean(fallbackCoords)
                  }
                >
                  <Marker
                    position={
                      coordinates?.lat && coordinates?.lng
                        ? { lat: coordinates?.lat, lng: coordinates?.lng }
                        : fallbackCoords!
                    }
                  />
                </Conditional>
              </Map>
            </Paper>
          </APIProvider>
        </AspectRatio>
      </Modal>
    </>
  );
};
