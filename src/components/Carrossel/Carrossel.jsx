import Carousel from "react-bootstrap/Carousel";
import Pulseira from "../../assets/CarrosselAssets/LIFECLICK.png";
import IMG1 from "../../assets/CarrosselAssets/Imagens1.png";
import IMG3 from "../../assets/CarrosselAssets/Imagens2.png";
import IMG4 from "../../assets/CarrosselAssets/Imagens4.png";
import "./Carrossel.css";

function Carrossel() {
  return (
    <Carousel className="Carrossel-Main" controls={false}>
      <Carousel.Item className="Carrossel-Section">
        <section className="Carrossel-Right">
          <div className="left-infos">
            <h2>
              BEM-VINDO A <span>LIFE BAND</span>
            </h2>
            <a href="/cadastro">
              <span>CADASTRE-SE</span>
              <i className="fa-solid fa-chevron-right"></i>
            </a>
          </div>
          <img src={IMG1} className="IMG1" alt="Imagem da Pulseira" />
        </section>
      </Carousel.Item>
      <Carousel.Item className="Carrossel-Section">
        <section className="Carrossel-Left">
          <div className="left-infos">
            <h2>Tenha a sua própria LIFE CLICK</h2>
            <a href="/pulseira">
              <span>SAIBA MAIS</span>
              <i className="fa-solid fa-chevron-right"></i>
            </a>
          </div>
          <img src={Pulseira} className="IMG2" alt="Imagem da Pulseira" />
        </section>
      </Carousel.Item>
      <Carousel.Item className="Carrossel-Section">
        <section className="Carrossel-Right2">
          <div className="left-infos">
            <h2>Assista nossos vídeos educativos de Primeiros Socorros</h2>
            <a href="/videosps">
              <span>VEJA AGORA</span>
              <i className="fa-solid fa-chevron-right"></i>
            </a>
          </div>
          <img src={IMG3} className="IMG3" alt="Imagem da Pulseira" />
        </section>
      </Carousel.Item>
      <Carousel.Item className="Carrossel-Section">
        <section className="Carrossel-Left">
          <div className="left-infos">
            <h2>Agende seus exames sem sair de Casa</h2>
            <a href="/login">
              <span>VER MAIS</span>
              <i className="fa-solid fa-chevron-right"></i>
            </a>
          </div>
          <img src={IMG4} className="IMG4" alt="Imagem da Pulseira" />
        </section>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carrossel;
