import { ReactElement, useContext, useEffect } from "react";
import { CartContext } from "../context/CartContextProvider";
import PurchaseRow from "./PurchaseRow";
import "../css/cartpage.css"

const PurchaseCartPage = (): ReactElement => {

    const { useReducerActions, dispatch, sortedCart } = useContext(CartContext);

    useEffect(() => {
        dispatch({ type: useReducerActions.updateHeaderTitle, payload: "Cart Page" });
    }, [])

    return (
            <section className="cart-content">
                {
                    sortedCart.length ?
                        sortedCart.map(purchase => (
                            <PurchaseRow key={purchase.id} purchase={purchase} />
                        )) :
                        <p className="placeholder">Cart is Empty.</p>
                }
            </section>
    );
}

export default PurchaseCartPage;