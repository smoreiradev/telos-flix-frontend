import React, { useState } from "react";
import { AuthContext } from "./AuthContext";
import axios from "axios";

const AuthProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState(null);
  const apiURL = 'http://localhost:3333';

  const login = async (username, password) => {
    try {
      const loginResponse = await axios.post(`${apiURL}/authenticate/login`, {
        identifier: username,
        password
      });
  
      if (loginResponse.status === 200) {
        const token = loginResponse.data.jwt;
        setAuthToken(token);
        alert('Login successful!');
      } else if (loginResponse.status === 401) {
        alert('Invalid credentials. Please try again.');
      } else {
        alert('Login failed. Please try again.');
      }
    } catch (error) {
      console.error('Login error:', error);
    
      if (error.response && error.response.data) {
        const errorMessage = error.response.data.message;
        alert(`Login failed: ${errorMessage}`);
      } else {
        alert('Login failed. Please try again.');
      }
    }    
  };
  
  const register = async (username, email, password) => {
    try {
      const registerResponse = await axios.post(`${apiURL}/users`, {
        username,
        email,
        password,
      });

      if (registerResponse.status === 201) {
        alert('Registration successful!');
      } else {
        alert('Registration failed. Please try again.');
      }
    } catch (error) {
      console.error('Registration error:', error);
      alert('Registration failed. Please try again.');
    }  
  };
  
  const logout = () => {
    setAuthToken(null);
  };  

  const AuthContextValue = {
    authToken,
    login,
    register,
  };

  return (
    <AuthContext.Provider value={AuthContextValue}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
