import React, { useEffect, useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const url =
    "https://react-project-ecommerce-4005b-default-rtdb.firebaseio.com";
  const [cartElements, setCartElements] = useState([]);

  const fetchItemsFromServer = async () => {
    const email = localStorage.getItem("LoggedUser");

    if (!email) {
      console.error("The 'LoggedUser' key does not exist in the localStorage.");
      return;
    }

    const updatedEmail = email.replace(/[@.]/g, "");
    const response = await fetch(`${url}/cart/cart${updatedEmail}.json`);
    const data = await response.json();
    if (data) {
      const itemArray = Object.entries(data).map(([id, item]) => ({
        id,
        ...item,
      }));
      setCartElements(itemArray);
    }
  };

  useEffect(() => {
    fetchItemsFromServer();
  }, []);

  const addItemsToCartHandler = async (item) => {
    const email = localStorage.getItem("LoggedUser");
    const updatedEmail = email.replace(/[@.]/g, "");

    fetch(`${url}/cart/cart${updatedEmail}.json`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...item, quantity: 1 }),
    });

    fetchItemsFromServer();
  };

  const removeItemsFromCartHandler = async (id) => {
    try {
      const email = localStorage.getItem("LoggedUser");
      const updatedEmail = email.replace(/[@.]/g, "");

      const response = await fetch(
        `${url}/cart/cart${updatedEmail}/${id}.json`,
        {
          method: "DELETE",
        }
      );
      if (!response.ok) {
        throw new Error("went wrong");
      }
      fetchItemsFromServer();
    } catch (err) {
      alert(err);
    }
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
