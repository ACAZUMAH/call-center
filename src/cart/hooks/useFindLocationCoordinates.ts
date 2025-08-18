import { queryOptions } from "@tanstack/react-query";

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

`

export const useFindLocationCoordinatesQueryOptions = (placeId: string) => {
  return queryOptions({
    queryKey: ["findLocationCordinate", placeId],
    queryFn: async () => {
      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/graphql`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            query: findLocationQuery,
            variables: { placeId },
          }),
        }
      );
      const result = await response.json();
      return result.data.findLocationCordinate;
    },
    enabled: !!placeId,
  });
}