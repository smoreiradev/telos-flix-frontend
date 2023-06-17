import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/home";
import Video from "./pages/video";
import MovieProvider from "./contexts/MovieProvider";
import { useContext } from "react";
import { AuthContext } from "./contexts/AuthContext";
import ProtectedRoutes from "./components/protectedRoutes/protectedRoutes";
import MovieDetails from "./components/movieDetails";
import { MovieContext } from "./contexts/MovieContext";
import VideoPlayer from "./components/videoPlayer";
import AuthProvider from "./contexts/AuthProvider";
import Header from "./components/header";
import Search from "./components/search";

export default function AppRoutes() {
  return (
    <MovieProvider>
      <AuthProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route
              element={

                <Home />

              }
              path="/"
              exact
            />

            <Route
              element={

                <MovieDetails />

              }
              path="/video/:id"
            />
            <Route
              element={
                <ProtectedRoutes >

                </ProtectedRoutes>
              }
              path="/admin/*"
            />
            <Route
              element={
                <ProtectedRoutes >
                  <VideoPlayer />
                </ProtectedRoutes>
              }
              path="/video/:id/video_player"
            />

            <Route
              element={
                <Search />
              }
              path="/search"
            />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </MovieProvider>
  );
}