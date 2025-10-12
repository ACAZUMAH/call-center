import { useMutation } from "@tanstack/react-query";
import { useAppAuthentication } from "../../hooks/useAppAuthentication";

const checkAvailabilityQuery = `
mutation CheckProductAvailability($productIds: [ID!]!, $branchId: ID!) {
  checkProductAvailability(productIds: $productIds, branchId: $branchId) {
    data {
      available
      unAvailable
    }
    message
    success
    statusCode
  }
}
`;

export const useCheckAvailabilityMutation = () => {
  const { token } = useAppAuthentication();
  const mutation = useMutation({
    mutationKey: ["checkProductAvailability"],
    mutationFn: async (variables: {
      productIds: string[];
      branchId: string;
    }) => {
      const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/graphql`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ query: checkAvailabilityQuery, variables }),
      });

      if (!res.ok) {
        console.log(`Network error: ${res.status} ${res.statusText}`);
      }

      const json = await res.json();

      const payload = json.data.checkProductAvailability;

      return payload;
    },
  });

  const handleCheckAvailability = async ({
    productIds,
    branchId,
  }: {
    productIds: string[];
    branchId: string;
  }) => {
    try {
      const res = await mutation.mutateAsync({ productIds, branchId });

      if (!res || !res.success) {
        console.log(
          `Check availability failed: ${res?.message || "Unknown error"}`
        );
      }
      return res.data;
    } catch (error) {
        console.error("Error checking product availability:", error);
    }
  };

    return { handleCheckAvailability, ...mutation };
};
