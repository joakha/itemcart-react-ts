import { ReactElement, useContext } from "react"
import { LayoutHeaderProps } from "../interfaces/interfaces"
import { CartContext } from "../context/CartContextProvider"

const LayoutHeader = ({ filterItems}: LayoutHeaderProps): ReactElement => {

    const { headerTitle, purchaseCount } = useContext(CartContext);

    return (
        <header className="cart-header">
            <p className="header-box" >{headerTitle}</p>
            {
                headerTitle === "Inventory Page" &&
                <input className="header-search" placeholder="Search items by name..." onChange={filterItems} />
            }
            <p className="header-box">Cart Item Count: {purchaseCount}</p>
        </header>
    )

}

export default LayoutHeader