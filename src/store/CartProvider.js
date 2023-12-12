import React, { useEffect, useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const url = "https://crudcrud.com/api/89ea3b4aa28a44979c54724e0df77cf8";
  const [cartElements, setCartElements] = useState([]);

  const fetchItemsFromServer = async () => {
    const email = localStorage.getItem("LoggedUser");

    if (!email) {
      console.error("The 'LoggedUser' key does not exist in the localStorage.");
      return;
    }

    const updatedEmail = email.replace(/[@.]/g, "");
    const response = await fetch(`${url}/cart${updatedEmail}`);
    const data = await response.json();
    setCartElements(data);
  };

  useEffect(() => {
    fetchItemsFromServer();
  }, []);

  const addItemsToCartHandler = async (item) => {
    const email = localStorage.getItem("LoggedUser");
    const updatedEmail = email.replace(/[@.]/g, "");

    fetch(`${url}/cart${updatedEmail}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...item, quantity: 1 }),
    });

    fetchItemsFromServer();
  };

  const removeItemsFromCartHandler = async (id) => {
    fetch(`${url}/cart${id}`, {
      method: "DELETE",
    });

    fetchItemsFromServer();
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
