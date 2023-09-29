import { useState } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  async function fetchMovieHandler() {
    setIsLoading(true);
    try {
      const response = await fetch("https://swapi.dev/api/films/");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      const transformedMovies = data.results.map((movieData) => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          openingCrawl: movieData.opening_crawl,
          releaseDate: movieData.release_date,
        };
      });
      setMovies(transformedMovies);
      setIsLoading(false);
    } catch (error) {
      console.log("error--> ", error);
    }
  }

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
        <Button size="lg" class="btn square-button">
          Get our Latest Album
        </Button>
        <Container>
          <Button
            className="mt-4 rounded-circle btn-lg"
            onClick={fetchMovieHandler}
          >
            Fetch
          </Button>
        </Container>
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
        {isLoading && (
          <h5 className="text-center">
            <i>Loading...</i>
          </h5>
        )}
        {!isLoading && movies.length === 0 && (
          <p className="text-center">No Records.</p>
        )}
        {!isLoading &&
          movies.length > 0 &&
          movies.map((movieData) => (
            <Row
              className="mt-0"
              style={{
                borderBottom: "1px solid grey",
                padding: "10px",
              }}
              key={movieData.id}
            >
              <Col md="2">{movieData.title}</Col>
              <Col md="1">{movieData.releaseDate}</Col>
              <Col md="7">{movieData.openingCrawl}</Col>
              <Col>
                <Button variant="primary" md="1">
                  BUY TICKETS
                </Button>
              </Col>
            </Row>
          ))}
      </Container>
    </>
  );
};

export default HomePage;
