import { Home } from "@mui/icons-material";
import "./App.css";
import Header from "./components/header";
import { Route, Routes, Navigate } from 'react-router-dom';
import { ProtectRoutes } from './hooks/protectRoutes';
import Video from "./pages/video";
import AppRoutes from "./routes";
import AuthenticateProvider from "./contexts/AuthenticateProvider";
import { BrowserRouter } from "react-router-dom";
import AppProvider from "./hooks";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AppProvider>
          <Header />
          <div style={{ marginLeft: "170px" }}>
            <AppRoutes />
          </div>
        </AppProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
