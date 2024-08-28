import { CartContext } from "../context/CartContextProvider"
import { databaseURL } from "../constants/constants"
import { useContext } from "react"

const CartFooter = () => {

    const { headerTitle, sortedCart, totalCartPrice, submitOrder } = useContext(CartContext);

    return (
        <footer className="layout-footer">
            <p>Item Cart Practice Project &copy; {new Date().getFullYear()}</p>
            {
                headerTitle === "Cart Page" && sortedCart.length > 0 &&
                <>
                    <p>Total Order Price: {totalCartPrice}€</p>
                    <button className="order-button" onClick={() => submitOrder(databaseURL, sortedCart)}>Submit Order</button>
                </>
            }
        </footer>
    )

}

export default CartFooter