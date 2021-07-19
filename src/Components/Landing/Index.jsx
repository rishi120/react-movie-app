import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Renderappheader } from "./Header";
import movieListIcon from "../../assets/images/movie-reel.png";
import Rendermodal from "./Modal";

export const Renderindex = (props) => {
  return (
    <>
      <Renderappheader
        handleInputValue={props.handleInputValue}
        handleFormSubmit={props.handleFormSubmit}
      />
      <section>
        <Rendermodal
          show={props.show}
          handleClose={props.handleClose}
          showMoviePoster={props.showMoviePoster}
          showMovieTitle={props.showMovieTitle}
          movieRating={props.movieRating}
          genre={props.genre}
          movieRuntime={props.movieRuntime}
          actors={props.actors}
          moviePlot={props.moviePlot}
          movieDirector={props.movieDirector}
        />
        <div className="movie-grid-wrapper">
          <Container>
            {props.showMovieIcon && (
              <img src={movieListIcon} className="movie-list-icon" />
            )}
            {props.showError && <p>Error!</p>}
            <Row>
              {props.fetchMovies &&
                props.fetchMovies.map((getMovies, index) => (
                  <>
                    <Col md={3} key={index}>
                      <div
                        className="movie-wrapper"
                        onClick={() =>
                          props.handleShow(getMovies.Poster, getMovies.Title)
                        }
                      >
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
                ))}
            </Row>
          </Container>
        </div>
      </section>
    </>
  );
};
