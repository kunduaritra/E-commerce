import { Container, Row, Col, Card, Button } from "react-bootstrap";
import classes from "./Products.module.css";
import { useContext } from "react";
import CartContext from "../store/cart-context";
import { Link } from "react-router-dom";

const Product = () => {
  const cartCntx = useContext(CartContext);
  const productsArr = [
    {
      title: "Album 1",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },
    {
      title: "Album 2",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },
    {
      title: "Album 3",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },
    {
      title: "Album 4",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];
  const addItemToCarthandler = (item) => {
    cartCntx.addItem(item);
    console.log("len ", cartCntx.items.length);
  };

  return (
    <Container className="mt-5">
      {productsArr.map(
        (item, index) =>
          index % 2 === 0 && (
            <Row key={index}>
              {productsArr.slice(index, index + 2).map((product, i) => (
                <Col key={i} className="mt-3">
                  <Card key={i} className={`mt-3 ${classes.styleborder1}`}>
                    <Card.Body className="d-flex flex-column align-items-center">
                      <h5 className="text-center">{product.title}</h5>
                      <Link
                        to={`products/${product.title}/${
                          product.price
                        }/${encodeURIComponent(product.imageUrl)}`}
                      >
                        <Card.Img
                          variant="top"
                          src={product.imageUrl}
                          style={{ width: "200px", height: "200px" }}
                        />
                      </Link>
                      <div className="mt-2" style={{ display: "flex" }}>
                        <p className="mb-0 me-5">₹{product.price}</p>
                        <Button
                          variant="primary"
                          className="btn-sm"
                          onClick={() => addItemToCarthandler(product)}
                        >
                          ADD TO CART
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          )
      )}
    </Container>
  );
};

export default Product;
