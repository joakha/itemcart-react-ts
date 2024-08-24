import { ChildrenProps, Product, ProductContextType } from "../interfaces/interfaces"
import { createContext, ReactElement, useEffect, useState } from "react"
import { databaseURL } from "../constants/constants"

const initProductContextState: ProductContextType = {
    loading: false,
    products: []
}

export const ProductsContext = createContext<ProductContextType>(initProductContextState);

export const ProductContextProvider = ({ children }: ChildrenProps): ReactElement => {

    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        const fetchProductData = async (url: string) => {
            try {
                setLoading(true);
                const response = await fetch(url + "/products");
                const data: Product[] = await response.json();
                setProducts(data.sort((a: Product, b: Product) => a.name.localeCompare(b.name)));
                setLoading(false)
            } catch (error) {
                console.error(error);
            }
        }

        fetchProductData(databaseURL);

    }, [])

    return (
        <ProductsContext.Provider value={{ loading, products }}>
            {children}
        </ProductsContext.Provider>
    )
}