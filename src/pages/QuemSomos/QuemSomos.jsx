import React from "react";
import "./QuemSomos.css";
import Header from "../../components/Header/Header";
import Prancheta from "../../assets/QuemSomosAssets/Prancheta.png";
import Logo from "../../assets/QuemSomosAssets/LOGO.png";
import Hand from "../../assets/QuemSomosAssets/Hand.png";
import PrimaryColor from "../../assets/QuemSomosAssets/PrimaryColor.png";
import SecondaryColor from "../../assets/QuemSomosAssets/SecondaryColor.png";
import DarkBlueColor from "../../assets/QuemSomosAssets/DarkBlueColor.png";
import WhiteColor from "../../assets/QuemSomosAssets/WhiteColor.png";
import WhiteBlueColor from "../../assets/QuemSomosAssets/WhiteBlueColor.png";
import { useTranslation } from "react-i18next";

function QuemSomos() {
  const { t } = useTranslation();

  return (
    <main className="QuemSomos-Container">
      <Header use="notVisible" />
      <section className="QS-about">
        <h2 className="QS-title">QUEM SOMOS</h2>

        <div className="QS-info">
          <div className="QS-text">
            <p>{t("Texto-Sobre-1")}</p>
          </div>
          <img src={Prancheta} alt="Prancheta" />
        </div>
      </section>
      <section className="QS-Logo">
        <h2 className="QS-title">Logo da Life Band</h2>

        <img src={Logo} className="QS-LogoImg" alt="Logo da Life Band" />
        <div className="QS-LogoText">
          <p>Assento vazio pois o paciente já foi atendido</p>
          <p>Coração para remeter a saúde e a vida </p>
        </div>
        <div className="QS-HandContainer">
          <img src={Hand} className="QS-Hand" alt="Braço" />
        </div>
      </section>
      <section className="QS-Colors">
        <h2 className="QS-title">Cores do nosso Sistema</h2>

        <div className="QS-ColorsGroup">
          <div className="ColorDiv">
            <h3>SEGURANÇA</h3>
            <div className="white">
              <img src={PrimaryColor} />
            </div>
            <h3>#263FBF</h3>
          </div>
          <div className="ColorDiv">
            <h3>SERIEDADE</h3>
            <div className="white">
              <img src={SecondaryColor} />
            </div>
            <h3>#0847EA</h3>
          </div>
          <div className="ColorDiv">
            <h3>CALMA</h3>
            <div className="white">
              <img src={DarkBlueColor} />
            </div>
            <h3>#0D0250</h3>
          </div>
          <div className="ColorDiv">
            <h3>LIMPEZA</h3>
            <div className="black">
              <img src={WhiteColor} />
            </div>
            <h3>#FFFFFF</h3>
          </div>
          <div className="ColorDiv">
            <h3>PAZ</h3>
            <div className="black">
              <img src={WhiteBlueColor} />
            </div>
            <h3>#E8F0FF</h3>
          </div>
        </div>
      </section>
    </main>
  );
}

export default QuemSomos;
