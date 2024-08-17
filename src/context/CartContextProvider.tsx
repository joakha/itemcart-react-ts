import { createContext, ReactElement, useReducer } from "react"
import { ChildrenType, test, testAction } from "../interfaces/interfaces"

const useReducerActions = {
    updateCount: "updateCount",
    updateHeaderTitle: "updateHeaderTitle"
}

type useReducerActionType = typeof useReducerActions;

const useCartContext = (useReducerActions: useReducerActionType) => {

    const initialCartState: test = {
        headerTitle: "Product Page",
        count: 0
    }

    const reducer = (state: test, action: testAction) => {
        switch (action.type) {
            case useReducerActions.updateHeaderTitle:
                return { ...state, headerTitle: action.payload as string}
            case useReducerActions.updateCount:
                return { ...state, count: state.count + 1 }
            default:
                throw new Error()
        }
    }

    const [state, dispatch] = useReducer(reducer, initialCartState);

    const copiedCount = state.count;

    const headerTitle = state.headerTitle;

    return { useReducerActions, dispatch, copiedCount, headerTitle };
}

type testContextType = ReturnType<typeof useCartContext>

const initTestState: testContextType = {
    useReducerActions,
    dispatch: () => { },
    copiedCount: 0,
    headerTitle: ""
}

export const CartContext = createContext<testContextType>(initTestState);

export const CartContextProvider = ({ children }: ChildrenType): ReactElement => {
    return (
        <CartContext.Provider value={useCartContext(useReducerActions)}>
            {children}
        </CartContext.Provider>
    )
}