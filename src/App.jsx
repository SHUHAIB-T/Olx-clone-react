import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home.jsx";
import Signup from "./pages/Signup.jsx";
import Login from "./pages/Login.jsx";

function App() {
  return (
    <div>
      <Routes>
        <Route element={<Home />} path="/"></Route>
        <Route element={<Signup />} path="/signup"></Route>
        <Route element={<Login />} path="/login"></Route>
      </Routes>
    </div>
  );
}

export default App;
