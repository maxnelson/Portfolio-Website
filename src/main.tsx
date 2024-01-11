import "./css/main.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { Router } from "@/Router";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </React.StrictMode>
);
