import { ReactElement } from "react"
import { Link } from "react-router-dom"

const CartSidebar = (): ReactElement => {
    return (
        <nav className="cart-sidebar">
            <Link style={{ marginTop: "100px" }} to={"/"}>
                <button className="navlink">Products</button>
            </Link>
            <Link style={{ marginTop: "100px" }} to={"/cart"}>
                <button className="navlink">Cart</button>
            </Link>
        </nav>
    )
}

export default CartSidebar