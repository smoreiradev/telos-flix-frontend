import { Home } from "@mui/icons-material";
import "./App.css";
import Header from "./components/header";
import { Route, Routes, Navigate } from 'react-router-dom';
import { ProtectRoutes } from './hooks/protectRoutes';
import Video from "./pages/video";
import AppRoutes from "./routes";

function App() {
  return (
    <div className="App">
      <Header />
      <div style={{ marginLeft: "170px" }}>
        <AppRoutes />
      </div>
    </div>
  );
}

export default App;
