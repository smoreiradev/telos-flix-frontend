import axios from "axios";
import React, { useEffect, useState } from "react";
import { AuthenticateContext } from "./AuthenticateContext";

export default function AuthenticateProvider({ children }) {
  const [authenticateData, setAuthenticateData] = useState([]);

  const login = async ({ email, password }) => {
    console.log(`chegou`)
    console.log({ email, password })
    axios
      .post("http://localhost:5000/authenticate", { email, password })
      .then((response) => {
        console.log(response.data)
        setAuthenticateData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  const values = {
    login: login,
    authenticateData: authenticateData
  }

  return <AuthenticateContext.Provider value={values}>{children}</AuthenticateContext.Provider>;
}
