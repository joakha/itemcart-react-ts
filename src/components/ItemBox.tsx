import { ReactElement, useContext } from "react";
import { ItemBoxProps, Purchase } from "../interfaces/interfaces";
import { CartContext } from "../context/CartContextProvider";

const ItemBox = ({ item }: ItemBoxProps): ReactElement => {

    const { useReducerActions, dispatch, sortedCart } = useContext(CartContext);

    const cartContainsItem: Purchase | undefined = sortedCart.find(purchase => purchase.id === item.id);

    return (
        <article className="product-line-box">
            <p className="product-title">
                {item.name}
            </p>

            <div className="product-info-box">
                <div className="product-info">
                    <p>{item.description}</p>
                    <p>{item.price}€</p>
                </div>

                {
                    cartContainsItem &&
                    <p className="in-cart-message">Item is in cart</p>
                }
                <button className="product-info-button" onClick={() => dispatch({ type: useReducerActions.addPurchase, payload: item })}>Add to Cart</button>
            </div>
        </article>
    )
}

export default ItemBox;