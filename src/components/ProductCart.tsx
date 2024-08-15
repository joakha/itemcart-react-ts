import { ReactElement, useContext } from "react";
import { CartContext } from "../context/CartContextProvider";

const ProductCart = (): ReactElement => {

    const { useReducerActions, dispatch, copiedCount } = useContext(CartContext);

    return (
        <>
            <div>{copiedCount}</div>
            <button onClick={() => dispatch({ type: useReducerActions.updateCount })}>hello</button>
        </>
    )
}

export default ProductCart;