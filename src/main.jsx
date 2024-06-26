import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Login from "./pages/Login/Login";
import Cadastro from "./pages/Cadastro/Cadastro";
import CadastroPaciente from "./pages/CadastroPaciente/CadastroPaciente.jsx";
import Pulseira from "./pages/Pulseira/Pulseira";
import Contato from "./pages/Contato/Contato.jsx";
import Equipe from "./pages/Equipe/Equipe.jsx";
import Zuri from "./pages/AssistenteZuri/AssistenteZuri.jsx";
import VideosPs from "./pages/VideosPs/VideosPs.jsx";
import HomePosLogin from "./pages/HomePosLogin/HomePosLogin.jsx";
import LifeClick from "./pages/LifeClick/LifeClick.jsx";
import Planos from "./pages/Planos/Planos.jsx";
import QuemSomos from "./pages/QuemSomos/QuemSomos.jsx";
import CadAgendamentos from "./pages/CadAgendamentos/CadAgendamentos.jsx";
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
  {
    path: "equipe",
    element: <Equipe />,
  },
  {
    path: "zuri",
    element: <Zuri />,
  },
  {
    path: "cadPaciente",
    element: <CadastroPaciente />,
  },
  {
    path: "videosps",
    element: <VideosPs />,
  },
  {
    path: "posLogin",
    element: <HomePosLogin />,
  },
  {
    path: "lifeClick",
    element: <LifeClick />,
  },
  {
    path: "planos",
    element: <Planos />,
  },
  {
    path: "quemsomos",
    element: <QuemSomos />,
  },
  {
    path: "cadAgendamentos",
    element: <CadAgendamentos />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
