import "./App.css";
import Header from "./components/header";
import AppRoutes from "./routes";
import AuthProvider from "./contexts/AuthProvider";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Header />
        <div style={{ marginLeft: "70px" }}>
          <AppRoutes />
        </div>
      </AuthProvider>
    </div>
  );
}

export default App;
