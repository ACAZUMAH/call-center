import { queryOptions } from "@tanstack/react-query";

const getProduct = `
 query GetAProduct($productId: ID!) {
  getAProduct(productId: $productId) {
    data {
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
  }
}`;

export const useGetProductsQueryOptions = (productId?: string) => {
  return queryOptions({
    queryKey: ["getProduct"],
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
              query: getProduct,
              variables: {
                productId: productId,
              },
            }),
          }
        );
        return await res.json();
      } catch (error) {
        console.log("Error fetching product:", error);
      }
    },
  });
};
