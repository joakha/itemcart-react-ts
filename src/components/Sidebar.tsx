import { ReactElement, useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../context/CartContextProvider"

const Sidebar = (): ReactElement => {

    const {useReducerActions, dispatch} = useContext(CartContext);

    return (
        <nav className="cart-sidebar">
            <Link to={"/"}>
            <button className="navlink" onClick={() => dispatch({type: useReducerActions.updateHeaderTitle, payload: "Product Page"})}>Products</button>
            </Link>
            <Link to={"/cart"}>
            <button className="navlink" onClick={() => dispatch({type: useReducerActions.updateHeaderTitle, payload: "Cart Page"})}>Cart</button>
            </Link>
        </nav>
    )

}

export default Sidebar