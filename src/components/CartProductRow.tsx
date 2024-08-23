import { ReactElement, useContext } from "react"
import { CartProductRowProps } from "../interfaces/interfaces"
import { CartContext } from "../context/CartContextProvider"

const CartProductRow = ({ cartProduct }: CartProductRowProps): ReactElement => {

    const { useReducerActions, dispatch } = useContext(CartContext);

    return (
        <article className="cart-product-row">
            <div className="cart-product-info">
                <div className="cart-product-title">{cartProduct.name}</div>
                <div>{cartProduct.description}</div>
            </div>
            <div>Quantity: {cartProduct.quantity}</div>
            <div>Total product price: {cartProduct.price * cartProduct.quantity}</div>
            <button className="cart-product-delete" onClick={() => dispatch({type: useReducerActions.removeFromCart, payload: cartProduct})}>Remove</button>
        </article>
    )

}

export default CartProductRow