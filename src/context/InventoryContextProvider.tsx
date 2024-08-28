import { ChildrenProps, Item, InventoryContextType } from "../interfaces/interfaces"
import { createContext, ReactElement, useEffect, useState } from "react"
import { databaseURL } from "../constants/constants"

const inventoryContextState: InventoryContextType = {
    loading: false,
    inventory: []
}

export const InventoryContext = createContext<InventoryContextType>(inventoryContextState);

const InventoryContextProvider = ({ children }: ChildrenProps): ReactElement => {

    const [inventory, setInventory] = useState<Item[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        const fetchInventoryData = async (url: string) => {
            try {
                setLoading(true);
                const response = await fetch(url + "/inventory");
                const data: Item[] = await response.json();
                setInventory(data.sort((a: Item, b: Item) => a.name.localeCompare(b.name)));
                setLoading(false)
            } catch (error) {
                console.error(error);
            }
        }

        fetchInventoryData(databaseURL);

    }, [])

    return (
        <InventoryContext.Provider value={{ loading, inventory }}>
            {children}
        </InventoryContext.Provider>
    )
}

export default InventoryContextProvider