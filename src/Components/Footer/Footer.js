import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import yLOGO from "../../asset/yLOGO.jpg";

const Footer = () => {
  return (
    <Container fluid style={{ backgroundColor: "#56CCF2", height: "150px" }}>
      <Row className="align-items-center">
        <Col xs={8} md="auto">
          <p style={{ color: "white", fontSize: "80px", fontWeight: "bold" }}>
            The Generics
          </p>
        </Col>
        <Col xs={4} md="auto">
          <img src={yLOGO} alt="Logo" style={{ maxWidth: "50px" }} />
        </Col>
        <Col xs={4} md="auto">
          <img src={yLOGO} alt="Logo" style={{ maxWidth: "50px" }} />
        </Col>
        <Col xs={4} md="auto">
          <a href="https://www.youtube.com">
            <img src={yLOGO} alt="Logo" style={{ maxWidth: "50px" }} />
          </a>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
