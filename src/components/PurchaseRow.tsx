import { ReactElement, useContext } from "react"
import { PurchaseRowProps } from "../interfaces/interfaces"
import { CartContext } from "../context/CartContextProvider"

const PurchaseRow = ({ purchase }: PurchaseRowProps): ReactElement => {

    const { useReducerActions, dispatch } = useContext(CartContext);

    return (
        <article className="cart-product-row">
            <div className="cart-product-info">
                <p className="cart-product-title">{purchase.name}</p>
                <p>{purchase.description}</p>
            </div>
            <p>Quantity: {purchase.quantity}</p>
            <p>Individual Item Price: {purchase.price}€</p>
            <p>Total Items Price: {purchase.price * purchase.quantity}€</p>
            <button className="cart-product-delete" onClick={() => dispatch({ type: useReducerActions.removePurchase, payload: purchase })}>Remove</button>
        </article>
    )

}

export default PurchaseRow