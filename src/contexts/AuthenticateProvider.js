import axios from "axios";
import React, { useEffect, useState } from "react";
import { AuthenticateContext } from "./AuthenticateContext";
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

export default function AuthenticateProvider({ children }) {
  const navigate = useNavigate();
  const [cookies, setCookies, removeCookie] = useCookies();

  const [authenticateData, setAuthenticateData] = useState([]);

  const login = async ({ email, password }) => {

    await axios
      .post("http://localhost:3333/authenticate", { email, password })
      .then((response) => {

        setAuthenticateData(response.data);
        localStorage.setItem("user", JSON.stringify(response.data));
        setCookies('token', response.data.token); // your token
        setCookies('user', response.data); // optional data

        navigate('/home');
      })
      .catch((error) => {
        console.error(error);
      });
  }

  const logout = () => {
    ['token', 'name'].forEach(obj => removeCookie(obj)); // remove data save in cookies
    navigate('/login');
  };


  const savedUser = localStorage.getItem("user");

  const values = {
    login: login,
    authenticateData: authenticateData,
    savedUser: JSON.parse(savedUser),
    logout:logout,
    cookies:cookies
  }

  return <AuthenticateContext.Provider value={values}>{children}</AuthenticateContext.Provider>;
}
