import { ReactElement, useContext } from "react";
import { ProductBoxProps } from "../interfaces/interfaces";
import { CartContext } from "../context/CartContextProvider";

const ProductBox = ({ product }: ProductBoxProps): ReactElement => {

    const { useReducerActions, dispatch, sortedCart } = useContext(CartContext);

    const productInCart: boolean = sortedCart.some(cartProduct => cartProduct.id === product.id);

    return (
        <article className="product-line-box">
            <p className="product-title">
                {product.name}
            </p>

            <div className="product-info-box">
                <div className="product-info">
                    <p>{product.description}</p>
                    <p>{String(product.price) + "€"}</p>
                </div>

                { productInCart && 
                <p className="in-cart-message">Item is in cart</p>
                }
                <button className="product-info-button" onClick={() => dispatch({ type: useReducerActions.addToCart, payload: product })}>Add to Cart</button>
            </div>
        </article>
    )
}

export default ProductBox;