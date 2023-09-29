import { useState, useEffect } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [retryCount, setRetryCount] = useState(0);
  const [retryTimeout, setRetryTimeout] = useState(null);
  const maxRetryCount = 2;

  async function fetchMovieHandler() {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch("https://swapi.dev/api/fils/");
      if (!response.ok) {
        throw new Error("Something went wrong... Retrying");
      }
      const data = await response.json();
      const transformedMovies = data.results.map((movieData) => ({
        id: movieData.episode_id,
        title: movieData.title,
        openingCrawl: movieData.opening_crawl,
        releaseDate: movieData.release_date,
      }));
      setMovies(transformedMovies);
    } catch (error) {
      if (retryCount < maxRetryCount) {
        setRetryCount((prevCount) => prevCount + 1);
        setRetryTimeout(
          setTimeout(() => {
            fetchMovieHandler();
          }, 5000)
        );
      } else {
        setError(error.message);
        setIsLoading(false);
      }
    }
    setIsLoading(false);
  }

  const cancelRetry = () => {
    if (retryTimeout) {
      clearTimeout(retryTimeout);
      setRetryCount(0);
      setError(null);
    }
  };

  let content = <p className="text-center">No Records.</p>;
  if (movies.length > 0) {
    content = movies.map((movieData) => (
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
    ));
  }
  if (error) {
    content = (
      <div className="text-center">
        <p>{error}</p>
        <Button variant="danger" onClick={cancelRetry}>
          Cancel Retry
        </Button>
      </div>
    );
  }
  if (isLoading) {
    content = (
      <p className="text-center">
        <i>Loading...</i>
      </p>
    );
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
        <Button size="lg" className="btn square-button">
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
      <Container>{content}</Container>
    </>
  );
};

export default HomePage;
