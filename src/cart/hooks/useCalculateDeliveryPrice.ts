import { queryOptions, useQuery } from "@tanstack/react-query";
import { LocationInput } from "../../interfaces/graphql/graphql";
import { useAppAuthentication } from "../../hooks/useAppAuthentication";
import { showNotification } from "@mantine/notifications";

const calculateDeliveryPrice = `
query CalculateDeliveryPrice($branchId: ID!, $locationInput: LocationInput!) {
  calculateDeliveryPrice(branchId: $branchId, locationInput: $locationInput) {
    data {
      car
      motor
    }
    message
    statusCode
    success
  }
}`;

export const useCalculateDeliveryPriceQuery = (
  branchId: string,
  locationInput: LocationInput,
  enabled: boolean
) => {
  const { token } = useAppAuthentication();
  const { data, ...result } = useQuery(
    queryOptions({
      enabled: enabled,
      queryKey: ["calculateDeliveryPrice", branchId, locationInput],
      queryFn: async () => {
        try {
          const response = await fetch(
            `${import.meta.env.VITE_API_BASE_URL}/graphql`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
              },
              body: JSON.stringify({
                query: calculateDeliveryPrice,
                variables: { branchId, locationInput },
              }),
            }
          );

          const result = await response.json();

          return result.data.calculateDeliveryPrice;
        } catch (error) {
          showNotification({
            title: "Error",
            message: "Failed to calculate delivery price.",
            color: "red",
          });
          console.error("Error calculating delivery price:", error);
          return null;
        }
      },
    })
  );

  return { data, ...result };
};
