import {  createContext } from "react";
export const CartContext = createContext();

let initialstate={
  CartItems:[],
}

export const CartProvider = ({ children }) => {

  return <CartContext.Provider value={12}>{children}</CartContext.Provider>;
};
