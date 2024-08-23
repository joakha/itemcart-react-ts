import { createContext, ReactElement, useReducer } from "react"
import { ChildrenType, CartStateType, CartStateActionType, Product, CartProduct } from "../interfaces/interfaces"

const useReducerActions = {
    updateHeaderTitle: "updateHeaderTitle",
    addToCart: "addToCart",
    removeFromCart: "removeFromCart"
}

type useReducerActionType = typeof useReducerActions;

const useCartContext = (useReducerActions: useReducerActionType) => {

    const initCartState: CartStateType = {
        headerTitle: "Product Page",
        cart: []
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
                return { ...state, cart: [...filteredCart, { ...payloadProduct, quantity: productQuantity }] };
            case useReducerActions.removeFromCart:
                const { id } = action.payload as CartProduct;
                return { ...state, cart: state.cart.filter(cartProduct => cartProduct.id !== id) };
            default:
                throw new Error()
        }
    }

    const [state, dispatch] = useReducer(reducer, initCartState);

    const headerTitle = state.headerTitle;
    const sortedCart: CartProduct[] = state.cart.sort((a: CartProduct, b: CartProduct) => a.name.localeCompare(b.name));

    return { useReducerActions, dispatch, headerTitle, sortedCart };
}

type CartContextType = ReturnType<typeof useCartContext>

const initCartContextState: CartContextType = {
    useReducerActions,
    dispatch: () => { },
    headerTitle: "",
    sortedCart: []
}

export const CartContext = createContext<CartContextType>(initCartContextState);

export const CartContextProvider = ({ children }: ChildrenType): ReactElement => {
    return (
        <CartContext.Provider value={useCartContext(useReducerActions)}>
            {children}
        </CartContext.Provider>
    )
}