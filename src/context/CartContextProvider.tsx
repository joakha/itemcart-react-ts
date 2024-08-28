import { createContext, ReactElement, useReducer } from "react"
import { ChildrenProps, CartStateType, CartStateActionType, Item, Purchase, useReducerActionsType } from "../interfaces/interfaces"

const useReducerActions: useReducerActionsType = {
    updateHeaderTitle: "updateHeaderTitle",
    addPurchase: "addPurchase",
    removePurchase: "removePurchase",
    clearPurchases: "clearPurchases"
}

type CartContextType = {
    useReducerActions: useReducerActionsType,
    dispatch: React.Dispatch<CartStateActionType>,
    headerTitle: string,
    sortedCart: Purchase[],
    purchaseCount: number,
    orderPrice: number,
    submitOrder: (url: string, cartContents: Purchase[]) => Promise<void>
}

const initCartContextState: CartContextType = {
    useReducerActions,
    dispatch: () => { },
    headerTitle: "",
    sortedCart: [],
    purchaseCount: 0,
    orderPrice: 0,
    submitOrder: () => { return Promise.resolve() }
}

export const CartContext = createContext<CartContextType>(initCartContextState);

const CartContextProvider = ({ children }: ChildrenProps): ReactElement => {

    const reducer = (state: CartStateType, action: CartStateActionType): CartStateType => {

        switch (action.type) {
            case useReducerActions.updateHeaderTitle:
                return { ...state, headerTitle: action.payload as string }

            case useReducerActions.addPurchase:
                const payloadItem = action.payload as Item;
                const filteredCart: Purchase[] = state.cart.filter(purchase => purchase.id !== payloadItem.id);
                const purchaseInCart = state.cart.find(purchase => purchase.id === payloadItem.id);
                const purchaseQuantity: number = purchaseInCart ? purchaseInCart.quantity + 1 : 1;
                localStorage.setItem("cart", JSON.stringify([...filteredCart, { ...payloadItem, quantity: purchaseQuantity }]));
                return { ...state, cart: [...filteredCart, { ...payloadItem, quantity: purchaseQuantity }] };

            case useReducerActions.removePurchase:
                const { id } = action.payload as Purchase;
                localStorage.setItem("cart", JSON.stringify(state.cart.filter(purchase => purchase.id !== id)));
                return { ...state, cart: state.cart.filter(purchase => purchase.id !== id) };

            case useReducerActions.clearPurchases:
                localStorage.removeItem("cart");
                return { ...state, cart: [] };

            default:
                throw new Error();
        }
    }

    const initCartState: CartStateType = {
        headerTitle: "",
        cart: JSON.parse(localStorage.getItem("cart") || "[]")
    }

    const [state, dispatch] = useReducer(reducer, initCartState);

    const headerTitle = state.headerTitle;
    const sortedCart: Purchase[] = state.cart.sort((a: Purchase, b: Purchase) => a.name.localeCompare(b.name));
    const purchaseCount = sortedCart.reduce((prev, curr) => prev + curr.quantity, 0);
    const orderPrice = sortedCart.reduce((prev, curr) => prev + curr.quantity * curr.price, 0);

    const submitOrder = async (url: string, cartContents: Purchase[]) => {
        try {
            const response = await fetch(url + "/orders",
                { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ purchases: cartContents }) });
            response.ok ? console.log("Order successfully received!") : console.log("Error submitting order!");
            dispatch({ type: useReducerActions.clearPurchases })
        } catch (error) {
            console.error(error);
        }
    }

    const cartContextProviderValue = {
        useReducerActions,
        dispatch,
        headerTitle,
        sortedCart,
        purchaseCount,
        orderPrice,
        submitOrder
    }

    return (
        <CartContext.Provider value={cartContextProviderValue}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider