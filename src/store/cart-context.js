import React from "react";

const CartContext = React.createContext({
  items: [],
  addItems: (item) => {},
  removeItems: (id) => {},
});

export default CartContext;
