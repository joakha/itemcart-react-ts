import { ReactElement, useContext, useEffect } from "react";
import { CartContext } from "../context/CartContextProvider";
import CartProductRow from "./CartProductRow";
import "../css/cartpage.css"

const ProductCart = (): ReactElement => {

    const { useReducerActions, dispatch , sortedCart } = useContext(CartContext);

    useEffect(() => {
        dispatch({type: useReducerActions.updateHeaderTitle, payload: "Cart Page"});
    }, [])

    return (
        <section className="cart-content">
            {sortedCart.map(cartProduct => (
                <CartProductRow key={cartProduct.id} cartProduct={cartProduct} />
            ))}
        </section>
    );
}

export default ProductCart;