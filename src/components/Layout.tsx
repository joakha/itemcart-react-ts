import { ReactElement } from "react";
import "../css/layout.css"
import { LayoutPropTypes } from "../interfaces/interfaces";
import ProductCart from "./ProductCart";
import ProductsPage from "./ProductsPage";

const Layout = ({showCart, setShowCart}: LayoutPropTypes): ReactElement => {

    const switchView = (value: boolean) => {
        value ? setShowCart(true) : setShowCart(false);
    }

    return (
        <>
            <header className="cart-header">
                <div className="header-box" >Product Cart Project</div>
                <div className="header-box" >{showCart ? "Product Cart Page" : "Product Page"}</div>
                <div className="header-box">Cart Item Count</div>
            </header>

            <nav className="cart-sidebar">
                <button className="navlink" onClick={() => switchView(false)}>Products</button>
                <button className="navlink" onClick={() => switchView(true)}>Cart</button>                    
            </nav>

            <main>{showCart ? <ProductCart/> : <ProductsPage/>}</main>
        </>
    )
}

export default Layout;