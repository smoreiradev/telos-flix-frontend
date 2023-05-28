import React, { useState } from "react";
import { AuthContext } from "./AuthContext";
import axios from "axios";

const apiURL = 'http://localhost:3333';

export default function AuthProvider ({ children }) { 

  const login = async ({email, password}) => {
    try {
      const loginResponse = await axios.post(`${apiURL}/authenticate`, {
        email,
        password
      });
      if (loginResponse.status === 200) {
        localStorage.setItem("user", JSON.stringify(loginResponse.data));
        alert('Login successful!');
      }
    } catch (error) {
      console.error('Login error:', error);
    }
  };  

  const register = async (name, email, password, phone, birthDate, confirmPassword) => {
    try {
      const registerResponse = await axios.post(`${apiURL}/users`, {
        name,
        email,
        password,
        phone,
        birthDate,
        confirmPassword,
        role: "customer",
      });
  
      if (registerResponse.status === 200) {
        localStorage.setItem("user", JSON.stringify(registerResponse.data));
        alert('Registration successful!');
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.error === "@users/create") {
        // Duplicate email error
        alert('Email address already exists. Please use a different email.');
        return;  //ends the function and prevent the confirmation message to come out after an error
      } else {
        console.error('Registration error:', error);
        return;
      }
    }
  };
  

  const storedUser = localStorage.getItem("user");

  const AuthContextValue = {
    login,
    register:register,
  };

  return(
    <AuthContext.Provider value={AuthContextValue}>
      {children}
    </AuthContext.Provider>
  );
}
