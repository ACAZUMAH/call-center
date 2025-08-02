import { useInfiniteQuery } from "@tanstack/react-query";
import { useProductsFilters } from "./useProductsFilter";
import { useProductsInfiniteQueryOptions } from "./useGetProductsQuery";
import { useMemo } from "react";

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

  const products = useMemo(() => {
    if(!data?.pages) return [];

    return data.pages.reduce((acc, page) => {
      if(page?.data?.productList && Array.isArray(page.data.productList)) {
        return [...acc, ...page.data.productList];
      }
      return acc
    }, []);
  }, [data?.pages])

  const nextCursor = data?.pages?.[data.pages.length - 1]?.data?.nextCursor || {};

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
