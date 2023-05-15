import React, { useState } from "react";
import { AuthContext } from "./AuthContext";

const AuthProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState(null);
  const apiURL = 'http://localhost:3333';

  const login = async (username, password) => {
    try {
  const response = await fetch(`${apiURL}/authenticate `, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      });
  
      if (response.ok) {
        const data = await response.json();
        const token = data.token;
        setAuthToken(token);
        console.log('Login successful:', data); 
      } else {
        throw new Error('Authentication failed');
      }
    } catch (error) {
      console.error(error);
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