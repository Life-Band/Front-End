import "./HeaderLogin.css";
import Logo from "../../assets/HeaderAssets/Logo.png";
import React, { useState } from "react";
import Profile from "../../assets/HeaderAssets/PROFILE.png";
import Pulseira from "../../assets/HeaderAssets/Pulseira.png";
import Hand from "../../assets/HeaderAssets/Hand.png";
import Perfil from "../../assets/HeaderAssets/Perfil.png";
import Agenda from "../../assets/HeaderAssets/Agenda.png";
import Sair from "../../assets/HeaderAssets/Sair.png";
import { useTranslation } from "react-i18next";

function HeaderLogin(props) {
  const [onMenu, setOnMenu] = useState("offMenu");
  const { t } = useTranslation();
  return (
    <header>
      <div className="left-elements">
        <h1>
          <a href="#">
            <img src={Logo} className="logo" alt="Logo da Life Band" />
          </a>
        </h1>
        <nav className="header-pages">
          <span>
            <a href="/">{t("Inicio")}</a>
          </span>
          <span>
            <a href="#">{t("Videos")}</a>
          </span>
          <span>
            <a href="#">Zuri</a>
          </span>
          <span>
            <a href="#">Agendamentos</a>
          </span>
          <span>
            <a href="#">Pulseira</a>
          </span>
        </nav>
      </div>

      <div className="right-elements">
        <button
          type="button"
          className="openMenu"
          onClick={() => {
            setOnMenu("menuOn");
          }}
        >
          <i class="fa-solid fa-user"></i>
        </button>
      </div>

      <div className={onMenu}>
        <div id="divisor">
          <button
            className="closeMenu"
            onClick={() => {
              setOnMenu("offMenu");
            }}
          >
            <i class="fas fa-x " id="close-divisor"></i>
          </button>

          <div className="user-profile">
            <img src={Profile} alt="User Profile" />
            <div>
              <span>Seja bem-vindo</span>
              <h2>JOHN DOE</h2>
            </div>
          </div>

          <nav className="nav-header">
            <h2>
              <img src={Logo} />
              <a href="#">Inicio</a>
            </h2>
            <h2>
              <img src={Perfil} />
              <a href="#">Perfil</a>
            </h2>
            <h2>
              <img src={Hand} />
              <a href="/zuri">Assistente</a>
            </h2>
            <h2>
              <img src={Agenda} />
              <a href="#">Agenda</a>
            </h2>
            <h2>
              <img src={Pulseira} />
              <a href="#">Pulseira</a>
            </h2>

            <h3>
              <a href="/">SAIR</a>
              <img src={Sair} />
            </h3>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default HeaderLogin;
