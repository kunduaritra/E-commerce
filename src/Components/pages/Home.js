import React, { useState, useEffect, useCallback } from "react";
import { Button, Container, Row, Col, Form } from "react-bootstrap";
import { MdDelete } from "react-icons/md";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [retryCount, setRetryCount] = useState(0);
  const [retryTimeout, setRetryTimeout] = useState(null);
  const maxRetryCount = 2;

  const fetchMovieHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://react-project-ecommerce-4005b-default-rtdb.firebaseio.com/movies.json"
      );
      if (!response.ok) {
        throw new Error("Something went wrong... Retrying");
      }
      const data = await response.json();

      const loadedMovies = [];

      for (const key in data) {
        loadedMovies.push({
          id: key,
          title: data[key].title,
          openingCrawl: data[key].openingText,
          releaseDate: data[key].relsDate,
        });
      }
      setMovies(loadedMovies);
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
  }, [retryCount]);

  const cancelRetry = () => {
    if (retryTimeout) {
      clearTimeout(retryTimeout);
      setRetryCount(0);
      setError(null);
    }
  };

  useEffect(() => {
    fetchMovieHandler();
  }, [fetchMovieHandler]);

  const removeMovieHandler = async (movieId) => {
    console.log("clicked remove");
    const url = `https://react-project-ecommerce-4005b-default-rtdb.firebaseio.com/movies/${movieId}.json`;
    try {
      const response = await fetch(url, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Failed to delete the movie!");
      }
      setMovies((prevMovies) =>
        prevMovies.filter((movie) => movie.id !== movieId)
      );
    } catch (error) {
      console.error(error);
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
        <Col md="6">{movieData.openingCrawl}</Col>
        <Col>
          <Button variant="primary" md="1">
            BUY TICKETS
          </Button>
          &nbsp;
          <Button
            variant="danger"
            md="1"
            onClick={() => removeMovieHandler(movieData.id)}
          >
            <MdDelete />
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
  const addNewMovieHandler = async (event) => {
    event.preventDefault();

    const title = event.target.formTitle.value;
    const openingText = event.target.formOpeningText.value;
    const relsDate = event.target.formRelsDate.value;

    const newMovieObj = {
      title: title,
      openingText: openingText,
      relsDate: relsDate,
    };

    const response = await fetch(
      "https://react-project-ecommerce-4005b-default-rtdb.firebaseio.com/movies.json",
      {
        method: "POST",
        body: JSON.stringify(newMovieObj),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    setMovies((prevMovies) => [...prevMovies, newMovieObj]);
    event.target.formTitle.value = "";
    event.target.formOpeningText.value = "";
    event.target.formRelsDate.value = "";
    console.log(data);
  };

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
      <Container className="mt-4">
        <Form onSubmit={addNewMovieHandler}>
          <Form.Group className="mb-3" controlId="formTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              name="formTitle"
              placeholder="Enter Title"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formOpeningText">
            <Form.Label>Opening Text</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              name="formOpeningText"
              placeholder="Enter Opening Text"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formReleaseDate">
            <Form.Label>Release Date</Form.Label>
            <Form.Control
              type="date"
              name="formRelsDate"
              placeholder="Enter Release Date"
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Add Movie
          </Button>
        </Form>
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
