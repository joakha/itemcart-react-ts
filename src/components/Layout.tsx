import { ChangeEvent, ReactElement, useContext, useState } from "react";
import "../css/layout.css"
import { Product } from "../interfaces/interfaces";
import ProductsPage from "./ProductsPage";
import { ProductsContext } from "../context/ProductContextProvider.tsx";
import Header from "./Header.tsx";
import Sidebar from "./Sidebar.tsx";
import { Route, Routes } from "react-router-dom";
import CartPage from "./CartPage.tsx";
import Footer from "./Footer.tsx";

const Layout = (): ReactElement => {

    const { products } = useContext(ProductsContext);
    const [keyword, setKeyword] = useState("");
    const filteredResults: Product[] = products.filter(product => product.name.toLowerCase().includes(keyword.toLowerCase()));

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
                                keyword.trim() === "" ? products : filteredResults
                            }
                        />} />
                    <Route path="/cart" element={<CartPage />} />
                </Routes>
            </main>
            <Footer />
        </>
    )
}

export default Layout;