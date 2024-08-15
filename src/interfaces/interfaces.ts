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

export interface LayoutPropTypes {
    showCart: boolean,
    setShowCart: React.Dispatch<React.SetStateAction<boolean>>
}

export interface ProductBoxPropTypes {
    product: Product
}

export interface ProductContextType {
    products: Product[]
}

export interface CartReducerStateType {
    cart: CartProduct[]
}

export interface ChildrenType {
    children: ReactElement | ReactElement[]
}