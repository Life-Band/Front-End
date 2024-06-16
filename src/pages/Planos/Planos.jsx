import "./Planos.css";
import Home from "../../assets/CadastroAssets/ButtonHome.png";
import Pulseira from "../../assets/PlanosAssets/Pulseira.png";
import Notebook from "../../assets/PlanosAssets/Notebook.png";

function Planos() {
  return (
    <main className="TelaPlanos">
      <div className="divPlanos">
        <div className="whitePlanos">
          <a href="/" className="BtnHome">
            <img src={Home} alt="Botão de Home" />
          </a>
          <h2 className="h2Planos">Planos da plataforma</h2>
          <div className="dadCards">
            <div className="cardsPlanos">
              <img src={Notebook} className="Notebook" />
              <h2 className="planoSistema">
                Sistema <br /> Life Band
              </h2>
              <p className="Negocie">
                Negocie conosco
                <br />
                Clicando aqui!
              </p>
            </div>
            <div className="cardsPlanos">
              <div>
                <img src={Notebook} className="Notebook" />
                <img src={Pulseira} className="Pulseira" />
              </div>
              <h2 className="planoSistema">Sistema + Pulseira Life Click</h2>
              <p className="Negocie">
                Negocie conosco
                <br />
                Clicando aqui!
              </p>
            </div>
            <div className="cardsPlanos">
              <img src={Pulseira} className="Pulseira" />
              <h2 className="planoSistema">
                Pulseira <br /> Life Click
              </h2>
              <p className="Negocie">
                Negocie conosco
                <br />
                Clicando aqui!
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Planos;
