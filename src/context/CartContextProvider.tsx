import { createContext, ReactElement, useReducer } from "react"
import { ChildrenType, test, testAction } from "../interfaces/interfaces"

const useCartContext = () => {

    const useReducerActions = {
        updateCount: "updateCount"
    }

    const initialCartState: test = {
        count: 0
    }

    const reducer = (state: test, action: testAction) => {
        switch (action.type) {
            case useReducerActions.updateCount:
                return { ...state, count: state.count + 1 }
            default:
                throw new Error()
        }
    }

    const [state, dispatch] = useReducer(reducer, initialCartState);

    const copiedCount = state.count;

    return { useReducerActions, dispatch, copiedCount };
}

type testContextType = ReturnType<typeof useCartContext>

const initTestState: testContextType = {
    useReducerActions: { updateCount: "" },
    dispatch: () => { },
    copiedCount: 0
}

export const CartContext = createContext<testContextType>(initTestState);

export const CartContextProvider = ({ children }: ChildrenType): ReactElement => {
    return (
        <CartContext.Provider value={useCartContext()}>
            {children}
        </CartContext.Provider>
    )
}