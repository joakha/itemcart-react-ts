import { CartContext } from "../context/CartContextProvider"
import { databaseURL } from "../constants/constants"
import { useContext } from "react"

const Footer = () => {

    const { headerTitle, sortedCart, totalPrice, submitOrder } = useContext(CartContext);

    return (
        <footer className="layout-footer">
            {
                headerTitle === "Cart Page" && sortedCart.length > 0 &&
                <>
                    <p>Total Order Price: {totalPrice}€</p>
                    <button className="order-button" onClick={() => submitOrder(databaseURL, sortedCart)}>Submit Order</button>
                </>
            }
        </footer>
    )

}

export default Footer