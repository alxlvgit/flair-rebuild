import React from "react";
import ReactDOM from "react-dom/client";
import { register } from "swiper/element/bundle";
register();
import App from "./App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
