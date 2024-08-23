import { ReactElement, useContext, useEffect } from "react";
import "../css/productspage.css"
import ProductBox from "./ProductBox";
import { ProductPageProps } from "../interfaces/interfaces";
import { ProductsContext } from "../context/ProductContextProvider";
import { CartContext } from "../context/CartContextProvider";

const Products = ({ products }: ProductPageProps): ReactElement => {

    const { loading } = useContext(ProductsContext);
    const { useReducerActions, dispatch } = useContext(CartContext)

    useEffect(() => {
        dispatch({ type: useReducerActions.updateHeaderTitle, payload: "Product Page" });
    }, [])

    return (
        <>
            {
                loading ?
                    (<p className="placeholder">Loading products...</p>) :
                    products.length ? (
                        <section className="products-page">
                            {
                                products.map(product => <ProductBox key={product.id} product={product} />)
                            }
                        </section>
                    ) :
                        (< p className="placeholder">No products by such name.</p>)
            }
        </>
    )
}

export default Products;