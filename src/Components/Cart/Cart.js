import React, { useState, useContext } from "react";
import { Row, Col, Button } from "react-bootstrap";
import Offcanvas from "react-bootstrap/Offcanvas";
import CartContext from "../../store/cart-context";

const Cart = () => {
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);
  const cartCntx = useContext(CartContext);

  return (
    <>
      {console.log(cartCntx)}
      {show && (
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Items</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <hr />
            <h3>
              Grand Total: <small>₹100</small>
            </h3>
            {cartCntx.items.map((item, index) => (
              <div key={index} className="cart-item">
                <Row className="d-flex justify-content-center align-items-center mt-3 colStyle">
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
                        onClick={() => {
                          cartCntx.removeItem(item._id);
                        }}
                      >
                        -
                      </Button>
                    </div>
                  </Col>
                </Row>
              </div>
            ))}
          </Offcanvas.Body>
        </Offcanvas>
      )}
    </>
  );
};

export default Cart;
