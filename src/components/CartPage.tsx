import { ReactElement, useContext, useEffect } from "react";
import { CartContext } from "../context/CartContextProvider";
import CartProductRow from "./CartProductRow";
import "../css/cartpage.css"

const ProductCart = (): ReactElement => {

    const { useReducerActions, dispatch, sortedCart } = useContext(CartContext);

    useEffect(() => {
        dispatch({ type: useReducerActions.updateHeaderTitle, payload: "Cart Page" });
    }, [])

    return (
            <section className="cart-content">
                {
                    sortedCart.length ?
                        sortedCart.map(cartProduct => (
                            <CartProductRow key={cartProduct.id} cartProduct={cartProduct} />
                        )) :
                        <p className="placeholder">Cart is Empty.</p>
                }
            </section>
    );
}

export default ProductCart;