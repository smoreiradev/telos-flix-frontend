import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Video from "./pages/video";
export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" exact />
        <Route element={<Video />} path="/video" exact/>
        <Route element={<Video />} path="/video/:id" />
      </Routes>
    </BrowserRouter>
  );
}
