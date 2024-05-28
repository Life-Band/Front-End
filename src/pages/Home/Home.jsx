import "./Home.css";
import Header from "../../components/Header/Header";
import Bracelet from "../../assets/HomeAssets/pulseira.png";
import FirtAid from "../../assets/HomeAssets/cards/card-firstaid.png";
import ServiceQueue from "../../assets/HomeAssets/cards/card-servicequeue.png";
import Cloud from "../../assets/HomeAssets/cards/card-cloud.png";
import Services from "../../components/Card_Services/Services";
import Calendar from "../../assets/ServicesAssets/IconeAgenda.png";
import IconeCoracao from "../../assets/ServicesAssets/IconedoCard.png";
import Pulseira from "../../assets/ServicesAssets/IconePulseira.png";
import Footer from "../../components/Footer/Footer";
import { useTranslation } from "react-i18next";
import LanguageToggle from "../../components/LangToggle/LangToggle";
import { useNavigate } from "react-router-dom";

function Home(props) {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const redictButton = () => {
    navigate("/Cadastro");
  };

  return (
    <main className="home">
      <section className="home-initial" id="inicio">
        <Header use="visible" className="header" />

        <div className="initial-info">
          <h2>{t("Slogan")}</h2>
          <LanguageToggle />
          <button className="bracelet-btn">
            <img src={Bracelet} alt="Icone de pulseira" />
            <span>
              +{props.cadastros} {t("P-Ativas")}
            </span>
          </button>
        </div>

        <button className="signup-btn" onClick={redictButton}>
          {t("Cad")}
        </button>
      </section>

      <section className="home-about" id="sobre">
        <div className="about-container">
          <div className="about-title">
            <h2>{t("SobreNos")}</h2>
          </div>

          <div className="about-texts">
            <div className="about-text">
              <p>{t("Texto-Sobre-1")}</p>
            </div>
            <div className="about-text">
              <p>{t("Texto-Sobre-2")}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="home-benefit" id="vantagens">
        <h2>{t("Vantagens")}</h2>

        <div className="benefit-cards">
          <div className="benefit-card">
            <img src={FirtAid} alt="Imagem Ilustrativa de Primeiros Socorros" />
            <h4>{t("Card1-Title")}</h4>
            <p>{t("Card1-Text")}</p>
          </div>
          <div className="benefit-card">
            <img
              src={ServiceQueue}
              alt="Imagem Ilustrativa de Não espere na fila!"
            />
            <h4>{t("Card2-Title")}</h4>
            <p>{t("Card2-Text")}</p>
          </div>
          <div className="benefit-card">
            <img src={Cloud} alt="Imagem Ilustrativa de Prontuário em nuvem" />
            <h4>{t("Card3-Title")}</h4>
            <p>{t("Card3-Text")}</p>
          </div>
        </div>
      </section>

      <section className="home-feedback" id="depoimentos">
        <svg
          className="feedbackWave1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#ffffff"
            fill-opacity="1"
            d="M0,64L60,64C120,64,240,64,360,69.3C480,75,600,85,720,96C840,107,960,117,1080,117.3C1200,117,1320,107,1380,101.3L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
        <div className="imageContainer"></div>
        <div className="texts-feedback">
          <h2>{t("Depoimentos")}</h2>
          <p>{t("Depoimentos-Text")}</p>
        </div>
        <svg
          className="feedbackWave2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#ffffff"
            fill-opacity="1"
            d="M0,64L60,64C120,64,240,64,360,69.3C480,75,600,85,720,96C840,107,960,117,1080,117.3C1200,117,1320,107,1380,101.3L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </section>

      <section className="home-services" id="servicos">
        <h2 className="services-title">{t("Serviços")}</h2>
        <div className="Container-Service">
          <Services
            icons={Calendar}
            description={t("Serviços-C1-Text")}
            title={t("Serviços-C1-Title")}
          />
          <Services
            icons={IconeCoracao}
            description={t("Serviços-C2-Text")}
            title={t("Serviços-C2-Title")}
          />
          <Services
            icons={Pulseira}
            description={t("Serviços-C3-Text")}
            title={t("Serviços-C3-Title")}
          />
        </div>
      </section>

      <Footer />
    </main>
  );
}

export default Home;
