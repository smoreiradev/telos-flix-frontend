import axios from "axios";
import React, { useState, useEffect } from "react";
import { MovieContext } from "./MovieContext";

export default function MovieProvider({ children }) {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [freeMovies, setFreeMovies] = useState([]);
  const apiURL = "http://localhost:3333/movies";

  const fetchMovies = async () => {
    try {
      const moviesResponse = await axios.get(apiURL);
      setTrendingMovies(moviesResponse.data.pages[0].movies);
      setFreeMovies(moviesResponse.data.pages[1].movies);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <MovieContext.Provider value={{ trendingMovies, freeMovies, apiURL }}>
      {children}
    </MovieContext.Provider>
  );
}
