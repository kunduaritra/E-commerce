import { Button, Container, Row, Col } from "react-bootstrap";
const HomePage = () => {
  const events = [
    {
      date: "JUL 16",
      location: "DETROIT, MI",
      venue: "DTE ENERGY MUSIC THEATRE",
      ticketLink: "BUY TICKETS",
    },
    {
      date: "JUL 19",
      location: "TORONTO, ON",
      venue: "BUDWEISER STAGE",
      ticketLink: "BUY TICKETS",
    },
    {
      date: "JUL 22",
      location: "BRISTOW, VA",
      venue: "JIGGY LUBE LIVE",
      ticketLink: "BUY TICKETS",
    },
    {
      date: "JUL 29",
      location: "PHOENIX, AZ",
      venue: "AK-CHIN PAVILION",
      ticketLink: "BUY TICKETS",
    },
    {
      date: "AUG 2",
      location: "LAS VEGAS, NV",
      venue: "T-MOBILE ARENA",
      ticketLink: "BUY TICKETS",
    },
    {
      date: "AUG 7",
      location: "CONCORD, CA",
      venue: "CONCORD PAVILION",
      ticketLink: "BUY TICKETS",
    },
  ];
  return (
    <>
      <Container
        fluid
        style={{
          backgroundColor: "grey",
          height: "200px",
          width: "100%vw",
          color: "white",
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        <Button variant="outline-info" size="lg">
          Get our Latest Album
        </Button>
      </Container>
      <Container
        fluid
        style={{
          height: "55px",
          width: "100%vw",
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        <h1 className="mt-3">TOURS</h1>
      </Container>
      <Container>
        {events.map((item) => (
          <Row
            className="mt-0"
            style={{
              borderBottom: "1px solid grey",
              padding: "10px",
            }}
          >
            <Col>{item.date}</Col>
            <Col>{item.location}</Col>
            <Col>{item.venue}</Col>
            <Col>
              <Button variant="primary">BUY TICKETS</Button>
            </Col>
          </Row>
        ))}
      </Container>
    </>
  );
};

export default HomePage;
