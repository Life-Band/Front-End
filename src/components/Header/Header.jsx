import "./Header.css";
import Logo from "../../assets/HeaderAssets/Logo.png";
import Close from "../../assets/HeaderAssets/Close.png";
import Beacons from "../../assets/HeaderAssets/Beacons.png";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function Header(props) {
  const [click, setClick] = useState("divisor");
  const { t } = useTranslation();
  const [on, setOn] = useState("socialIconOff");
  const [menuText, setMenuText] = useState("menuTextOff");
  const [barrabrancaVisible, setbarrabrancaVisible] = useState(props.use);
  const [bgModal, setBgModal] = useState("Modal_EmergenciaOFF");
  const [modalOpen, setModalOpen] = useState("Modal_NumEmergenciaOFF");

  return (
    <header>
      <div className="left-elements">
        <h1>
          <a href="/">
            <img src={Logo} className="logo" alt="Logo da Life Band" />
          </a>
        </h1>
        <nav className="header-pages">
          <span>
            <a href="/">{t("Inicio")}</a>
          </span>
          <span>
            <a href="/quemsomos">{t("Quem somos")}</a>
          </span>
          <span>
            <a href="/videosps">{t("Videos")}</a>
          </span>
          <span>
            <a href="/pulseira">{t("Pulseira")}</a>
          </span>
          <span>
            <a href="/planos">{t("Planos")}</a>
          </span>
          <span>
            <a href="/contato">{t("Contato")}</a>
          </span>
          <span>
            <a href="/equipe">{t("Equipe")}</a>
          </span>
        </nav>
      </div>

      <div className="right-elements">
        <div className="sos">
          <button
            type="button"
            className="openSOS"
            onClick={() => {
              setBgModal("Modal_Emergencia");
              setModalOpen("Modal_NumEmergencia");
            }}
          >
            <i
              class="fa-solid fa-hand-holding-medical"
              style={{ color: "#0d0250" }}
            ></i>
          </button>
        </div>

        <button
          type="button"
          className="openMenu"
          onClick={() => {
            setClick("divisorOpen");
            setOn("socialIcons");
            setMenuText("menuText");
            setbarrabrancaVisible("visible");
          }}
        >
          <i class="fa-solid fa-bars" style={{ color: "#0d0250" }}></i>
        </button>
      </div>

      <div className={barrabrancaVisible}>
        <div className={click} id="divisor">
          <button
            className="closeMenu"
            onClick={() => {
              setClick("divisor");
              setOn("socialIconOff");
              setMenuText("menuTextOff");
              setbarrabrancaVisible(props.use);
            }}
          >
            <i class="fas fa-x " id="close-divisor"></i>
          </button>

          <nav className={menuText}>
            <h2>
              <Link to="/login">{t("Login")}</Link>
            </h2>
            <h2>
              <a href="/">{t("Inicio")}</a>
            </h2>
            <h2>
              <a href="/videosps">{t("Videos")}</a>
            </h2>
            <h2>
              <a href="/pulseira">{t("Pulseira")}</a>
            </h2>
            <h2>
              <a href="/contato">{t("Contato")}</a>
            </h2>
            <h2>
              <a href="/equipe">{t("Equipe")}</a>
            </h2>
          </nav>

          <div className={on}>
            <a href="https://github.com/Life-Band" target="_blank">
              <i class="fa-brands fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/company/life-band/"
              target="_blank"
            >
              <i class="fa-brands fa-linkedin"></i>
            </a>
            <a href="https://beacons.ai/lifeband" target="_blank">
              <img src={Beacons} className="beacons-icon" />
            </a>
          </div>
        </div>
      </div>

      <div className={bgModal}>
        <div className={modalOpen}>
          <button
            className="Modal_Close"
            onClick={() => {
              setModalOpen("Modal_NumEmergenciaOFF");

              setTimeout(() => {
                setBgModal("Modal_EmergenciaOFF");
              }, 1000); // 1000 milissegundos = 1 segundo
            }}
          >
            <img src={Close} />
          </button>
          <h2>NUMEROS DE EMERGÊNCIA</h2>

          <div className="Modal_Row">
            <a href="tel:190">
              <h3>190</h3>
              <p>POLÍCIA MILITAR</p>
            </a>
            <a href="tel:191">
              <h3>191</h3>
              <p>POLÍCIA RODOVIÁRIA FEDERAL</p>
            </a>
            <a href="tel:192">
              <h3>192</h3>
              <p>SAMU</p>
            </a>
          </div>

          <div className="Modal_Row">
            <a href="tel:181">
              <h3>181</h3>
              <p>POLÍCIA CIVIL</p>
            </a>
            <a href="tel:198">
              <h3>198</h3>
              <p>POLÍCIA MILITAR RODOVIÁRIA</p>
            </a>
            <a href="tel:199">
              <h3>199</h3>
              <p>DEFESA CIVIL</p>
            </a>
          </div>

          <div className="Modal_Row">
            <a href="tel:193">
              <h3>193</h3>
              <p>BOMBEIROS</p>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
