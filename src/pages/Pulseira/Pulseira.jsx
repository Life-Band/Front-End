import React from "react";
import "./Pulseira.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Pulseira1 from "../../assets/PulseiraAssets/Pulseira1.png";
import Pulseira2 from "../../assets/PulseiraAssets/Pulseira2.png";
import Pulseira3 from "../../assets/PulseiraAssets/Pulseira3.png";
import Pulseira4 from "../../assets/PulseiraAssets/Pulseira4.png";
import { useTranslation } from "react-i18next";
import LanguageToggle from "../../components/LangToggle/LangToggle";

function Pulseira() {
  const { t } = useTranslation();

  return (
    <main className="pulseira">
      <Header use="notVisible" />
      <LanguageToggle />
      <h2 className="pulseira">{t("PulseiraNome")}</h2>
      <p className="paragrafo-pulseira">{t("PulseiraMainText")}</p>
      <img
        src={Pulseira1}
        alt="Imagem de Pulseira 1"
        className="pulseira-imagem1"
      />

      <section className="pulseira2">
        <img
          src={Pulseira2}
          alt="Imagem da Pulseira 2"
          className="pulseira-imagem2"
        />
        <div className="text-pulseira2">
          <h2 className="title-pulseira2">{t("PulseiraTitle1")}</h2>
          <p className="paragrafo-pulseira2">{t("PulseiraText1")}</p>
          <p className="paragrafo-pulseira2">{t("PulseiraText2")}</p>
          <p className="paragrafo-pulseira2">{t("PulseiraText3")}</p>
          <p className="paragrafo-pulseira2">{t("PulseiraText4")}</p>
        </div>
      </section>

      <section className="pulseira3">
        <ul className="pulseira3-texts">
          <li>{t("PulseiraTopic1")}</li>
          <li> {t("PulseiraTopic2")}</li>
          <li> {t("PulseiraTopic3")}</li>
        </ul>
        <img
          src={Pulseira3}
          alt="Imagem da Pulseira 3"
          className="pulseira-imagem3"
        />
      </section>

      <section>
        <img
          src={Pulseira4}
          alt="Imagem da Pulseira 4"
          className="pulseira-imagem4"
        />
      </section>

      <Footer />
    </main>
  );
}

export default Pulseira;
