import Container from "react-bootstrap/Container";
import Product from "../Product";

const StorePage = () => {
  return (
    <>
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
    </>
  );
};

export default StorePage;
