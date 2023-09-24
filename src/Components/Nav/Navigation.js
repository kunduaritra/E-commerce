import { useContext, useState } from "react";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import Cart from "../Cart/Cart";
import CartContext from "../../store/cart-context";
import { Link } from "react-router-dom";

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
              <Link to="/" className="me-5">
                Home
              </Link>
              <Nav.Link to="#store" className="me-5">
                Store
              </Nav.Link>
              <Link to="/about">About</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
