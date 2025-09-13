import { queryOptions } from "@tanstack/react-query";
import { useAppAuthentication } from "../../hooks/useAppAuthentication";

const findLocationQuery = `
    query FindLocationCordinate($placeId: String) {
      findLocationCordinate(placeId: $placeId) {
        data {
          lat
          lng
        }
        message
        statusCode
        success
      }
    }

`;

export const useFindLocationCoordinatesQueryOptions = (placeId: string) => {
  const { token } = useAppAuthentication();
  return queryOptions({
    queryKey: ["findLocationCordinate", placeId],
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
              query: findLocationQuery,
              variables: { placeId },
            }),
          }
        );
        const result = await response.json();

        return result.data.findLocationCordinate;
      } catch (error) {
        console.log("error fetching coordinates", error);
        return null;
      }
    },
    enabled: !!placeId,
  });
};
