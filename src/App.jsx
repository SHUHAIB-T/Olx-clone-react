import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home.jsx";
import Signup from "./pages/Signup.jsx";

function App() {
  return (
    <div>
      <Routes>
        <Route element={<Home />} path="/"></Route>
        <Route element={<Signup />} path="/signup"></Route>
      </Routes>
    </div>
  );
}

export default App;
