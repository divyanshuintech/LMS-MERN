import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { SnackbarProvider } from "notistack";
import ViewProvider from "./ViewContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <SnackbarProvider>
      <ViewProvider>
        <App />
      </ViewProvider>
    </SnackbarProvider>
  </BrowserRouter>
);
