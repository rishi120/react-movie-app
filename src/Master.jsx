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

  function handleInputValue(getInputValue) {
    setInputValue(getInputValue);
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    Axios.get(baseUrl + `?s=${inputValue}&apikey=b6c6ed1f`)
      .then((response) => {
        setFetchMovies(response.data.Search);
        setShowMovieIcon(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <Renderindex
      handleInputValue={handleInputValue}
      handleFormSubmit={handleFormSubmit}
      showMovieIcon={showMovieIcon}
      fetchMovies={fetchMovies}
    />
  );
};

export default Rendermastercomponent;
