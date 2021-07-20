import React, { useState } from "react";
// import gsap, { Power2 } from "gsap";
import Axios from "axios";
import { baseUrl } from "./Components/Landing/Utils/Baseurl";
import { Renderindex } from "./Components/Landing/Index";

const Rendermastercomponent = () => {
  /* state variable declaration */
  const [inputValue, setInputValue] = useState();
  const [showMovieIcon, setShowMovieIcon] = useState(true);
  const [fetchMovies, setFetchMovies] = useState([]);
  const [showError, setShowError] = useState(false);
  const [showMovieRating, setShowMovieRating] = useState([]);
  const [show, setShow] = useState(false);
  const [showMoviePoster, setShowMoviePoster] = useState();
  const [showMovieTitle, setShowMovieTitle] = useState("");
  const [movieRating, setMovieRating] = useState([]);
  const [genre, setGenre] = useState("");
  const [movieRuntime, setMovieRuntime] = useState();
  const [actors, setGetActors] = useState("");
  const [moviePlot, setGetMoviePlot] = useState("");
  const [movieDirector, setMovieDirector] = useState("");
  const [movieRelease, setMovieReleaseDate] = useState();
  const [loader, setLoader] = useState(false);
  const [movieError, setMovieError] = useState(false);
  const apiKey = "b6c6ed1f";

  function handleInputValue(getInputValue) {
    setInputValue(getInputValue);
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    setShowError(false);
    setMovieError(false);
    /* request for movie list */
    Axios.get(baseUrl + `?s=${inputValue}&apikey=${apiKey}`)
      .then((response) => {
        setFetchMovies(response.data.Search);
        setShowMovieIcon(false);
        setMovieError(true);
      })
      .catch((error) => {
        setShowError(true);
        setShowMovieIcon(false);
        setMovieError(false);
      });
  }
  const handleClose = () => {
    setShow(false);
    setMovieRating([]);
    setGenre("");
    setMovieRuntime("");
    setGetActors("");
    setGetMoviePlot("");
    setMovieDirector("");
    setMovieReleaseDate("");
  };
  const handleShow = (getPoster, getTitle) => {
    setShow(true);
    setShowMoviePoster(getPoster);
    setShowMovieTitle(getTitle);
    setLoader(true);
    /* request for movie ratings */
    Axios.get(baseUrl + `?t=${getTitle}&apikey=b6c6ed1f`)
      .then((response) => {
        setMovieRating(response.data.Ratings[0].Value);
        setGenre(response.data.Genre);
        setMovieRuntime(response.data.Runtime);
        setGetActors(response.data.Actors);
        setGetMoviePlot(response.data.Plot);
        setMovieDirector(response.data.Director);
        setMovieReleaseDate(response.data.Released);
        setLoader(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Renderindex
      handleInputValue={handleInputValue}
      handleFormSubmit={handleFormSubmit}
      showMovieIcon={showMovieIcon}
      fetchMovies={fetchMovies}
      showError={showError}
      showMovieRating={showMovieRating}
      show={show}
      handleClose={handleClose}
      handleShow={handleShow}
      showMoviePoster={showMoviePoster}
      showMovieTitle={showMovieTitle}
      movieRating={movieRating}
      genre={genre}
      movieRuntime={movieRuntime}
      actors={actors}
      moviePlot={moviePlot}
      movieDirector={movieDirector}
      movieRelease={movieRelease}
      loader={loader}
      movieError={movieError}
    />
  );
};

export default Rendermastercomponent;
