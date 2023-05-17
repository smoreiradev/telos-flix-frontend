import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Video from "./pages/video";
import MovieProvider from "./contexts/MovieProvider";
import AppProvider from "./hooks";
import { ProtectRoutes } from "./hooks/protectRoutes";
export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<Home />} path="/" exact />
      <Route
        element={
          <MovieProvider>
            <Video />
          </MovieProvider>
        }
        path="/video"
        exact
      />
      <Route element={
        <ProtectRoutes />
      }>
        <Route
          element={
            <MovieProvider>
              <Video />
            </MovieProvider>
          }
          path="/video/:id"
        />
      </Route>
    </Routes>

  );
}
