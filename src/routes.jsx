import React from "react";
import { BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import Home from "./pages/home";
import Video from "./pages/video";
import MovieProvider from "./contexts/MovieProvider";
import { useContext } from "react";
import { AuthContext } from "./contexts/AuthContext";
import ProtectedRoutes from "./components/protectedRoutes/admin";

export default function AppRoutes() {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" exact />

        {isAuthenticated ? (
          <Route
            element={
              <MovieProvider>
                <Video />
              </MovieProvider>
            }
            path="/video"
            exact
          />
        ) : (
          <Route path="/video" exact />
        )}

        <Route
          element={
            <MovieProvider>
              <Video />
            </MovieProvider>
          }
          path="/video"
          exact
        />
        <Route
          element={
            <MovieProvider>
              <Video />
            </MovieProvider>
          }
          path="/video/:id"
        />
        <Route 
          path="/admin/*" 
          element={
            <ProtectedRoutes />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
