import { useState } from "react";
import { GetAllProductsInput } from "../../interfaces/graphql/graphql";
import { pageSizes } from "../../constants/tables";
import { DateValue } from "@mantine/dates";
import { useDebouncedCallback } from "@mantine/hooks";

export const useProductsFilters = () => {
  const [filters, setFilters] = useState<GetAllProductsInput>({
    enabled: true,
    limit: parseInt(pageSizes[1]),
    megSearch: "",
  });

  const handleFiltersChange = (newFilters: GetAllProductsInput) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      ...newFilters,
    }));
  };

  const handleSearchChange = useDebouncedCallback((search: string) => {
    handleFiltersChange({ megSearch: search });
  }, 200);

  const handleLimitChange = (limit: number) => {
    handleFiltersChange({ limit });
  };

  return {
    filters,
    dateRange: [filters.lowerDate, filters.upperDate] as [DateValue, DateValue],
    actions: {
        handleFiltersChange,
        handleSearchChange,
        handleLimitChange,
    }
  }
};
