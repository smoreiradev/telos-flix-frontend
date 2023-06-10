import React from "react";
import PrimaryGradientButton from "../primaryGrandientButton";
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';

export default function watchButton() {
  return <PrimaryGradientButton  text="Assistir" icon={<PlayArrowOutlinedIcon />} />;
}