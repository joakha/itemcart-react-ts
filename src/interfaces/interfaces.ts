import { ChangeEvent, ReactElement } from "react"

export interface Product {
    id: number,
    name: string,
    description: string,
    price: number
}

export interface CartProduct {
    id: number,
    name: string,
    description: string,
    price: number
    quantity: number
}

export interface test {
    headerTitle: string,
    count: number
}

export interface testAction {
    type: string,
    payload?: number | string
}

export interface CartReducerStateType {
    cart: CartProduct[]
}

//types for component props

export interface HeaderProps {
    filterProducts: (e: ChangeEvent<HTMLInputElement>) => void
}

export interface ProductBoxProps {
    product: Product
}

export interface ProductPageProps {
    products: Product[]
}

//types for context

export interface ChildrenType {
    children: ReactElement | ReactElement[]
}

export interface ProductContextType {
    loading: boolean,
    products: Product[]
}
