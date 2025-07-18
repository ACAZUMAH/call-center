import { useInfiniteQuery } from "@tanstack/react-query";
import { useProductsFilters } from "./useProductsFilter";
import { useProductsInfiniteQueryOptions } from "./useGetProductsQuery";

export const useProducts = () => {
  const filters = useProductsFilters();
  const {
    data,
    isLoading,
    isError,
    refetch,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
    isFetchNextPageError,
  } = useInfiniteQuery(useProductsInfiniteQueryOptions(filters.filters));

  const products = data?.pages?.flatMap((page) => page.data?.productList) || [];

  //console.log("products length:", products.length);

  //console.log("data pages length:", data?.pages?.length);

  const nextCursor = data?.pages?.[data.pages.length - 1]?.data?.nextCursor;

  //console.log("Products data:", products);
  //console.log("nextCursor:", nextCursor);
  //console.log("next page:", data?.pages?.[data.pages.length - 1]?.data?.hasNextPage);

  return {
    data: products,
    isLoading,
    isError,
    hasNextPage,
    isFetchingNextPage,
    isFetchNextPageError,
    nextCursor,
    ...filters,
    actions: {
      ...filters.actions,
      refetch,
      fetchNextPage,
    },
  };
};
