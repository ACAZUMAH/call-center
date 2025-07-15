import { queryOptions } from "@tanstack/react-query";
import { GetAllProductsInput } from "../../interfaces/graphql/graphql";

//   {
//     "getAllProductsInput": {
//       "upperDate": null,
//       "unitPrice": null,
//       "sortBy": null,
//       "size": null,
//       "sellingGroup": null,
//       "productionCategory": null,
//       "productCode": null,
//       "orderOf": null,
//       "name": null,
//       "megSearch": null,
//       "lowerDate": null,
//       "limit": null,
//       "branchIds": null,
//       "branchIdsNotIn": null,
//       "cursor": null,
//       "cursorField": null,
//       "cursorValue": null,
//       "dateAgo": null,
//       "description": null,
//       "enabled": null,
//       "exactFamily": null,
//       "exactFamilyList": null,
//       "exactSizes": null,
//       "extraCursorValue": null,
//       "family": null
//     }
//   }

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

export const useProductsQueryOptions = (getAllProductsInput: GetAllProductsInput) => {
  return queryOptions({
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
