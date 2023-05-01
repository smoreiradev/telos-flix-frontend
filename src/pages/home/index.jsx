import { Box } from "@mui/material";
import React from "react";
import MainVideo from "../../components/mainVideo";
import Trending from "../../components/trending";
import EnjoyForFree from "../../components/enjoyForFree";
import './index.css'
import DontKnowWhatToWatch from "../../components/dontKnowWhatToWatch";
function Home() {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <MainVideo/>
      <div className="sectionsGrid">
        <Trending />
        <EnjoyForFree />
        <DontKnowWhatToWatch/>
      </div>
    </div>
  );
}

export default Home;
