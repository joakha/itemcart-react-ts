export interface LayoutPropTypes {
    showCart: boolean,
    setShowCart: React.Dispatch<React.SetStateAction<boolean>>
}

export interface Product {
    id: number,
    name: string,
    description: string,
    price: number
}