import React, { useState } from "react";
import "./index.css";
import image from "./image.png";
import { FormControl, IconButton, InputAdornment } from "@mui/material";
import { Email } from "@mui/icons-material";
import PrimaryGradientButton from "../primaryGrandientButton";
import SecondaryGradientButton from "../secondaryGrandientButton";
import { AddBoxOutlined } from "@mui/icons-material";
import CustomOutlinedInput from "../customOutlinedInput";
import PasswordOutlinedInput from "../passwordOutlinedInput";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";

export default function LoginModalContent({ setCreateAccountContent }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

    const { login } = useContext(AuthContext);
  
    const handleLogin = async (e) => {
      e.preventDefault(); // Prevent form submission
      
      if (!email || !password) {
        alert("Please enter your email and password.");
        return;
      }
  
      try {
        await login(email, password);
        alert("Login successful!");
      } catch (error) {
        console.error("Login error:", error);
        alert("Login failed. Please try again.");
      }
    };   

  return (
    <div className="loginModalContent">
      <div className="firstSection">
        Login
        <div className="imageContainer">
          <img width="295px" height="127px" src={image} alt=""></img>
        </div>
      </div>
      <div className="secondSection">
        <form onSubmit={handleLogin} sx={{ m: 1, width: "366px" }}>
          <div className="inputContainer">
            <label className="inputLabel">Email</label>
            <CustomOutlinedInput
              setValue={setEmail}
              placeholder="Email"
              type="text"
              startAdornment={
                <InputAdornment>
                  <IconButton>
                    <Email sx={{ color: "#EEEEEE" }} />
                  </IconButton>
                </InputAdornment>
              }
            />
          </div>
          <div className="inputContainer" style={{ marginTop: "30px" }}>
            <label className="inputLabel">Senha</label>
            <PasswordOutlinedInput setValue={setPassword} />
          </div>
          <div className="buttonsSection">
            <PrimaryGradientButton text="Entrar" type="submit" onSubmit={handleLogin}/>
            <SecondaryGradientButton text="Quero criar uma conta" onClick={setCreateAccountContent} icon={<AddBoxOutlined />} />
          </div>
        </form>
      </div>
    </div>
  );
}