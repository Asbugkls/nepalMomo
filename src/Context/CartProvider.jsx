import { createContext, useReducer } from "react";
import { toast, Bounce } from "react-toastify";


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

                toast.success(`${action.payload.name} is added to cart`, {
                    position: "top-right",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                });
                console.log(newCartItem);
                return {
                    ...state,
                    cartItem: newCartItem,
                }
            }
        }


        case 'RemoveItem': {
            const filterCartItem = state.cartItem.filter((item) => {
                return item.id !== action.payload.id
            })
            return {
                ...state,
                cartItem: filterCartItem,
            }
        }


        case 'Increment': {

            const newCartItem = state.cartItem.map((item) => {
                return item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item;
            })
            return {
                cartItem: newCartItem
            }
        }


        case 'Decrement': {
            const newCartItem = state.cartItem.map((item) => {
                return item.id === action.payload.id && item.qty > 1 ? { ...item, qty: item.qty - 1 } : item;
            })
            return {
                cartItem: newCartItem
            }
        }


        case 'ClearCart': {
            return {
                cartItem: []
            }
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