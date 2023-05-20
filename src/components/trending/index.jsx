import { SignalCellularAltOutlined } from "@mui/icons-material";
import React, { useContext } from "react";
import "./index.css";
import MiniVideoCard from "../miniVideoCard";
import { MovieContext } from "../../contexts/MovieContext";

function Trending() {
  const [ moviesData ] = useContext(MovieContext);

  return (
    <div className="trendingSection">
      <div className="labelSection">
        <SignalCellularAltOutlined /> Em alta
      </div>
      <div className="trendingVideosGrid">
        {moviesData.map((movie) => (
          <MiniVideoCard key={movie.id} title={movie.title} />
        ))}
      </div>
    </div>
  );
}

export default Trending;
