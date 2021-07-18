import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Renderappheader } from "./Header";
import movieListIcon from "../../assets/images/movie-reel.png";

export const Renderindex = (props) => {
  return (
    <>
      <Renderappheader
        handleInputValue={props.handleInputValue}
        handleFormSubmit={props.handleFormSubmit}
      />
      <section>
        <div className="movie-grid-wrapper">
          <Container>
            {props.showMovieIcon && (
              <img src={movieListIcon} className="movie-list-icon" />
            )}
            <Row>
              {props.fetchMovies.map((getMovies) => {
                return (
                  <>
                    <Col md={3}>
                      <div className="movie-wrapper">
                        <img src={getMovies.Poster} className="img-fluid" />
                        <div className="movie-content">
                          <h1>{getMovies.Title}</h1>
                          <p>
                            Year:<span>{getMovies.Year}</span>
                          </p>
                        </div>
                      </div>
                      <div className="space-between"></div>
                    </Col>
                  </>
                );
              })}
            </Row>
          </Container>
        </div>
      </section>
    </>
  );
};
