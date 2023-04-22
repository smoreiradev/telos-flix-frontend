import React from "react";

import "./index.css";
function SecondaryGradientButton({ icon, text }) {
  return (
    <button className="secondaryGrandientButton">
      {icon}
      {text}
    </button>
  );
}

export default SecondaryGradientButton;
