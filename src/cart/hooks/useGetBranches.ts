import { queryOptions } from "@tanstack/react-query";
import { GetAllBranchesInput } from "../../interfaces/graphql/graphql";
import { useAppAuthentication } from "../../hooks/useAppAuthentication";

const getClosestBranchQuery = `
query GetAllBranches($getAllBranchesInput: GetAllBranchesInput) {
  getAllBranches(getAllBranchesInput: $getAllBranchesInput) {
    data {
      branchList {
        _id
        name
        branchLocation
        coordinates {
          latitude
          longitude
        }
        branchContact
        branchCode
        enabled
        distance
        region
        pickupOnly
        deliveryOnly
        branchHasPinkBerry
        branchImage
        width
        height
        imagePublicId
        createdAt
        updatedAt
        secondCourierEnabled
        courierType
        distance
        deliveryType
        cardPaymentPOSKeys {
          provider
          value
        }
      }
    }
    message
    success
    statusCode
  }
}
`;

export const useGetBranchesQueryOptions = (
  data: GetAllBranchesInput,
  enabled: boolean
) => {
  const { token } = useAppAuthentication();
  return queryOptions({
    enabled: enabled,
    queryKey: ["getAllBranches", data],
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
              query: getClosestBranchQuery,
              variables: { getAllBranchesInput: { ...data } },
            }),
          }
        );

        const result = await response.json();

        return result.data.getAllBranches.data.branchList;
      } catch (error) {
        console.error("Error fetching branches:", error);
        return null;
      }
    },
  });
};
