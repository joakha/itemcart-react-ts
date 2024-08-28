import { ReactElement, useContext, useEffect } from "react";
import "../css/productspage.css"
import ItemBox from "./ItemBox";
import { InventoryPageProps } from "../interfaces/interfaces";
import { InventoryContext } from "../context/InventoryContextProvider";
import { CartContext } from "../context/CartContextProvider";

const InventoryPage = ({ inventory }: InventoryPageProps): ReactElement => {

    const { loading } = useContext(InventoryContext);
    const { useReducerActions, dispatch } = useContext(CartContext)

    useEffect(() => {
        dispatch({ type: useReducerActions.updateHeaderTitle, payload: "Inventory Page" });
    }, [])

    return (
        <>
            {
                loading ?
                    <p className="placeholder">Loading inventory...</p> :
                    inventory.length ?
                        <section className="products-page">
                            {
                                inventory.map(item => <ItemBox key={item.id} item={item} />)
                            }
                        </section> :
                        < p className="placeholder">No items by such name.</p>
            }
        </>
    )
}

export default InventoryPage;