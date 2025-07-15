import { useState } from "react";
import { GetAllProductsInput } from "../../interfaces/graphql/graphql";
import { pageSizes } from "../../constants/tables";
import { DateValue } from "@mantine/dates";
import { useDebouncedCallback } from "@mantine/hooks";

export const useProductsFilters = () => {
  const [filters, setFilters] = useState<GetAllProductsInput>({
    enabled: true,
    limit: parseInt(pageSizes[1]),
    name: "",
    lowerDate: null,
    upperDate: null,
  });

  const handleFiltersChange = (newFilters: GetAllProductsInput) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      ...newFilters,
    }));
  };

  const handleSearchChange = useDebouncedCallback((search: string) => {
    handleFiltersChange({ name: search });
  }, 200);

  const handlePriceChange = (price: number) => {
    handleFiltersChange({ unitPrice: price });
  }

  const handleDateChange = (value: [DateValue, DateValue]) => {
    handleFiltersChange({
      lowerDate: value[0] ? new Date(value[0]).toISOString() : null,
      upperDate: value[1] ? new Date(value[1]).toISOString() : null,
    });
  };

  const handleLimitChange = (limit: number) => {
    handleFiltersChange({ limit });
  };

  return {
    filters,
    dateRange: [filters.lowerDate, filters.upperDate] as [DateValue, DateValue],
    actions: {
        handleFiltersChange,
        handleSearchChange,
        handleDateChange,
        handleLimitChange,
        handlePriceChange,
    }
  }
};
