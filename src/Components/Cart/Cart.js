import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./Cart.css";

function Cart() {
  const [isCartVisible, setIsCartVisible] = useState(true);
  const [cartElements, setCartElements] = useState([
    {
      title: "Colors",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
      quantity: 2,
    },
    {
      title: "Black and white Colors",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
      quantity: 3,
    },
    {
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
      quantity: 1,
    },
  ]);

  const toggleCart = () => {
    setIsCartVisible(false);
  };

  const removeElement = (index) => {
    setCartElements((prevCartElements) =>
      prevCartElements.filter((_, i) => i !== index)
    );
  };

  return (
    <>
      {isCartVisible && (
        <Container className="cart-container mt-5">
          <div className="cart">
            <Row>
              <Col>
                <h3>Items</h3>
              </Col>
              <Col>
                <Button onClick={toggleCart} variant="danger">
                  X
                </Button>
              </Col>
            </Row>
            <hr />
            {cartElements.map((item, index) => (
              <div key={index} className="cart-item">
                <Row className="d-flex justify-content-center align-items-center mt-3">
                  <Col>
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="cart-item-image"
                      width="50px"
                      height="50px"
                    />
                  </Col>
                  <Col>
                    <div className="cart-item-details">
                      <p>Price: ₹{item.price}</p>
                    </div>
                  </Col>
                  <Col>
                    <div className="cart-item-details">
                      <p>Quantity: {item.quantity}</p>
                    </div>
                  </Col>
                  <Col>
                    <div className="cart-item-details">
                      <Button
                        className="btn-sm"
                        variant="outline-danger"
                        onClick={() => removeElement(index)} // Pass a function to onClick
                      >
                        -
                      </Button>
                    </div>
                  </Col>
                </Row>
              </div>
            ))}
          </div>
        </Container>
      )}
    </>
  );
}

export default Cart;
