import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Booking from "./Booking.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="./" element={<App />} />
      <Route path="./booking" element={<Booking />} />
    </Routes>
  </BrowserRouter>
);
