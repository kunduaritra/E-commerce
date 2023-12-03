import React, { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  let [cartElements, setCartElements] = useState([]);

  const addItemsToCartHandler = (item) => {
    const isPresent = cartElements.find((elem) => elem.title === item.title);

    if (isPresent) {
      setCartElements((prevCartElements) =>
        prevCartElements.map((elem) =>
          elem.title === item.title
            ? {
                ...elem,
                quantity: elem.quantity + 1,
                price: elem.price + item.price,
              }
            : elem
        )
      );
    } else {
      setCartElements((prevCartElements) => [
        ...prevCartElements,
        { ...item, quantity: 1 },
      ]);
    }
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
      {console.log("cartContext proviider ->", cartContext.items.length)}
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
