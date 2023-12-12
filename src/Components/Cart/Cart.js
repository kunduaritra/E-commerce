// import React, { useContext, useState, useEffect } from "react";
// import { Container, Row, Col, Button } from "react-bootstrap";
// import CartContext from "../../store/cart-context";
// import "./Cart.css";

// function Cart() {
//   const cartCntx = useContext(CartContext);
//   const [isCartVisible, setIsCartVisible] = useState(true);

//   const [cartvalue, setCartValue] = useState({});

//   useEffect(() => {
//     fetchCartData();
//   }, []);

//   const fetchCartData = async () => {
//     try {
//       const email = localStorage.getItem("LoggedUser");
//       const updatedEmail = email.replace(/[@.]/g, "");
//       const response = await fetch(
//         `https://crudcrud.com/api/89ea3b4aa28a44979c54724e0df77cf8/cart${updatedEmail}`
//       );
//       const data = await response.json();
//       setCartValue(data);
//     } catch (error) {
//       console.error("Error fetching cart data:", error);
//     }
//   };

//   const toggleCart = (event) => {
//     setIsCartVisible(!isCartVisible);
//   };

//   return (
//     <>
//       {console.log("in cart ", cartCntx)}
//       {isCartVisible && (
//         <Container className="cart-container mt-5">
//           <div className="cart">
//             <Row>
//               <Col className="text-left">
//                 <h3>Items</h3>
//               </Col>
//               <Col className="text-right">
//                 <Button onClick={toggleCart} variant="danger">
//                   X
//                 </Button>
//               </Col>
//             </Row>
//             <hr />
//             <h3 className="text-right">
//               Grand Total: <small>₹100</small>
//             </h3>
//             {cartvalue.items &&
//               cartvalue.items.map((item, index) => (
//                 <div key={index} className="cart-item">
//                   <Row className="d-flex justify-content-center align-items-center mt-3 colStyle">
//                     <Col>
//                       <img
//                         src={item.imageUrl}
//                         alt={item.title}
//                         className="cart-item-image"
//                         width="50px"
//                         height="50px"
//                       />
//                     </Col>
//                     <Col>
//                       <div className="cart-item-details">
//                         <p>Price: ₹{item.price}</p>
//                       </div>
//                     </Col>
//                     <Col>
//                       <div className="cart-item-details">
//                         <p>Quantity: {item.quantity}</p>
//                       </div>
//                     </Col>
//                     <Col>
//                       <div className="cart-item-details">
//                         <Button
//                           className="btn-sm"
//                           variant="outline-danger"
//                           onClick={() => {}}
//                         >
//                           -
//                         </Button>
//                       </div>
//                     </Col>
//                   </Row>
//                 </div>
//               ))}
//           </div>
//         </Container>
//       )}
//     </>
//   );
// }

// export default Cart;
import React, { useContext, useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import CartContext from "../../store/cart-context";
import "./Cart.css";

function Cart() {
  const cartCntx = useContext(CartContext);
  const [isCartVisible, setIsCartVisible] = useState(true);

  const [cartvalue, setCartValue] = useState({});

  useEffect(() => {
    fetchCartData();
  }, []);

  const fetchCartData = async () => {
    try {
      const email = localStorage.getItem("LoggedUser");
      const updatedEmail = email.replace(/[@.]/g, "");
      const response = await fetch(
        `https://crudcrud.com/api/89ea3b4aa28a44979c54724e0df77cf8/cart${updatedEmail}`
      );
      const data = await response.json();
      if (typeof data === "string") {
        const parsedData = JSON.parse(data);
        console.log("Parsed cart data:", parsedData);
        setCartValue(parsedData);
      } else {
        console.log("Cart data:", data);
        setCartValue(data);
      }
      // setCartValue(data);
    } catch (error) {
      console.error("Error fetching cart data:", error);
    }
  };

  const toggleCart = (event) => {
    setIsCartVisible(!isCartVisible);
  };

  return (
    <>
      {console.log("in cart ", cartCntx)}
      {isCartVisible && (
        <Container className="cart-container mt-5">
          <div className="cart">
            <Row>
              <Col className="text-left">
                <h3>Items</h3>
              </Col>
              <Col className="text-right">
                <Button onClick={toggleCart} variant="danger">
                  X
                </Button>
              </Col>
            </Row>
            <hr />
            <h3 className="text-right">
              Grand Total: <small>₹100</small>
            </h3>
            {cartvalue.items &&
              cartvalue.items.map((item, index) => (
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
                          onClick={() => {}}
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
