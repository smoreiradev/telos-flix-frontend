import React, {useEffect} from "react";
import "./index.css";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

function PrimaryGradientButton({ text, icon, onClick, onCloseModal }) {
  const { isLoggedIn, username, closeModal } = useContext(AuthContext);

  useEffect(() => {
    if (isLoggedIn) {
      console.log(isLoggedIn);
      closeModal(); // Close the login modal when the user is logged in
    }
  }, [isLoggedIn, closeModal]);

  const buttonText = isLoggedIn ? username : text;
  
  return (
    <button onClick={onClick} className="primaryGrandientButton">
      {icon}
      {buttonText}
    </button>
  );
}

export default PrimaryGradientButton;
