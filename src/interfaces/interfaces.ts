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

export interface ProductBoxProps {
    product: Product
}

export interface ProductContextType {
    loading: boolean,
    products: Product[]
}

export interface ProductPageProps {
    products: Product[]
}

export interface headerProps {
    filterProducts: (e: ChangeEvent<HTMLInputElement>) => void
}

export interface CartReducerStateType {
    cart: CartProduct[]
}

export interface ChildrenType {
    children: ReactElement | ReactElement[]
}