import React, { useState, createContext } from "react";

export const cartContext = createContext();

function CartProvider({ children }) {
  const [itemsBought, setItemsBought] = useState([]);
  return (
    <cartContext.Provider value={{ itemsBought, setItemsBought }}>
      {children}
    </cartContext.Provider>
  );
}

export default CartProvider;
