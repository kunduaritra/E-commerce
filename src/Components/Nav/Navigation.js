import { useContext, useState } from "react";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import Cart from "../Cart/Cart";
import CartContext from "../../store/cart-context";
import { Link, NavLink } from "react-router-dom";
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
              <Link
                to="/"
                activeClassName="active"
                className="me-5 hide nav-link"
              >
                Store
              </Link>
              <Link
                to="/about"
                activeClassName="active"
                className="me-5 hide nav-link"
              >
                About
              </Link>
              <Link
                to="/contactus"
                activeClassName="active"
                className="hide nav-link"
              >
                Contact Us
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
