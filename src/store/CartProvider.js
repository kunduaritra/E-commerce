import React, { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  let [cartElements, setCartElements] = useState([]);

  const addItemsToCartHandler = (item) => {
    cartElements = [...cartElements, { ...item, quantity: 1 }];
    setCartElements(cartElements);
    console.log(cartElements);
  };

  const removeItemsFromCartHandler = (id) => {
    // Implement
  };

  const cartContext = {
    items: cartElements,
    addItem: addItemsToCartHandler,
    removeItem: removeItemsFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
