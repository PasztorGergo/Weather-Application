import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { WeatherProvider } from "./hooks/WeatherProvider";
import "./global.css";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Toaster position="bottom-center" />
    <WeatherProvider>
      <App />
    </WeatherProvider>
  </React.StrictMode>
);
