import { ReactElement, useContext } from "react";
import { ProductBoxProps } from "../interfaces/interfaces";
import { CartContext } from "../context/CartContextProvider";

const ProductBox = ({ product }: ProductBoxProps): ReactElement => {

    const { useReducerActions, dispatch } = useContext(CartContext);

    return (
        <article className="product-line-box">
            <div className="product-title">
                {product.name}
            </div>

            <div className="product-info-box">
                <div className="product-info">
                    <div>{product.description}</div>
                    <div>{String(product.price) + "€"}</div>
                </div>

                <button className="product-info-button" onClick={() => dispatch({ type: useReducerActions.addToCart, payload: product })}>Add to Cart</button>
            </div>
        </article>
    )
}

export default ProductBox;