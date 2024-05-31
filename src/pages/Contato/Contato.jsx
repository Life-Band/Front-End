import React from "react";
import "./Contato.css";
import Header from "../../components/Header/Header";
import Person1 from "../../assets/ContatoAssets/Person1.png";
import Person2 from "../../assets/ContatoAssets/Person2.png";
import Person3 from "../../assets/ContatoAssets/Person3.png";
import { useTranslation } from "react-i18next";
import LanguageToggle from "../../components/LangToggle/LangToggle";

function Contato() {
  const { t } = useTranslation();

  return (
    <main className="contato-container">
      <section className="contato-form-container">
        <Header use="notVisible" className="header" />
        <LanguageToggle />
        <form action="" className="form-contato">
          <h2 className="label-title">{t("FaleConosco")}</h2>

          <div className="inputs-contato">
            <div className="input-contato">
              <label>{t("FC-Name-Title")}</label>
              <input
                required
                type="text"
                placeholder={t("FC-Name-Placeholder")}
              />
            </div>

            <div className="input-contato">
              <label>{t("FC-Email-Title")}</label>
              <input
                required
                type="text"
                placeholder={t("FC-Email-Placeholder")}
              />
            </div>
          </div>

          <div className="textarea-contato">
            <label>{t("FC-Mensagem")}</label>
            <textarea required />
            <button type="submit">{t("FC-Enviar")}</button>
          </div>
        </form>

        <img src={Person1} alt="Person" className="person1" />
        <img src={Person2} alt="Doctors" className="person2" />
      </section>

      <section className="contato-social-container">
        <h2>{t("RedesSociais")}</h2>

        <div className="social-links">
          <a href="https://www.linkedin.com/company/life-band/">
            <i class="fa-brands fa-linkedin"></i> <h3>Linkedin</h3>
          </a>
          <a href="https://github.com/Life-Band">
            <i class="fa-brands fa-github"></i> <h3>GitHub</h3>
          </a>
          <a href="https://www.instagram.com/lifeband.proa/">
            <i class="fa-brands fa-instagram"></i> <h3>Instagram</h3>
          </a>
        </div>

        <img src={Person3} className="person3" alt="person3" />
      </section>
    </main>
  );
}

export default Contato;
