import { queryOptions } from "@tanstack/react-query";
import { useAppAuthentication } from "../../hooks/useAppAuthentication";
import { showNotification } from "@mantine/notifications";

const findLocationListQuery = `
   query FindLocationList($address: String) {
    findLocationList(address: $address) {
      data {
        name
        placeId
      }
      message
      statusCode
      success
    }
  }
`;

export const useFindLocationListQueryOptions = (address: string) => {
  const { token } = useAppAuthentication();
  //console.log('token', token);
  return queryOptions({
    queryKey: ["findLocationList", address],
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
              query: findLocationListQuery,
              variables: { address },
            }),
          }
        );
        const result = await response.json();

        const data = result.data.findLocationList;

        if (!data.data) return [];

        return data.data;
      } catch (error) {
        showNotification({
          title: "Error",
          message: "An error occurred while fetching the location list.",
          color: "red",
        })
      }
    },
    enabled: !!address,
  });
};
