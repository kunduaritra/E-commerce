import Container from "react-bootstrap/Container";
import Navigation from "./Components/Nav/Navigation";
import Product from "./Components/Product";
import Footer from "./Components/Footer/Footer";
import CartProvider from "./store/CartProvider";

let App = () => {
  return (
    <CartProvider>
      <Navigation />
      <Container
        fluid
        style={{
          backgroundColor: "grey",
          height: "100px",
          width: "100%vw",
          color: "white",
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        <h1 className="display-1">The Generics</h1>
      </Container>
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
      <Footer />
    </CartProvider>
  );
};

export default App;
