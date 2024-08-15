import { ReactElement } from "react";
import { ProductBoxProps } from "../interfaces/interfaces";

const ProductBox = ({ product }: ProductBoxProps): ReactElement => {
    return (
        <article className="product-line-box">
            <div className="product-title">
                {product.name}
            </div>

            <div className="product-info-box">
                <div className="product-info">
                    <div>{product.description}</div>
                    <div>{product.price}</div>
                </div>

                <button className="product-info-button">Add to Cart</button>
            </div>
        </article>
    )
}

export default ProductBox;