import { showNotification } from "@mantine/notifications";
import { useMutation } from "@tanstack/react-query";

const useFindLocationMutation = `
   mutation FindLocationAddress($latitude: Float, $longitude: Float) {
    findLocationAddress(latitude: $latitude, longitude: $longitude) {
      data
      message
      statusCode
      success
    }
  }
`;

export const useFindLocationAddressMutation = () => {
  const mutation = useMutation({
    mutationKey: ["findLocationAddress"],
    mutationFn: async (variables: { latitude: number; longitude: number }) => {
      const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/graphql`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query: useFindLocationMutation, variables }),
      });

      if (!res.ok) {
        console.log(`Network error: ${res.status} ${res.statusText}`);
      }

      const json = await res.json();

      const payload = json.data.findLocationAddress;

      return payload;
    },
  });

  const handleFindLocation = async (latitude: number, longitude: number) => {
    try {
      const res = await mutation.mutateAsync({ latitude, longitude });

      if (!res || !res.success) {
        showNotification({
          title: "Location Fetch Failed",
          message:
            res?.message || "An error occurred while fetching the location.",
          color: "red",
        });
      }

      return res.data;
    } catch (error) {
      showNotification({
        title: "Error",
        message: "An error occurred while fetching the location.",
        color: "red",
      });
    }
  };

  return { handleFindLocation, ...mutation };
};
