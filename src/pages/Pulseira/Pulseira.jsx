import React from "react";
import "./Pulseira.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Pulseira1 from "../../assets/PulseiraAssets/Pulseira1.png";
import Pulseira2 from "../../assets/PulseiraAssets/Pulseira2.png";
import Pulseira3 from "../../assets/PulseiraAssets/Pulseira3.png";
import Pulseira4 from "../../assets/PulseiraAssets/Pulseira4.png";

function Pulseira() {
  return (
    <main className="pulseira">
      <Header use="notVisible" className="pulseira-header" />
      <h1 className="pulseira">Pulseira | Life Click</h1>
      <p className="paragrafo-pulseira">
        Emergência em segundos,
        <br /> com ela ficou muito mais fácil avisar seus <br /> contatos em
        caso de urgência
      </p>
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
          <h2 className="title-pulseira2">Emergência em instantes</h2>
          <p className="paragrafo-pulseira2">
            Nossa pulseira conta com uma placa que se carrega com energia <br />
            solar, tornando-a sustentável e com uma maior autonomia de <br />
            energia
          </p>
          <p className="paragrafo-pulseira2">
            A pulseira também tem a função de Geolocalização, tornando <br />
            assim mais fácil de encontrar o paciente em uma situação de <br />
            risco
          </p>
          <p className="paragrafo-pulseira2">
            Quando acionada, os contatos serão avisados de uma possível <br />
            emergência, nessa situação os notificados terão a opção de ligar
            <br />
            para os paramédicos ou socorrer a vítima, caso o chamado não <br />
            seja atendido, a emergência será acionada automaticamente
          </p>
          <p className="paragrafo-pulseira2">
            Se o responsável optar por acionar a urgência, o hospital parceiro
            <br />
            mais próximo será informado imediatamente sobre a situação, <br />
            enviando dados como o nome da pessoa, localização, alergias a <br />
            medicamentos do paciente e outras informações relevantes
          </p>
        </div>
      </section>

      <section className="pulseira3">
        <ul className="pulseira3-texts">
          <li>
            Bateria recarregável <br /> com energia Solar
          </li>
          <li>Chip de Geolocalização</li>
          <li>Botão de Emergência</li>
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
