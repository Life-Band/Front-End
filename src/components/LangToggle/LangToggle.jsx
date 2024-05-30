import React, { useState } from "react";
import "./LangToggle.css";
import BRASIL from "../../assets/ToggleAssets/BRASIL.png";
import BR_TEXT from "../../assets/ToggleAssets/BRA.png";
import ESPANHA from "../../assets/ToggleAssets/ESPANHA.png";
import ES_TEXT from "../../assets/ToggleAssets/ESP.png";
import EUA from "../../assets/ToggleAssets/USA.png";
import EUA_TEXT from "../../assets/ToggleAssets/EUA.png";
import { useTranslation } from "react-i18next";

const LanguageToggle = () => {
  const [toggleBR, setToggleBR] = useState("ToggleBtn-BRASIL");
  const [toggleEUA, setToggleEUA] = useState("ToggleBtn-Off-EUA");
  const [toggleESP, setToggleESP] = useState("ToggleBtn-Off-ESP");
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="ToggleBtn-container">
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
      <button
        className={toggleEUA}
        onClick={() => {
          changeLanguage("es");
          setToggleEUA("ToggleBtn-Off-EUA");
          setToggleESP("ToggleBtn-ESPANHA");
        }}
      >
        <img src={EUA_TEXT} className="EUA-TEXT" alt="BRASIL TEXT" />
        <img src={EUA} className="EUA-ICON" alt="ICONE DO EUA" />
      </button>
      <button
        className={toggleESP}
        onClick={() => {
          changeLanguage("pt");
          setToggleESP("ToggleBtn-Off-ESP");
          setToggleBR("ToggleBtn-BRASIL");
        }}
      >
        <img src={ES_TEXT} className="ES-TEXT" alt="ESPANHOL TEXT" />
        <img src={ESPANHA} className="ES-ICON" alt="ICONE DO ESPANHOL" />
      </button>
    </div>
  );
};

export default LanguageToggle;
