import React, { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const [cartElements, setCartElements] = useState([]);

  const addItemsToCartHandler = (item) => {
    const updateCartElements = [...cartElements, { ...item, quantity: 1 }];
    setCartElements(updateCartElements);
  };

  const removeItemsFromCartHandler = (id) => {
    // Implement
  };

  const cartContext = {
    items: cartElements,
    addItems: addItemsToCartHandler,
    removeItems: removeItemsFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
