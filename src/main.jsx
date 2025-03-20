import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ToastContainer } from "react-toastify";
import React from "react";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <ToastContainer position="bottom-right" />
  </React.StrictMode>
);
