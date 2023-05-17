import { Checkbox, FormControl, FormControlLabel, IconButton, InputAdornment } from "@mui/material";
import React, { useContext, useState } from "react";
import CustomOutlinedInput from "../customOutlinedInput";
import { EmailOutlined, PersonOutlined, PhoneOutlined } from "@mui/icons-material";
import PasswordOutlinedInput from "../passwordOutlinedInput";
import PrimaryGradientButton from "../primaryGrandientButton";
import "./index.css";
import { AuthContext } from "../../contexts/AuthContext";

function CreateAccountModalContent() {
  const [name, setname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [birthDate, SetBirthDate] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { register } = useContext(AuthContext);
  const handleRegister = async(e) => {
    e.preventDefault() //Prevent form submission

    if(!name || !email || !phone || !birthDate || !password || !confirmPassword ) {
      alert("Please fill in all blank fields");
      return;
    }

    try {
      await register(name, email, password);
      //store user credentials in localStorage
      localStorage.setItem("storedName", name);
      localStorage.setItem("storedEmail", email);
      localStorage.setItem("storedPassword", password);
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <div className="createAccountModalContent">
      <div className="firstSection">
        <span>Crie sua conta</span>
        <FormControl sx={{ m: 1, width: "366px" }}>
          <div className="inputContainer" style={{ marginTop: "56px" }}>
            <label className="inputLabel">Nome</label>
            <CustomOutlinedInput
              setValue={setname}
              placeholder="Nome"
              type="text"
              startAdornment={
                <InputAdornment>
                  <IconButton>
                    <PersonOutlined sx={{ color: "#EEEEEE" }} />
                  </IconButton>
                </InputAdornment>
              }
            />
          </div>
          <div className="inputContainer" style={{ marginTop: "46px" }}>
            <label className="inputLabel">E-mail</label>
            <CustomOutlinedInput
              setValue={setEmail}
              placeholder="E-mail"
              type="text"
              startAdornment={
                <InputAdornment>
                  <IconButton>
                    <EmailOutlined sx={{ color: "#EEEEEE" }} />
                  </IconButton>
                </InputAdornment>
              }
            />
          </div>
          <div className="inputContainer" style={{ marginTop: "46px" }}>
            <label className="inputLabel">Celular</label>
            <CustomOutlinedInput
              setValue={setPhone}
              placeholder="Celular"
              type="text"
              startAdornment={
                <InputAdornment>
                  <IconButton>
                    <PhoneOutlined sx={{ color: "#EEEEEE" }} />
                  </IconButton>
                </InputAdornment>
              }
            />
          </div>
          <div className="inputContainer" style={{ marginTop: "46px" }}>
            <label className="inputLabel">Data de nascimento</label>
            <CustomOutlinedInput
              setValue={SetBirthDate}
              placeholder="Data de nascimento"
              type="date"
            />
          </div>
        </FormControl>
      </div>
      <div className="secondSection">
        <form sx={{ m: 1, width: "366px" }} onSubmit={handleRegister}>
          <div className="inputContainer" style={{ marginTop: "56px" }}>
            <label className="inputLabel">Senha</label>
            <PasswordOutlinedInput setValue={setPassword} />
          </div>
          <div className="inputContainer" style={{ marginTop: "46px" }}>
            <label className="inputLabel">Confirmar Senha</label>
            <PasswordOutlinedInput setValue={setConfirmPassword} placeholder="Confirmar Senha" />
          </div>
          <FormControlLabel
            sx={{ marginTop: "42px" }}
            control={<Checkbox style={{ color: "#404040" }} defaultChecked />}
            label="Aceito os termos de uso da plataforma"
          />
          <div className="buttonsSection">
            <PrimaryGradientButton text="Entrar"/>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateAccountModalContent;
