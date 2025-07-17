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
      console.log("Fetching products with pageParam:", pageParam);
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
        //console.log("GraphQL response:", json);
        return json.data.getAllProducts;
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    },
    initialPageParam: null,
    getNextPageParam: (lastPage) => {
      //console.log("Last page:", lastPage);
      return lastPage?.hasNextPage ? lastPage.nextCursor : undefined;
    },
    getPreviousPageParam: (firstPage) => {
      // console.log("First page:", firstPage);
      return firstPage?.hasNextPage ? firstPage.nextCursor : undefined;
    },
  })
}