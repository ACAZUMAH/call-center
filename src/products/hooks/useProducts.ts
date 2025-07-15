import { useQuery } from "@tanstack/react-query";
import { useProductsFilters } from "./useProductsFilter";
import { useProductsQueryOptions } from "./useGetProductsQuery";

export const useProducts = () => {
    const filters = useProductsFilters();
    const { data, isLoading, isError, refetch } = useQuery(useProductsQueryOptions(filters.filters));

    return {
        data,
        isLoading,
        isError,
        ...filters,
        actions: {
            ...filters.actions,
            refetch
        }
    }
}