import React, { useState } from "react";
import {
  Form,
  FloatingLabel,
  Container,
  Row,
  Col,
  Button,
} from "react-bootstrap";
import { TiTick } from "react-icons/ti";

const ContactUsPage = () => {
  const [status, setStatus] = useState(false);

  const contactUsFormHandler = async (event) => {
    event.preventDefault();

    const firstName = event.target.fname.value;
    const lastName = event.target.lname.value;
    const email = event.target.email.value;
    const contactNo = event.target.contactno.value;

    const contactFormObj = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      contactNo: contactNo,
    };

    const response = await fetch(
      "https://react-project-ecommerce-4005b-default-rtdb.firebaseio.com/contactDetails.json",
      {
        method: "POST",
        body: JSON.stringify(contactFormObj),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = await response.json();
    console.log(data);

    setStatus(true);
    event.target.fname.value = "";
    event.target.lname.value = "";
    event.target.email.value = "";
    event.target.contactno.value = "";
  };

  return (
    <>
      <Container className="mt-3 mb-5">
        <Form onSubmit={contactUsFormHandler}>
          <h3 className="mb-4">Conatct Us</h3>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridFName">
              <FloatingLabel controlId="floatingInput" label="First Name">
                <Form.Control
                  type="text"
                  name="fname"
                  placeholder="First Name"
                />
              </FloatingLabel>
            </Form.Group>
            <Form.Group as={Col} controlId="formGridLName">
              <FloatingLabel controlId="floatingInput" label="Last Name">
                <Form.Control
                  type="text"
                  name="lname"
                  placeholder="Last Name"
                />
              </FloatingLabel>
            </Form.Group>
          </Row>
          <FloatingLabel
            controlId="floatingInput"
            label="Email address"
            className="mb-3"
          >
            <Form.Control
              type="email"
              name="email"
              placeholder="name@example.com"
            />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingContactNo"
            label="Contact No."
            className="mb-2"
          >
            <Form.Control
              type="number"
              name="contactno"
              placeholder="Contact No."
            />
          </FloatingLabel>
          <Button variant="primary" type="submit">
            Send
          </Button>
        </Form>
        {status && (
          <h4 className="mt-4">
            Details sent. <TiTick />
          </h4>
        )}
      </Container>
    </>
  );
};

export default ContactUsPage;
