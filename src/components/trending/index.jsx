import { SignalCellularAltOutlined } from "@mui/icons-material";
import React from "react";
import "./index.css";
import MiniVideoCard from "../miniVideoCard";
function Trending() {
  const videos = [
    {
      title: "Video 1",
    },
    {
      title: "Video 2",
    },
    {
      title: "Video 3",
    },
  ];
  return (
    <div className="trendingSection">
      <div className="labelSection">
        <SignalCellularAltOutlined /> Em alta
      </div>
      <div className="trendingVideosGrid">
        {videos.map((video) => (
          <MiniVideoCard title={video.title}/>
        ))}
      </div>
    </div>
  );
}

export default Trending;
