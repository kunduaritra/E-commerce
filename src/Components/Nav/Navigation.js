import { useContext, useState } from "react";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import Cart from "../Cart/Cart";
import CartContext from "../../store/cart-context";
import { NavLink, useNavigate } from "react-router-dom";
import "./Navigation.css";
import AuthContext from "../../store/auth-context";

const Navigation = (props) => {
  const cartCntx = useContext(CartContext);
  const [isCartVisible, setIsCartVisible] = useState(false);
  const authCntx = useContext(AuthContext);
  const isLoggedIn = authCntx.isLoggedIn;
  const navigate = useNavigate();

  const toggleCart = () => {
    setIsCartVisible(!isCartVisible);
  };

  const logoutHandler = () => {
    authCntx.logout();
    navigate("/auth");
  };

  let totalQuantity = 0;
  cartCntx.items.forEach((elem) => {
    totalQuantity = elem.quantity + totalQuantity;
  });

  return (
    <>
      <Navbar bg="dark" expand="sm" variant="dark">
        <Container>
          {isLoggedIn && (
            <Button
              variant="outline-primary"
              className="me-3 md-auto text-white"
              onClick={toggleCart}
            >
              Cart
              <sup className="text-white">{totalQuantity}</sup>
            </Button>
          )}
          {isCartVisible && <Cart />}
          {console.log(isCartVisible)}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              {isLoggedIn && (
                <NavLink
                  to="/home"
                  activeclassname="active"
                  className="me-5 hide nav-link"
                >
                  Home
                </NavLink>
              )}
              {isLoggedIn && (
                <NavLink
                  to="/"
                  activeclassname="active"
                  className="me-5 hide nav-link"
                >
                  Store
                </NavLink>
              )}
              <NavLink
                to="/about"
                activeclassname="active"
                className="me-5 hide nav-link"
              >
                About
              </NavLink>
              {!isLoggedIn && (
                <NavLink
                  to="/auth"
                  activeclassname="active"
                  className="me-5 hide nav-link"
                >
                  Login
                </NavLink>
              )}
              {isLoggedIn && (
                <button onClick={logoutHandler} className="me-5 hide nav-link">
                  Logout
                </button>
              )}
              <NavLink
                to="/contactus"
                activeclassname="active"
                className="me-5 hide nav-link"
              >
                Contact Us
              </NavLink>
              {isLoggedIn && (
                <NavLink
                  to="/products"
                  activeclassname="active"
                  className="hide nav-link"
                >
                  Products
                </NavLink>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
