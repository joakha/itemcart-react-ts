import { ChildrenType, Product, ProductContextType } from "../interfaces/interfaces"
import { createContext, ReactElement } from "react"

const products: Product[] = [
    {
        id: 1,
        name: "Banana",
        description: "A delicious banana",
        price: 1.99
    },
    {
        id: 2,
        name: "Watermelon",
        description: "Best watermelon ever",
        price: 4.99
    },
    {
        id: 3,
        name: "Ketchup",
        description: "Tomato Ketchup",
        price: 5.99
    },
    {
        id: 4,
        name: "Socks",
        description: "Comfortable Socks",
        price: 9.99
    },
    {
        id: 5,
        name: "Computer Mouse",
        description: "A lightweight mouse",
        price: 19.99
    },
    {
        id: 6,
        name: "Cheese",
        description: "Cheap cheese",
        price: 2.99
    }
]

const sortedProducts = products.sort((a: Product, b: Product) => a.name.localeCompare(b.name));

const initProductContextState: ProductContextType = {
    sortedProducts: []
}

export const ProductsContext = createContext<ProductContextType>(initProductContextState);

export const ProductContextProvider = ({ children }: ChildrenType): ReactElement => {
    return (
        <ProductsContext.Provider value={{ sortedProducts }}>
            {children}
        </ProductsContext.Provider>
    )
}
