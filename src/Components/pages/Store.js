import Container from "react-bootstrap/Container";
import Product from "../Product";
import CartProvider from "../../store/CartProvider";

const StorePage = () => {
  return (
    <CartProvider>
      <Container
        fluid
        style={{
          height: "20px",
          width: "100%vw",
          // color: "white",
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        <h1 className="mt-3 mb-20">Music</h1>
      </Container>
      <Product />
      {/* <Footer /> */}
    </CartProvider>
  );
};

export default StorePage;
