import "./App.css";
import DsMenu from "./components/Header/DsMenu";
import Header from "./components/Header/header";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main-container">
        <DsMenu />
        <Home />
      </div>
    </div>
  );
}

export default App;
