import { useContext, useState } from "react";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import Cart from "../Cart/Cart";
import CartContext from "../../store/cart-context";
import { NavLink } from "react-router-dom";
import "./Navigation.css";

const Navigation = (props) => {
  const cartCntx = useContext(CartContext);
  const [isCartVisible, setIsCartVisible] = useState(false);

  const toggleCart = () => {
    setIsCartVisible(!isCartVisible);
  };

  return (
    <>
      <Navbar bg="dark" expand="sm" variant="dark">
        <Container>
          <Button
            variant="outline-primary"
            className="me-3 md-auto text-white"
            onClick={toggleCart}
          >
            Cart
            <sup className="text-white">{cartCntx.items.length}</sup>
            {console.log(cartCntx)}
          </Button>
          {isCartVisible && <Cart />}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <NavLink
                to="/home"
                activeClassName="active"
                className="me-5 hide nav-link"
              >
                Home
              </NavLink>
              <NavLink
                to="/"
                activeClassName="active"
                className="me-5 hide nav-link"
              >
                Store
              </NavLink>
              <NavLink
                to="/about"
                activeClassName="active"
                className="me-5 hide nav-link"
              >
                About
              </NavLink>
              <NavLink
                to="/contactus"
                activeClassName="active"
                className="me-5 hide nav-link"
              >
                Contact Us
              </NavLink>
              <NavLink
                to="/products"
                activeClassName="active"
                className="hide nav-link"
              >
                Products
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
