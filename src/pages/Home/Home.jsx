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
import { useNavigate } from "react-router-dom";


function Home(props) {
  const navigate = useNavigate();
  const redictButton = () => {
    navigate('/Cadastro')
}

  return (
    <main className="home">
      <section className="home-initial">
        <Header className="header" />

        <div className="initial-info">
          <h2>Agilidade e precisão cuidando de você na pior situação</h2>

          <button className="bracelet-btn">
            <img src={Bracelet} alt="Icone de pulseira" />
            <span>+{props.cadastros} Pessoas Ativas</span>
          </button>
        </div>

        <a href="http://localhost:5173/cadastro">
          <button className="signup-btn" onClick={redictButton}>Cadastre-se</button>
        </a>
      </section>

      <section className="home-about">
        <div className="about-container">
          <div className="about-title">
            <h2>Sobre nós</h2>
          </div>

          <div className="about-texts">
            <div className="about-text">
              <p>
                Life band revolucionará o atendimento nos hospitais privados,
                reduzindo o tempo de espera e proporcionando conforto aos
                pacientes. Sua abordagem ágil e eficiente irá tornar os
                processos de triagem e admissão mais suaves, aliviando a
                ansiedade dos pacientes e familiares. Com isso, a empresa elevou
                o padrão de qualidade no cuidado médico urgente, garantindo uma
                experiência mais tranquila e sem complicações.
              </p>
            </div>
            <div className="about-text">
              <p>
                Além disso, a introdução da pulseira tecnológica na sociedade
                irá otimizar os serviços hospitalares, trazendo informações do
                paciente, como histórico médico e alergias, permitindo um acesso
                rápido e seguro aos dados necessários para o atendimento. Com
                essa combinação de eficiência operacional e tecnologia avançada,
                os hospitais terão um atendimento personalizado e de excelência,
                focado no rápido atendimento dos pacientes.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="home-benefit">
        <h2>Vantagens</h2>

        <div className="benefit-cards">
          <div className="benefit-card">
            <img src={FirtAid} alt="Imagem Ilustrativa de Primeiros Socorros" />
            <h4>Primeiros Socorros</h4>
            <p>
              Trazemos o conhecimento através de vídeos em nosso site,
              gratuitamente e de fácil acesso para podermos ajudar as pessoas
              que mais amamos
            </p>
          </div>
          <div className="benefit-card">
            <img
              src={ServiceQueue}
              alt="Imagem Ilustrativa de Não espere na fila!"
            />
            <h4>Não espere na fila!</h4>
            <p>
              Nossa ferramenta que permite aos pacientes agendar consultas e
              iniciar sua triagem totalmente online, pode ajudar a reduzir o
              tempo de espera no atendimento presencial
            </p>
          </div>
          <div className="benefit-card">
            <img src={Cloud} alt="Imagem Ilustrativa de Prontuário em nuvem" />
            <h4>Prontuário em nuvem</h4>
            <p>
              Trabalhar com informações e prontuários na nuvem é uma das
              melhores recomendações para otimizar o fluxo de atendimento no
              hospital
            </p>
          </div>
        </div>
      </section>
      <section className="home-feedback">
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
          <h2>Depoimentos</h2>
          <p>
            Veja agora o depoimento de um de nossos clientes, e descubra como a
            Life Band pode impactar sua vida
          </p>
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
      <section className="home-services">
        <h2 className="services-title">Serviços</h2>
        <div className="Container-Service">
          <Services
            icons={Calendar}
            description="Agende confortavelmente suas consultas direto de casa, sem a necessidade de enfrentar filas"
            title="Agendamento"
          />
          <Services
            icons={IconeCoracao}
            description="Nossa plataforma oferece uma aba de orientações e recursos vitais para situações emergenciais."
            title="Primeiros Socorros"
          />
          <Services
            icons={Pulseira}
            description="A pulseira tecnológica envia sinais de socorro para um responsável escolhido pelo usuário da pulseira"
            title="Pulseira"
          />
        </div>
      </section>
      <Footer />
    </main>
  );
}

export default Home;
