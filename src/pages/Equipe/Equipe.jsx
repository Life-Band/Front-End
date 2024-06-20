import React from "react";
import Header from "../../components/Header/Header";
import Integrante from "../../components/Integrante/Integrante";
import GabrielAmaral from "../../assets/EquipeAssets/Gabriel Amaral.png";
import AnaLuiza from "../../assets/EquipeAssets/Ana Luiza.png";
import JoãoEdu from "../../assets/EquipeAssets/João Eduardo.png";
import IsaacMartins from "../../assets/EquipeAssets/Isaac Martins.png";
import LifeBand from "../../assets/EquipeAssets/LifeBand.png";
import AlissonDutra from "../../assets/EquipeAssets/Alisson Dutra.png";
import Melcksedeck from "../../assets/EquipeAssets/Melcksedeck Teyllor.png";
import Henrique from "../../assets/EquipeAssets/Henrique Brandão.png";
import GeanGomes from "../../assets/EquipeAssets/Gean Gomes.png";
import PARCEIROS from "../../assets/EquipeAssets/PARCEIROS.png";
import Footer from "../../components/Footer/Footer";
import SENAC from "../../assets/EquipeAssets/Senac.png";
import PROA from "../../assets/EquipeAssets/Proa.png";
import SABORIA from "../../assets/EquipeAssets/Saboria.png";
import "./Equipe.css";

function Equipe() {
  return (
    <main className="Equipe-Container">
      <section className="header-container">
        <Header use="notVisible" />
      </section>
      <h2 className="h2equipe">Conheça Nossa Equipe</h2>

      <div className="integrantes-container">
        <Integrante
          imagem={GabrielAmaral}
          github="https://github.com/skypse"
          linkedin="https://www.linkedin.com/in/gabriel-amaral-alves/"
          nome="Gabriel do Amaral"
          funcao="Product Owner & Back-End"
        />

        <Integrante
          imagem={AnaLuiza}
          github="https://github.com/Fejluiza"
          linkedin="https://www.linkedin.com/in/fejluiza/"
          nome="Ana Luiza"
          funcao="Scrum Master & Front-End"
        />

        <Integrante
          imagem={JoãoEdu}
          github="https://github.com/JoaoEduSB"
          linkedin="https://www.linkedin.com/in/joaoedusb/"
          nome="João Eduardo"
          funcao="Financeiro & Full-Stack"
        />

        <Integrante
          imagem={IsaacMartins}
          github="https://github.com/DevZank"
          linkedin="https://www.linkedin.com/in/isaacmjsilva/"
          nome="Isaac Martins"
          funcao="Desenvolvedor Full-Stack"
        />

        <Integrante
          imagem={LifeBand}
          github="https://github.com/Life-Band"
          linkedin="https://www.linkedin.com/company/life-band/"
          nome="LifeBand"
          funcao="StartUp"
        />

        <Integrante
          imagem={AlissonDutra}
          github="https://github.com/AlissonDutra04"
          linkedin="https://www.linkedin.com/in/alisson-dutra-7489a2240/"
          nome="Alisson Dutra"
          funcao="Desenvolvedor Back-End"
        />

        <Integrante
          imagem={Melcksedeck}
          github="https://github.com/MelckTeyllor"
          linkedin="https://www.linkedin.com/in/melcksedeck-teyllor/"
          nome="Melcksedeck Teyllor"
          funcao="Desenvolvedor Front-End"
        />

        <Integrante
          imagem={Henrique}
          github="https://github.com/HenriqueBran"
          linkedin="https://www.linkedin.com/in/henriquebrand%C3%A3odearrudaa/"
          nome="Henrique Brandão"
          funcao="Desenvolvedor Front-End"
        />

        <Integrante
          imagem={GeanGomes}
          github="https://github.com/GeanGAlmeida"
          linkedin="https://www.linkedin.com/in/gean-almeida/"
          nome="Gean Gomes"
          funcao="Desenvolvedor Back-End"
        />
      </div>

      <h2 className="h2parceiros">Conheça Nossos Parceiros</h2>

      <a href="#" class="slider">
        <div class="slide-track">
          <div class="slideLogo">
            <img src={PARCEIROS} />
          </div>
          <div class="slideLogo">
            <img src={PARCEIROS} />
          </div>
          <div class="slideLogo">
            <img src={PARCEIROS} />
          </div>
          <div class="slideLogo">
            <img src={PARCEIROS} />
          </div>
          <div class="slideLogo">
            <img src={PARCEIROS} />
          </div>
          <div class="slideLogo">
            <img src={PARCEIROS} />
          </div>
          <div class="slideLogo">
            <img src={PARCEIROS} />
          </div>
          <div class="slideLogo">
            <img src={PARCEIROS} />
          </div>
          <div class="slideLogo">
            <img src={PARCEIROS} />
          </div>
        </div>
      </a>

      <Footer />
    </main>
  );
}

export default Equipe;
