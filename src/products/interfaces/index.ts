import { GetAllProductsInput, ProductType2 } from "../../interfaces/graphql/graphql"

export interface ProductsTableHeaderProps {
    refresh: () => void
    setSearch: (value: string) => void
    filters: GetAllProductsInput
    setFilters: (filters: GetAllProductsInput) => void
}

export interface ProductTableItemProps {
    product: ProductType2 // Define the type of product based on your data structure
    index: number,
    limit?: number,
    length?: number
    onEdit: (productId: string) => void
}

export interface ProductsTableProps {
    products?: ProductType2[] 
    showData: boolean
    loading: boolean
    limit: number
    hasNextPage: boolean
    onLimitChange: (limit: number) => void
    onNextPage: () => void
}