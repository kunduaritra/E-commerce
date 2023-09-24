import { useContext, useState } from "react";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import Cart from "../Cart/Cart";
import CartContext from "../../store/cart-context";

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
              <Nav.Link href="#home" className="me-5">
                Home
              </Nav.Link>
              <Nav.Link href="#store" className="me-5">
                Store
              </Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
