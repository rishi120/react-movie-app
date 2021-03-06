import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Renderappheader } from "./Header";
import movieListIcon from "../../assets/images/movie-reel.png";
import noPoster from "../../assets/images/no-poster-available.jpg";
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
          movieRelease={props.movieRelease}
          loader={props.loader}
        />
        <div className="movie-grid-wrapper">
          <Container>
            {props.showMovieIcon && (
              <img src={movieListIcon} className="movie-list-icon" />
            )}
            {props.showError && (
              <p className="data-error text-danger">
                Something went wrong. Please try again!
              </p>
            )}
            {props.movieListLoader && (
              <p className="data-error text-success">Loading...</p>
            )}
            <Row>
              {props.fetchMovies?.length
                ? props.fetchMovies.map((getMovies, index) => (
                    <>
                      <Col md={3} key={index} className="col-animations">
                        <div
                          className="movie-wrapper"
                          onClick={() =>
                            props.handleShow(getMovies.Poster, getMovies.Title)
                          }
                        >
                          {getMovies.Poster === "N/A" ? (
                            <img src={noPoster} className="img-fluid" />
                          ) : (
                            <img src={getMovies.Poster} className="img-fluid" />
                          )}
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
                  ))
                : props.movieError && (
                    <p className="data-error text-danger w-100">
                      No matching movies found
                    </p>
                  )}
            </Row>
          </Container>
        </div>
      </section>
    </>
  );
};
