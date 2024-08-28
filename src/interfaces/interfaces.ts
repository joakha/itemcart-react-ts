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
    price: number,
    quantity: number
}

//types for component props

export interface ChildrenProps {
    children: ReactElement | ReactElement[]
}

export interface HeaderProps {
    filterProducts: (e: ChangeEvent<HTMLInputElement>) => void
}

export interface CartProductRowProps {
    cartProduct: CartProduct
}

export interface ProductPageProps {
    products: Product[]
}

export interface ProductBoxProps {
    product: Product
}

//types for product context

export interface ProductContextType {
    loading: boolean,
    products: Product[]
}

//types for cart state

export interface CartStateType {
    headerTitle: string,
    cart: CartProduct[],
}

export interface CartStateActionType {
    type: string,
    payload?: string | Product | CartProduct
}

export interface useReducerActionsType {
    updateHeaderTitle: string;
    addToCart: string;
    removeFromCart: string;
    clearCart: string;
}
