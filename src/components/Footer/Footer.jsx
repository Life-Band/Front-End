import "./Footer.css";
import Logo from "../../assets/FooterAssets/Logo.png";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();
  return (
    <footer>
      <div className="socialMedia-container">
        <button>
          <a href="https://www.linkedin.com/in/life-band-459874304/">
            <i class="fa-brands fa-linkedin-in"></i>
          </a>
        </button>
        <button>
          <a href="https://github.com/Life-Band">
            <i class="fa-brands fa-github"></i>
          </a>
        </button>
        <button>
          <a href="https://beacons.ai/lifeband">
            <i class="fa-solid fa-link"></i>
          </a>
        </button>
      </div>
      <hr />
      <div className="form-container">
        <div className="text-container">
          <div className="footer-container">
            <h2>{t("FC-Mapa-Title")}</h2>
            <a href="#inicio">{t("FC-Mapa-Text1")}</a>
            <a href="#sobre">{t("FC-Mapa-Text2")}</a>
            <a href="#vantagens">{t("FC-Mapa-Text3")}</a>
            <a href="#depoimentos">{t("FC-Mapa-Text4")}</a>
            <a href="#servicos">{t("FC-Mapa-Text5")}</a>
          </div>
          <div className="footer-container">
            <h2>{t("FC-Contato-Title")}</h2>
            <a href="#">{t("FC-Contato-Text1")}</a>
            <a href="#">{t("FC-Contato-Text2")}</a>
          </div>
          <div className="footer-container">
            <h2>{t("FC-Videos-Title")}</h2>
            <a href="#">{t("FC-Videos-Text")}</a>
          </div>
        </div>
        <div className="form-father">
          <form action="" className="form-area">
            <label className="label-title">{t("FaleConosco")}</label>

            <div className="content-Father">
              <div className="content-FaleConosco">
                <label className="label-input">{t("FC-Name-Title")}</label>
                <input type="text" placeholder={t("FC-Name-Placeholder")} />
              </div>

              <div className="content-FaleConosco">
                <label className="label-input">{t("FC-Email-Title")}</label>
                <input type="text" placeholder={t("FC-Email-Placeholder")} />
              </div>
            </div>

            <div className="text-Geral">
              <label className="label-input">{t("FC-Mensagem")}</label>
              <textarea className="textArea-FaleConosco"></textarea>

              <button type="submit" className="submit-Faleconosco">
                {t("FC-Enviar")}
              </button>
            </div>
          </form>
        </div>
      </div>
      <hr />
      <div className="lifeBand-Icone">
        <a href="#">
          <img src={Logo} />
        </a>
        <h2 className="LifeBand-Copyright"> &copy; 2024 LIFE BAND</h2>
      </div>
    </footer>
  );
}

export default Footer;
