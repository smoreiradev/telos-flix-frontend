import React from "react";
import "./index.css";

function PrimaryGradientButton({ text, icon }) {
  return (
    <button className="primaryGrandientButton">
      {icon}
      {text}
    </button>
  );
}

export default PrimaryGradientButton;
