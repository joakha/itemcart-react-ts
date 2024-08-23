import { createContext, ReactElement, useReducer } from "react"
import { ChildrenType, CartStateType, CartStateActionType, Product, CartProduct } from "../interfaces/interfaces"

const useReducerActions = {
    updateHeaderTitle: "updateHeaderTitle",
    addToCart: "addToCart",
    removeFromCart: "removeFromCart",
    clearCart: "clearCart"
}

type useReducerActionType = typeof useReducerActions;

const useCartContext = (useReducerActions: useReducerActionType) => {

    const initCartState: CartStateType = {
        headerTitle: "",
        cart: JSON.parse(localStorage.getItem("cart") || "[]")
    }

    const reducer = (state: CartStateType, action: CartStateActionType): CartStateType => {

        switch (action.type) {
            case useReducerActions.updateHeaderTitle:
                return { ...state, headerTitle: action.payload as string }

            case useReducerActions.addToCart:
                const payloadProduct = action.payload as Product;
                const filteredCart: CartProduct[] = state.cart.filter(product => product.id !== payloadProduct.id);
                const productInCart = state.cart.find(product => product.id === payloadProduct.id);
                const productQuantity: number = productInCart ? productInCart.quantity + 1 : 1;
                localStorage.setItem("cart", JSON.stringify([...filteredCart, { ...payloadProduct, quantity: productQuantity }]));
                return { ...state, cart: [...filteredCart, { ...payloadProduct, quantity: productQuantity }] };

            case useReducerActions.removeFromCart:
                const { id } = action.payload as CartProduct;
                localStorage.setItem("cart", JSON.stringify(state.cart.filter(cartProduct => cartProduct.id !== id)));
                return { ...state, cart: state.cart.filter(cartProduct => cartProduct.id !== id) };

            case useReducerActions.clearCart:
                localStorage.removeItem("cart");
                return { ...state, cart: [] };

            default:
                throw new Error()
        }
    }

    const [state, dispatch] = useReducer(reducer, initCartState);

    const headerTitle = state.headerTitle;
    const sortedCart: CartProduct[] = state.cart.sort((a: CartProduct, b: CartProduct) => a.name.localeCompare(b.name));
    const cartProductCount = sortedCart.reduce((prev, curr) => prev + curr.quantity, 0);
    const totalPrice = sortedCart.reduce((prev, curr) => prev + curr.quantity * curr.price, 0);

    const submitOrder = async (url: string, cartContents: CartProduct[]) => {
        try {
            const response = await fetch(url + "/orders",
                { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ items: cartContents }) });
            response.ok ? console.log("Order successfully received!") : console.log("Error submitting order!");
            dispatch({ type: useReducerActions.clearCart })
        } catch (error) {
            console.error(error);
        }
    }

    return { useReducerActions, dispatch, headerTitle, sortedCart, cartProductCount, totalPrice, submitOrder };
}

type CartContextType = ReturnType<typeof useCartContext>

const initCartContextState: CartContextType = {
    useReducerActions,
    dispatch: () => { },
    headerTitle: "",
    sortedCart: [],
    cartProductCount: 0,
    totalPrice: 0,
    submitOrder: () => { return Promise.resolve() }
}

export const CartContext = createContext<CartContextType>(initCartContextState);

export const CartContextProvider = ({ children }: ChildrenType): ReactElement => {
    return (
        <CartContext.Provider value={useCartContext(useReducerActions)}>
            {children}
        </CartContext.Provider>
    )
}