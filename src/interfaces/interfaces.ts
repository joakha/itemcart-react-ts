import { ChangeEvent, ReactElement } from "react"

export interface Item {
    id: number,
    name: string,
    description: string,
    price: number
}

export interface Purchase {
    id: number,
    name: string,
    description: string,
    price: number,
    quantity: number
}

export interface useReducerActionsType {
    updateHeaderTitle: string,
    addPurchase: string,
    removePurchase: string,
    clearPurchases: string
}

//types for component props

export interface ChildrenProps {
    children: ReactElement | ReactElement[]
}

export interface InventoryPageProps {
    inventory: Item[]
}

export interface ItemBoxProps {
    item: Item
}

export interface LayoutHeaderProps {
    filterItems: (e: ChangeEvent<HTMLInputElement>) => void
}

export interface PurchaseRowProps {
    purchase: Purchase
}

//types for inventory context

export interface InventoryContextType {
    loading: boolean,
    inventory: Item[]
}

//types for cart state

export interface CartStateType {
    headerTitle: string,
    cart: Purchase[],
}

export interface CartStateActionType {
    type: string,
    payload?: string | Item | Purchase
}