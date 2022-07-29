import "./App.css";
import Nav from "./components/Nav";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Cabana from "./pages/Cabana";

function App() {
  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cabanas" element={<Cabana />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
