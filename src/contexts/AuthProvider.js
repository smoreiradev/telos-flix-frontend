import React, { useState } from "react";
import { AuthContext } from "./AuthContext";

const AuthProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState(null);
  const apiURL = 'http://localhost:3333';

  const login = async (username, password) => {
    try {
      const response = await fetch(`${apiURL}/authenticate`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      });
  
      if (response.status === 200) {
        const data = await response.json();
        const token = data.token;
        setAuthToken(token);
        alert('Login successful!');
      } else if (response.status === 401) {
        alert('Invalid credentials. Please try again.');
      } else {
        alert('Login failed. Please try again.');
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('Login failed. Please try again.');
    }
  };
  
  
  const logout = () => {
    setAuthToken(null);
  };  

  const AuthContextValue = {
    authToken,
    login,
  };

  return(
    <AuthContext.Provider value={AuthContextValue}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider; 