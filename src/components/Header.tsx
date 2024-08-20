import { ReactElement, useContext } from "react"
import { HeaderProps } from "../interfaces/interfaces"
import { CartContext } from "../context/CartContextProvider"

const Header = ({ filterProducts }: HeaderProps): ReactElement => {

    const { headerTitle } = useContext(CartContext);

    return (
        <header className="cart-header">
            <div className="header-box" >{headerTitle}</div>
            {
                headerTitle === "Product Page" &&
                <input className="header-search" placeholder="Filter products by name..." onChange={filterProducts} />
            }
            <div className="header-box">Cart Item Count</div>
        </header>
    )

}

export default Header