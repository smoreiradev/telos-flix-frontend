import React from "react";
import "./index.css";

function PrimaryGradientButton({ text, icon, onClick, type }) {
  return (
    <button type={type ?? 'button'} onClick={onClick} className="primaryGrandientButton">
      {icon}
      {text}
    </button>
  );
}

export default PrimaryGradientButton;
