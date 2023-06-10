import React from 'react';
import image from "./Hero.png";
import { useParams } from "react-router-dom";
import { useContext } from 'react';
import { MovieContext } from '../../contexts/MovieContext';
import ReactPlayer from 'react-player';

const VideoPlayer = () => {
  const { id } = useParams();
  const { moviesData } = useContext(MovieContext);
  const foundVideo = moviesData.find(video => video._id === id);

  function getVideoUrl() {
    if (foundVideo) {
      return foundVideo.video;
    }
    return null;
  }

  return (
    <div style={{ marginTop: "124px" }}>
      {getVideoUrl() ? (
        <ReactPlayer
          url={getVideoUrl()}
          width="100%"
          height="100%"
          controls
        />
      ) : (
        <p>Video not found</p>
      )}
      <img src={image} alt="Hero" />
    </div>
  );
}

export default VideoPlayer;
