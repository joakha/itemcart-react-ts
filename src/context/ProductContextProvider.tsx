import { ChildrenType, Product, ProductContextType } from "../interfaces/interfaces"
import { createContext, ReactElement, useEffect, useState } from "react"

const initProductContextState: ProductContextType = {
    loading: true,
    products: []
}

export const ProductsContext = createContext<ProductContextType>(initProductContextState);

export const ProductContextProvider = ({ children }: ChildrenType): ReactElement => {

    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchProductData = async () => {
            try {
                const response = await fetch("http://localhost:3000/products");
                const data: Product[] = await response.json();
                setProducts(data.sort((a: Product, b: Product) => a.name.localeCompare(b.name)));
                setLoading(false)
            } catch (error) {
                console.error(error);
            }
        }

        fetchProductData()

    }, [])

    return (
        <ProductsContext.Provider value={{ loading, products }}>
            {children}
        </ProductsContext.Provider>
    )
}