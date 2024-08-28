import { ChangeEvent, ReactElement, useContext, useState } from "react";
import "../css/layout.css"
import { Item } from "../interfaces/interfaces.ts";
import InventoryPage from "./InventoryPage.tsx";
import { InventoryContext } from "../context/InventoryContextProvider.tsx";
import LayoutHeader from "./LayoutHeader.tsx";
import LayoutSidebar from "./LayoutSidebar.tsx";
import { Route, Routes } from "react-router-dom";
import PurchaseCartPage from "./PurchaseCartPage.tsx";
import LayoutFooter from "./LayoutFooter.tsx";

const AppLayout = (): ReactElement => {

    const { inventory } = useContext(InventoryContext);
    const [keyword, setKeyword] = useState("");
    const searchItems: Item[] = inventory.filter(item => item.name.toLowerCase().includes(keyword.toLowerCase()));

    const filterItems = (e: ChangeEvent<HTMLInputElement>) => {
        setKeyword(e.target.value);
    }

    return (
        <>
            <LayoutHeader filterItems={filterItems} />
            <LayoutSidebar />
            <main>
                <Routes>
                    <Route path="/" element={
                        <InventoryPage
                            inventory={
                                keyword.trim() === "" ? inventory : searchItems
                            }
                        />} />
                    <Route path="/cart" element={<PurchaseCartPage />} />
                </Routes>
            </main>
            <LayoutFooter />
        </>
    )
}

export default AppLayout;