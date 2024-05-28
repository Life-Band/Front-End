import React, { useState } from "react";
import "./LangToggle.css";
import EUA from "../../assets/ToggleAssets/USA.jpg";
import BRASIL from "../../assets/ToggleAssets/BRASIL.png";
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
        <span>EUA</span> <img src={EUA} alt="ICONE DO EUA" />
      </button>
      <button
        className={toggleBR}
        onClick={() => {
          changeLanguage("en");
          setToggleBR("ToggleBtn-Off-BR");
          setToggleEUA("ToggleBtn-EUA");
        }}
      >
        <span>BR</span> <img src={BRASIL} alt="ICONE DO BRASIL" />
      </button>
    </div>
  );
};

export default LanguageToggle;
