import { infiniteQueryOptions, queryOptions, UseQueryOptions } from "@tanstack/react-query";
import {
  GetAllProductsInput,
  GetPaginatedProductsResponse,
} from "../../interfaces/graphql/graphql";

const getAllProductsQuery = `
  query GetAllProducts($getAllProductsInput: GetAllProductsInput) {
    getAllProducts(getAllProductsInput: $getAllProductsInput) {
      data {
        productList {
          _id
          productCode
          productImage
          name
          unitPrice
          width
          height
          family
          familyName
          dominantColor
          imagePublicId
          size
          productionCategory
          description
          generalDescription
          activatedBranches
          enabled
          ingredientsList {
            _id
            name
            enabled
          }
          extras {
            _id
            productCode
            productImage
            name
            unitPrice
            width
            height
            family
            familyName
            dominantColor
            imagePublicId
            size
            productionCategory
            description
            generalDescription
            activatedBranches
            enabled
            deliveryType
            priceMultiplier
          }
          constituentsList {
            _id
            displayImage
            name
            description
            width
            height
            dominantColor
            imagePublicId
            activatedBranches
            enabled
            createdAt
            updatedAt
          }
          deliveryType
          priceMultiplier
        }
        nextCursor {
          _id
          productCode
          productImage
          name
          unitPrice
          width
          height
          family
          familyName
          dominantColor
          imagePublicId
          size
          productionCategory
          description
          generalDescription
          activatedBranches
          enabled
          deliveryType
          priceMultiplier
        }
        hasNextPage
      }
      message
      success
      statusCode
    }
  }
`;

export const useProductsQueryOptions = <TData = GetPaginatedProductsResponse, TError = Error>(
  getAllProductsInput?: GetAllProductsInput,
  options?: Omit<
    UseQueryOptions<GetPaginatedProductsResponse, TError, TData>,
    "queryKey" | "queryFn"
  >
) => {
  return queryOptions({
    ...options,
    queryKey: ["getAllProducts", getAllProductsInput],
    queryFn: async () => {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_API_BASE_URL}/graphql`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              query: getAllProductsQuery,
              variables: { getAllProductsInput },
            }),
          }
        );
        const json = await res.json();
        //console.log("GraphQL response:", json);
        return json.data.getAllProducts;
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    },
  });
};


export const useProductsInfiniteQueryOptions = (getAllProductsInput?: GetAllProductsInput) => {
  return infiniteQueryOptions({
    queryKey: ["getAllProducts", getAllProductsInput],
    queryFn: async ({ pageParam }) => {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_API_BASE_URL}/graphql`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              query: getAllProductsQuery,
              variables: { getAllProductsInput: { ...getAllProductsInput, cursor: pageParam } },
            }),
          }
        );
        const json = await res.json();
        return json.data.getAllProducts;
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
    gcTime: 1000 * 60 * 10, // 10 minutes
    initialPageParam: null,
    getNextPageParam: (lastPage) => {
      //console.log("has next page:", lastPage?.data?.hasNextPage);
      return lastPage?.data?.hasNextPage ? lastPage?.data?.nextCursor._id : undefined;
    },
    // getPreviousPageParam: (firstPage) => {
    //   console.log("has previous page:", firstPage?.data?.hasNextPage);
    //   return firstPage?.data?.hasNextPage ? firstPage?.data?.nextCursor : undefined;
    // },
  })
}