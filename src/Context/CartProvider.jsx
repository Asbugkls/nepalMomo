import { createContext, useReducer } from "react";

export const CartContext = createContext()

let initialState = {
    cartItem: [],
}
let cartReducer = (state, action) => {
    // console.log("cartReducer");
    // console.log(action);

    switch (action.type) {
        case 'AddToCart': {



            const isExisting = state.cartItem.find((item) => {
                return item.id === action.payload.id;
            })
            if (isExisting) {
                return state;
            } else {
                const newProduct = { ...action.payload, qty: 1 }
                // console.log(newProduct);


                let newCartItem = [...state.cartItem, newProduct]
                console.log(newCartItem);
                return {
                    ...state,
                    cartItem: newCartItem,
                }
            }

            // console.log(action.payload);
            break;
        }

        case 'RemoveToItem': {
            break;
        }

        case 'Increment': {
            break;
        }

        case 'Decrement': {
            break;
        }

        case 'ClearCart': {
            break;
        }

        default: {
            return state;
        }
    }
}




export const CartProvider = ({ children }) => {

    const [state, dispatch] = useReducer(cartReducer, initialState)

    return <CartContext.Provider value={{ state, dispatch }}>
        {children}
    </CartContext.Provider>
}