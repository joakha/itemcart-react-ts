import { ReactElement, useContext } from "react";
import "../css/productspage.css"
import { ProductsContext } from "../context/ProductContextProvider";
import ProductBox from "./ProductBox";

const Products = (): ReactElement => {

    const { products } = useContext(ProductsContext);

    return (
        <section className="products-page">
            {products.map(product => {
                return (
                    <ProductBox key={product.id} product={product} />
                )
            })}
        </section>
    )
}

export default Products;