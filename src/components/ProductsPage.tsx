import { ReactElement } from "react";
import { Product } from "../interfaces/interfaces";
import "../css/productspage.css"

const Products = (): ReactElement => {

    const Products: Product[] = [
        {
            id: 1,
            name: "Banana",
            description: "A delicious banana",
            price: 1.99
        },
        {
            id: 2,
            name: "Watermelon",
            description: "Best watermelon ever",
            price: 4.99
        },
        {
            id: 3,
            name: "Ketchup",
            description: "Tomato Ketchup",
            price: 5.99
        },
        {
            id: 4,
            name: "Socks",
            description: "Comfortable Socks",
            price: 9.99
        },
        {
            id: 5,
            name: "Computer Mouse",
            description: "A lightweight mouse",
            price: 19.99
        },
        {
            id: 6,
            name: "Cheese",
            description: "Cheap cheese",
            price: 2.99
        }
    ]

    return (
        <section className="products-page">
            {Products.map(product => {
                return (
                    <article key={product.id} className="product-line-box">
                        <div className="product-title">
                            {product.name}
                        </div>

                        <div className="product-info-box">
                            <div className="product-info">
                                <div>{product.description}</div>
                                <div>{product.price}</div>
                            </div>

                            <button className="product-info-button">Add to Cart</button>
                        </div>
                    </article>
                )
            })}
        </section>
    )
}

export default Products;