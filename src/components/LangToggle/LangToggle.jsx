import React, { useState } from "react";
import "./LangToggle.css";
import EUA from "../../assets/ToggleAssets/USA.png";
import BRASIL from "../../assets/ToggleAssets/BRASIL.png";
import BR_TEXT from "../../assets/ToggleAssets/BRA.png";
import EUA_TEXT from "../../assets/ToggleAssets/EUA.png";
import { useTranslation } from "react-i18next";

const LanguageToggle = () => {
  const [toggleBR, setToggleBR] = useState("ToggleBtn-BRASIL");
  const [toggleEUA, setToggleEUA] = useState("ToggleBtn-Off-EUA");
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="ToggleBtn-container">
      <button
        className={toggleEUA}
        onClick={() => {
          changeLanguage("pt");
          setToggleEUA("ToggleBtn-Off-EUA");
          setToggleBR("ToggleBtn-BRASIL");
        }}
      >
        <img src={EUA_TEXT} className="EUA-TEXT" alt="BRASIL TEXT" />
        <img src={EUA} className="EUA-ICON" alt="ICONE DO EUA" />
      </button>
      <button
        className={toggleBR}
        onClick={() => {
          changeLanguage("en");
          setToggleBR("ToggleBtn-Off-BR");
          setToggleEUA("ToggleBtn-EUA");
        }}
      >
        <img src={BR_TEXT} className="BR-TEXT" alt="BRASIL TEXT" />
        <img src={BRASIL} className="BR-ICON" alt="ICONE DO BRASIL" />
      </button>
    </div>
  );
};

export default LanguageToggle;
