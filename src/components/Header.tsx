import { ReactElement, useContext } from "react"
import { HeaderProps } from "../interfaces/interfaces"
import { CartContext } from "../context/CartContextProvider"

const Header = ({ filterProducts }: HeaderProps): ReactElement => {

    const { headerTitle } = useContext(CartContext);

    return (
        <header className="cart-header">
            <p className="header-box" >{headerTitle}</p>
            {
                headerTitle === "Product Page" &&
                <input className="header-search" placeholder="Search products by name..." onChange={filterProducts} />
            }
            <p className="header-box">Cart Item Count</p>
        </header>
    )

}

export default Header