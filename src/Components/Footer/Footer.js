import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <Container fluid style={{ backgroundColor: "#56CCF2", height: "150px" }}>
      <Row className="align-items-center">
        <Col xs={8}>
          <p style={{ color: "white", fontSize: "80px", fontWeight: "bold" }}>
            The Generics
          </p>
        </Col>
        <Col xs={4} className="text-right">
          <img
            src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.iconpacks.net%2Ffree-icon%2Fyoutube-logo-2431.html&psig=AOvVaw045SNXoZ7AVpRMu0axVyQq&ust=1695404044767000&source=images&cd=vfe&opi=89978449&ved=0CA4QjRxqFwoTCKDc4a-evIEDFQAAAAAdAAAAABAI"
            alt="Logo"
            style={{ maxWidth: "50px" }}
          />
        </Col>
        <Col xs={4} className="text-right">
          <img
            src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vecteezy.com%2Fpng%2F22100989-spotify-logo-transparent-png&psig=AOvVaw3DsuhSvT3UyaAjE_SoHuPG&ust=1695404015775000&source=images&cd=vfe&opi=89978449&ved=0CA4QjRxqFwoTCKikgaKevIEDFQAAAAAdAAAAABAI"
            alt="Logo"
            style={{ maxWidth: "50px" }}
          />
        </Col>
        <Col xs={4} className="text-right">
          <img src="#" alt="Logo" style={{ maxWidth: "50px" }} />
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
