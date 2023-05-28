import { CardGiftcardOutlined } from "@mui/icons-material";
import React, { useContext } from "react";
import "./index.css";
import MiniVideoCard from "../miniVideoCard";
import { MovieContext } from "../../contexts/MovieContext";

function EnjoyForFree() {
  const [moviesData] = useContext(MovieContext); // Updated to receive moviesData instead of movies

  // Filter out movies with unavailable images
  const filteredMovies = moviesData.filter((movie) => {
    console.log(movie.image); // Debugging statement to check the value of movie.image
    return movie.image;
  });
  

  return (
    <div className="enjoyForfreeSection">
      <div className="labelSection">
        <CardGiftcardOutlined /> Aproveite grátis
      </div>
      <div className="enjoyForfreeVideosGrid">
        {filteredMovies.map((movie) => (
          <MiniVideoCard key={movie._id} title={movie.title} image={movie.image} />
        ))}
      </div>
    </div>
  );
}

export default EnjoyForFree;
