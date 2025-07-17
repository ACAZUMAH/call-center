import { useInfiniteQuery, } from "@tanstack/react-query";
import { useProductsFilters } from "./useProductsFilter";
import { useProductsInfiniteQueryOptions } from "./useGetProductsQuery";

export const useProducts = () => {
    const filters = useProductsFilters();
    const { data, isLoading, isError, refetch, hasNextPage, fetchNextPage, isFetchingNextPage } = useInfiniteQuery(useProductsInfiniteQueryOptions(filters.filters));

    const products = data?.pages?.flatMap(page => page.data?.productList) || [];

    const nextCursor = data?.pages?.[data.pages.length - 1]?.data?.nextCursor;

    //console.log("Products data:", products);
    //console.log("nextCursor:", nextCursor); 

    return {
        data: products,
        isLoading,
        isError,
        hasNextPage,
        isFetchingNextPage,
        nextCursor,
        ...filters,
        actions: {
            ...filters.actions,
            refetch,
            fetchNextPage,
        }
    }
}