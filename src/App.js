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
        <div>
          <Routes>
            <Route path='/' element={<Navigate to='video' exact />} />
            <Route path='/home' element={<Home />} />

            <Route element={<ProtectRoutes />}>
              <Route path='/video' element={<Video />} />
            </Route>
          </Routes>
        </div>
        <AppRoutes />
      </div>
    </div>
  );
}

export default App;
