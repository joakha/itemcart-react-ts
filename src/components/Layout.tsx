import { ChangeEvent, ReactElement, useContext, useState } from "react";
import "../css/layout.css"
import { Product } from "../interfaces/interfaces";
import ProductCart from "./ProductCart";
import ProductsPage from "./ProductsPage";
import { ProductsContext } from "../context/ProductContextProvider.tsx";
import Header from "./Header.tsx";
import Sidebar from "./Sidebar.tsx";
import { Route, Routes } from "react-router-dom";

const Layout = (): ReactElement => {

    const { sortedProducts } = useContext(ProductsContext);
    const [keyword, setKeyword] = useState("");
    const filteredResults: Product[] = sortedProducts.filter(product => product.name.toLowerCase().includes(keyword.toLowerCase()));

    const filterProducts = (e: ChangeEvent<HTMLInputElement>) => {
        setKeyword(e.target.value);
    }

    return (
        <>
            <Header filterProducts={filterProducts} />
            <Sidebar />
            <main>
                <Routes>
                    <Route path="/" element={
                        <ProductsPage
                            products={
                                keyword.trim() === "" ? sortedProducts : filteredResults
                            }
                        />} />
                    <Route path="/cart" element={<ProductCart />} />
                </Routes>
            </main>
        </>
    )
}

export default Layout;