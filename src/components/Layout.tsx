import { ChangeEvent, ReactElement, useContext, useRef, useState } from "react";
import "../css/layout.css"
import { LayoutProps, Product } from "../interfaces/interfaces";
import ProductCart from "./ProductCart";
import ProductsPage from "./ProductsPage";
import { ProductsContext } from "../context/ProductContextProvider.tsx";

const Layout = ({ showCart, setShowCart }: LayoutProps): ReactElement => {

    const { sortedProducts } = useContext(ProductsContext);
    const keyword = useRef<HTMLInputElement>(null)
    const [filteredResults, setFilteredResults] = useState<Product[]>([]);

    const filterProducts = (e: ChangeEvent<HTMLInputElement>) => {
        const filteredResults = sortedProducts.filter(product => product.name.toLowerCase().includes(e.target.value.toLowerCase()));
        setFilteredResults(filteredResults);
    }

    const switchView = (value: boolean) => {
        value ? setShowCart(true) : setShowCart(false);
    }

    return (
        <>
            <header className="cart-header">
                <div className="header-box" >{showCart ? "Cart Page" : "Product Page"}</div>
                <input className="header-search" placeholder="Filter products by name..." ref={keyword} onChange={filterProducts} />
                <div className="header-box">Cart Item Count</div>
            </header>

            <nav className="cart-sidebar">
                <button className="navlink" onClick={() => switchView(false)}>Products</button>
                <button className="navlink" onClick={() => switchView(true)}>Cart</button>
            </nav>

            <main>
                {showCart ?
                    <ProductCart /> :
                    <ProductsPage
                        products={
                            keyword.current?.value === "" ? sortedProducts : filteredResults
                        }
                    />
                }
            </main>
        </>
    )
}

export default Layout;