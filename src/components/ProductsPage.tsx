import { ReactElement } from "react";
import "../css/productspage.css"
import ProductBox from "./ProductBox";
import { ProductPageProps } from "../interfaces/interfaces";

const Products = ({ products }: ProductPageProps): ReactElement => {

    return (
        <section className="products-page">
            {
                products.length ?
                    products.map(product => <ProductBox key={product.id} product={product} />) :
                    <p>No products by such name.</p>
            }
        </section>
    )
}

export default Products;