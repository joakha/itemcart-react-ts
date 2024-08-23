import { ReactElement, useContext } from "react";
import { CartContext } from "../context/CartContextProvider";
import CartProductRow from "./CartProductRow";
import "../css/cartpage.css"

const ProductCart = (): ReactElement => {
    const { sortedCart } = useContext(CartContext);

    return (
        <section className="cart-content">
            {sortedCart.map(cartProduct => (
                <CartProductRow key={cartProduct.id} cartProduct={cartProduct} />
            ))}
        </section>
    );
}

export default ProductCart;