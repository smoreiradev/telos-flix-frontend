import "./App.css";
import Header from "./components/header";
import AppRoutes from "./routes";
import AuthenticateProvider from "./contexts/AuthenticateProvider";

function App() {
  return (
    <div className="App">
      <AuthenticateProvider>
        <Header />
      <div style={{ marginLeft: "170px" }}>
        <AppRoutes />
      </div>
      </AuthenticateProvider>
    </div>
  );
}

export default App;
