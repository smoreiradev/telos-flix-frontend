import "./App.css";
import Header from "./components/header";
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
