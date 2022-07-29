import "./App.css";
import Nav from "./components/Nav";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Cabana from "./pages/Cabana";
import Booking from "./pages/Booking";

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
          <Route path="/booking" element={<Booking />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
