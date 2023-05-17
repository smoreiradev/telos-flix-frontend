import React, { useState } from "react";
import { AuthContext } from "./AuthContext";
import axios from "axios";

const AuthProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState(null);
  const [data, setData] = useState(null);
  const apiURL = 'http://localhost:3333';
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = async (username, password) => {
    try {
      const loginResponse = await axios.post(`${apiURL}/authenticate`, {
        username,
        password
      });
  
      if (loginResponse.status === 200) {
        const { user, token } = loginResponse.data;
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        setData({ user, token });
        setIsAuthenticated(true);
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
  
  const register = async (name, email, password, phone, birthDate, confirmPassword) => {
    try{
      const registerResponse = await axios.post(`${apiURL}/users`, {
        data: {
          name,
          email, 
          password,
          phone,
          birthDate,
          confirmPassword,
        }
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

  

  return(
    <AuthContext.Provider value={AuthContextValue}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
