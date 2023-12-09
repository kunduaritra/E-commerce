import { Outlet } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navigation from "../Nav/Navigation";
import Footer from "../Footer/Footer";

const RootLayout = () => {
  return (
    <>
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
      <Outlet />
      <Footer />
    </>
  );
};

export default RootLayout;
