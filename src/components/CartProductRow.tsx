import { ReactElement, useContext } from "react"
import { CartProductRowProps } from "../interfaces/interfaces"
import { CartContext } from "../context/CartContextProvider"

const CartProductRow = ({ cartProduct }: CartProductRowProps): ReactElement => {

    const { useReducerActions, dispatch } = useContext(CartContext);

    return (
        <article className="cart-product-row">
            <div className="cart-product-info">
                <p className="cart-product-title">{cartProduct.name}</p>
                <p>{cartProduct.description}</p>
            </div>
            <p>Quantity: {cartProduct.quantity}</p>
            <p>Total product price: {cartProduct.price * cartProduct.quantity}</p>
            <button className="cart-product-delete" onClick={() => dispatch({type: useReducerActions.removeFromCart, payload: cartProduct})}>Remove</button>
        </article>
    )

}

export default CartProductRow