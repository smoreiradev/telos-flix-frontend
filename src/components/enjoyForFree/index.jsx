import { CardGiftcardOutlined, SignalCellularAltOutlined } from "@mui/icons-material";
import React from "react";
import "./index.css";
import MiniVideoCard from "../miniVideoCard";
function EnjoyForFree() {
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
    <div className="enjoyForfreeSection">
      <div className="labelSection">
        <CardGiftcardOutlined /> Aproveite grátis
      </div>
      <div className="enjoyForfreeVideosGrid">
        {videos.map((video) => (
          <MiniVideoCard title={video.title} />
        ))}
      </div>
    </div>
  );
}

export default EnjoyForFree;
