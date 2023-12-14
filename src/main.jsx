import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { FirebaseContext } from "./store/FirebaseContext.js";
import { firebase, auth } from "./firebase/config.js";
import AuthCntxt from "./store/AuthCntxt.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FirebaseContext.Provider value={{ firebase, auth }}>
      <AuthCntxt>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AuthCntxt>
    </FirebaseContext.Provider>
  </React.StrictMode>
);
