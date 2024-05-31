import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import CardsVideos from "../../components/CardsPrimeirosScorros/CardVideos.jsx";
import ImageEngasgo from "../../assets/PrimeirosSocorrosAssets/Engasgo.png";
import ImageInfarto from "../../assets/PrimeirosSocorrosAssets/Infarto.png";
import PlusImage from "../../assets/PrimeirosSocorrosAssets/plus.png";
import Bombeiro from "../../assets/PrimeirosSocorrosAssets/bombeiro.png";
import BombeiroOverlay from "../../assets/PrimeirosSocorrosAssets/bombeirocontato.png"
import Samu from "../../assets/PrimeirosSocorrosAssets/samu.png"
import SamuOverlay from "../../assets/PrimeirosSocorrosAssets/samucontato.png"
import Policia from "../../assets/PrimeirosSocorrosAssets/policia.png"
import PoliciaOverlay from "../../assets/PrimeirosSocorrosAssets/policiacontato.png"
import DefesaCivil from "../../assets/PrimeirosSocorrosAssets/defesacivil.png"
import DefesaCivilOverlay from "../../assets/PrimeirosSocorrosAssets/defesacivilcontato.png"

import { Link } from "react-router-dom";

import "./PrimeirosSocorros.css";

const PrimeirosSocorros = () => {
  return (
    <div className="main-socorros">
      <Header use="notVisible" />
      <main className="socorros-container">
        <h2 className="titlePage">Primeiros Socorros</h2>
        <div className="cards-videos">
          <CardsVideos
            crises="Engasgo"
            image={ImageEngasgo}
            link={"https://www.youtube.com/"}
          />
          <CardsVideos crises="Infarto" image={ImageInfarto} />

          <Link to="">
            <div className="card-plus">
              <img src={PlusImage} alt="" />
            </div>
          </Link>
        </div>
      </main>

      <section className="container-Emergencia">
        <h2 className="titlePage">Contatos de Emergência</h2>
        <div className="contato-emergencia">
            <div className="img-emergencia ">
               <img className="img-contato" src={Samu} alt="" />
              <div className="overlay">
                <img  src={SamuOverlay} alt="" />
              </div>
            </div>
            <div className="img-emergencia ">
               <img className="img-contato" src={Bombeiro} alt="" />
              <div className="overlay">
                <img  src={BombeiroOverlay} alt="" />
              </div>
            </div>
            <div className="img-emergencia ">
               <img className="img-contato" src={Policia} alt="" />
              <div className="overlay">
                <img  src={PoliciaOverlay} alt="" />
              </div>
            </div>
            <div className="img-emergencia ">
               <img className="img-contato" src={DefesaCivil} alt="" />
              <div className="overlay">
                <img  src={DefesaCivilOverlay} alt="" />
              </div>
            </div>
           
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default PrimeirosSocorros;
