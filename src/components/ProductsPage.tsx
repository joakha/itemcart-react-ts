import { ReactElement, useContext } from "react";
import "../css/productspage.css"
import ProductBox from "./ProductBox";
import { ProductPageProps } from "../interfaces/interfaces";
import { ProductsContext } from "../context/ProductContextProvider";

const Products = ({ products }: ProductPageProps): ReactElement => {

    const { loading } = useContext(ProductsContext);

    return (
        <section className="products-page">
            {
                loading ?
                    <p>Loading products...</p> :
                    products.length ?
                        products.map(product => <ProductBox key={product.id} product={product} />) :
                        <p>No products by such name.</p>
            }
        </section>
    )
}

export default Products;