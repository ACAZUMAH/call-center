import { DateValue } from "@mantine/dates"
import { GetAllProductsInput, ProductType2 } from "../../interfaces/graphql/graphql"

export interface ProductsTableHeaderProps {
    refresh: () => void
    setSearch: (value: string) => void
    filters: GetAllProductsInput
    setFilters: (filters: GetAllProductsInput) => void
    dateRange: [DateValue, DateValue]
    onDateChange: (value: [DateValue, DateValue]) => void
    setPrice?: (price: number) => void 
}

export interface ProductTableItemProps {
    product: ProductType2 // Define the type of product based on your data structure
    index: number
}

export interface ProductsTableProps {
    products?: ProductType2[]
    showData: boolean
    loading: boolean
    limit: number
    onLimitChange: (limit: number) => void
}