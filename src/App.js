import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Welcome from "./Components/Welcome";
import Askname from "./Components/Askname";
import Home from "./Components/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Welcome />} />
        <Route path="/tell-name" element={<Askname />} />
        <Route path="/home/:userName" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
