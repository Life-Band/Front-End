import "./Footer.css";
import Logo from "../../assets/FooterAssets/Logo.png";

function Footer() {
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
            <h2>MAPA DO SITE</h2>
            <h4>Inicio</h4>
            <h4>Sobre Nós</h4>
            <h4>Vantagens</h4>
            <h4>Depoimentos</h4>
            <h4>Serviços</h4>
          </div>
          <div className="footer-container">
            <h2>CONTATO</h2>
            <h4>Contatos</h4>
            <h4>Social Media</h4>
          </div>
          <div className="footer-container">
            <h2>VÍDEOS</h2>
            <h4>Conteúdo</h4>
          </div>
        </div>
        <div className="form-father">
          <form action="" className="form-area">
            <label className="label-title">Fale conosco</label>

            <div className="content-Father">
              <div className="content-FaleConosco">
                <label className="label-input">Nome completo</label>
                <input type="text" placeholder="Digite seu nome" />
              </div>

              <div className="content-FaleConosco">
                <label className="label-input">E-mail</label>
                <input type="text" placeholder="Digite seu e-mail" />
              </div>
            </div>

            <div className="text-Geral">
              <label className="label-input">Mensagem</label>
              <textarea className="textArea-FaleConosco"></textarea>

              <button type="submit" className="submit-Faleconosco">
                ENVIAR
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
