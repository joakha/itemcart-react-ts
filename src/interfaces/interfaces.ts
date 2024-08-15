import { ReactElement } from "react"

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
    count: number
}

export interface testAction {
    type: string,
    payload?: number
}

export interface LayoutProps {
    showCart: boolean,
    setShowCart: React.Dispatch<React.SetStateAction<boolean>>
}

export interface ProductBoxProps {
    product: Product
}

export interface ProductContextType {
    sortedProducts: Product[]
}

export interface ProductPageProps {
    products: Product[]
}

export interface CartReducerStateType {
    cart: CartProduct[]
}

export interface ChildrenType {
    children: ReactElement | ReactElement[]
}