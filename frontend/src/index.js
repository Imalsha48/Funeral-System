import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // Ensure the App component is correct
import { BrowserRouter as Router } from "react-router-dom"; // Router for handling routes

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Router>
    <App />
  </Router>
);
