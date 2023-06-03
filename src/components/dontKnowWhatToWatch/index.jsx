import React, { useContext } from "react";
import { Button } from "@mui/material";
import {
  ArrowForward,
  QuestionAnswer,
  QuestionMark,
  QuestionMarkRounded,
  Settings,
} from "@mui/icons-material";

import { MovieContext } from "../../contexts/MovieContext";
import "./index.css";


function DontKnowWhatToWatch() {
  const { trendingMovies, freeMovies } = useContext(MovieContext);
  const trendingMovieGenres = trendingMovies.map(movie => movie.genres);
  const freeMovieGenres = freeMovies.map(movie => movie.genres);

  const breakTrendingMovieGenres = trendingMovieGenres.flat();
  const breakFreeMovieGenres = freeMovieGenres.flat();
  const movieGenre = breakTrendingMovieGenres.concat(breakFreeMovieGenres);

  const movieCategoriesSet = new Set(movieGenre);  // eliminates any duplicate values, keeping only the unique ones.
  const movieCategories = Array.from(movieCategoriesSet);  //create an array that contains all the unique categories

  console.log(movieCategories);

  return (
    <div className="dontKnowWhatToWatch">
      <div className="labelSection">
        <QuestionMarkRounded /> Ainda não sabe o que assistir?
      </div>
      <div className="dontKnowWhatToWatchgrid">
        {movieCategories.map((category) => (
          <Button className="categoryButton" key={category}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <Settings />
              {category}
            </div>
            <ArrowForward />
          </Button>
        ))}
      </div>
    </div>
  );
}

export default DontKnowWhatToWatch;
