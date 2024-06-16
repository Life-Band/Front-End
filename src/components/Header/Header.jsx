import "./Header.css";
import Logo from "../../assets/HeaderAssets/Logo.png";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function Header(props) {
  const [click, setClick] = useState("divisor");
  const { t } = useTranslation();
  const [on, setOn] = useState("socialIconOff");
  const [menuText, setMenuText] = useState("menuTextOff");
  const [barrabrancaVisible, setbarrabrancaVisible] = useState(props.use);
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
            <a href="/primeirossocorros">{t("Videos")}</a>
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
              setClick("");
              setOn("");
              setMenuText("");
            }}
          >
            <i
              class="fa-solid fa-hand-holding-medical"
              style={{ color: "#0d0250" }}
            ></i>{" "}
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
              <a href="/primeirossocorros">{t("Videos")}</a>
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
            <a
              href="https://linktr.ee/LifeBand_?utm_source=linktree_admin_share"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="m13.736 5.853l4.005-4.117l2.325 2.38l-4.2 4.005h5.908v3.305h-5.937l4.229 4.108l-2.325 2.334l-5.74-5.769l-5.741 5.769l-2.325-2.325l4.229-4.108H2.226V8.121h5.909l-4.2-4.004l2.324-2.381l4.005 4.117V0h3.472zm-3.472 10.306h3.472V24h-3.472z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
