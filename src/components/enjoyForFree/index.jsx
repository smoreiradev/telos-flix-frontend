import React, { useContext, useEffect, useState } from "react";
import "./index.css";
import MiniVideoCard from "../miniVideoCard";
import { Link } from "react-router-dom";
import { MovieContext } from "../../contexts/MovieContext";
import { CardGiftcardOutlined } from "@mui/icons-material";

async function checkImageAvailability(imageUrl) {
  return new Promise((resolve) => {
    const img = new Image();

    img.addEventListener("error", () => {
      resolve(false); // Image failed to load (404 not found)
    });

    img.addEventListener("load", () => {
      resolve(true); // Image loaded successfully
    });

    img.src = imageUrl;
  });
}

async function filterMoviesByImageAvailability(movies) {
  const filteredMovies = [];

  for (const movie of movies) {
    const isImageAvailable = await checkImageAvailability(movie.image);
    if (isImageAvailable) {
      filteredMovies.push(movie);
    }
  }

  return filteredMovies;
}

function EnjoyForFree() {
  const { apiURL } = useContext(MovieContext);
  const [moviesData] = useContext(MovieContext);
  const freeMovies = moviesData; // Get the second, fifth, and tenth movie

  const [filteredMovies, setFilteredMovies] = useState([]);

  useEffect(() => {
    const fetchFilteredMovies = async () => {
      const filteredMovies = await filterMoviesByImageAvailability(freeMovies);
      setFilteredMovies(filteredMovies);
    };

    fetchFilteredMovies();
  }, [freeMovies]);

  return (
    <div className="enjoyForfreeSection">
      <div className="labelSection">
        <CardGiftcardOutlined /> Aproveite grátis
      </div>
      <div className="enjoyForfreeVideosGrid">
        {filteredMovies.map((movie) => (
          <Link
            style={{
              textDecoration: "none",
              color: "#EEEEEE",
            }}
            to={`${apiURL}/${movie._id}`}
            key={movie._id}
          >
            <MiniVideoCard image={movie.image} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default EnjoyForFree;
  