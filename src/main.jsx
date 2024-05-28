import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Login from "./pages/Login/Login";
import Cadastro from "./pages/Cadastro/Cadastro";
import Pulseira from "./pages/Pulseira/Pulseira";
import Contato from "./pages/Contato/Contato.jsx";
import "./libs/i18n/configi18n.jsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "cadastro",
    element: <Cadastro />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "pulseira",
    element: <Pulseira />,
  },
  {
    path: "contato",
    element: <Contato />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
