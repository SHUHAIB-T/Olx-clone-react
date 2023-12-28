import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home.jsx";
import Signup from "./pages/Signup.jsx";
import Login from "./pages/Login.jsx";
import Create from "./pages/Create.jsx";
import View from "./components/View/VIew.jsx";
import Posts from "./store/PostContext.jsx";
import Auth from "./components/Auth.jsx";

function App() {
  return (
    <div>
      <Posts>
        <Routes>
          <Route element={<Home />} path="/"></Route>
          <Route element={<Signup />} path="/signup"></Route>
          <Route element={<Login />} path="/login"></Route>
          <Route element={<Auth />} path="/create">
            <Route path="/create" element={<Create />} />
          </Route>
          <Route element={<View />} path="/view"></Route>
        </Routes>
      </Posts>
    </div>
  );
}

export default App;
