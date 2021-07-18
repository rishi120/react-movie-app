import React, { useState, useEffect, useRef } from "react";
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

  function handleInputValue(getInputValue) {
    setInputValue(getInputValue);
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    setShowError(false);
    /* request for movie list */
    Axios.get(baseUrl + `?s=${inputValue}&apikey=b6c6ed1f`)
      .then((response) => {
        setFetchMovies(response.data.Search);
        setShowMovieIcon(false);
      })
      .catch((error) => {
        setShowError(true);
        console.log(error);
      });
    /* request for movie ratings */
    Axios.get(baseUrl + `?t=${inputValue}&apikey=b6c6ed1f`)
      .then((response) => {
        setShowMovieRating(response.data.Ratings);
        setShowMovieIcon(false);
      })
      .catch((error) => {
        setShowError(true);
        console.log(error);
      });
  }

  // function handleClick(getId) {
  //   console.log(getId);
  // }
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Renderindex
      handleInputValue={handleInputValue}
      handleFormSubmit={handleFormSubmit}
      showMovieIcon={showMovieIcon}
      fetchMovies={fetchMovies}
      showError={showError}
      showMovieRating={showMovieRating}
      // handleClick={handleClick}
      show={show}
      handleClose={handleClose}
      handleShow={handleShow}
    />
  );
};

export default Rendermastercomponent;
