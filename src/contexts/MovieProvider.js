import axios from "axios";
import React, { useState, useEffect } from "react";
import { MovieContext } from "./MovieContext";

export default function MovieProvider({ children }) {
  const [moviesData, setMoviesData] = useState([]);
  const apiURL = 'http://localhost:3333'

  const movies = async() => {
    try {
      const moviesResponse = await axios.get(`${apiURL}/movies`)
      setMoviesData(moviesResponse.data.movies);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    movies();
  }, []);

  return <MovieContext.Provider value={[moviesData, setMoviesData]}>{children}</MovieContext.Provider>;
}
