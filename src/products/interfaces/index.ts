import { ProductType2 } from "../../interfaces/graphql/graphql"

export interface ProductTableItemProps {
    product: ProductType2 // Define the type of product based on your data structure
    index: number
}

export interface ProductsTableProps {
    products?: ProductType2[]
    showData: boolean
    loading: boolean
}