import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import CardsVideos from "../../components/CardsPrimeirosSocorros/CardVideos.jsx";
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
    <main className="main-socorros">
      <div className="socorros-container">
      <Header use="notVisible" />
        <h2 className="titlePage">Primeiros Socorros</h2>
        <div className="cards-videos">
          <CardsVideos 
            crises="Engasgo"
            image={ImageEngasgo}
            link={"https://www.youtube.com/watch?v=5kyyABzEy_k&pp=ygUacHJpbWVpcm9zIHNvY29ycm9zIGVzZ2FzZ28%3D"}
            
          />
          <CardsVideos 
          crises="Infarto"
          image={ImageInfarto}
          link={"https://youtu.be/kdY-RKANFyc?si=YUh2TVqmHrAPZ7G4"}
          />

          <Link to="/videosps">
            <div className="card-plus">
              <img src={PlusImage} alt="" />
            </div>
          </Link>
        </div>
      </div>

      <section className="container-Emergencia">
        <h2 className="titlePage">Contatos de Emergência</h2>
        <div className="contato-emergencia">
           <a href="tel:192"> <div className="img-emergencia ">
               <img className="img-contato samu" src={Samu} alt="" />
              <div className="overlay">
                <img src={SamuOverlay} alt="" />
              </div>
            </div>
            </a>
           <a href="tel:193"><div className="img-emergencia">
               <img className="img-contato bombeiro" src={Bombeiro} alt="" />
              <div className="overlay">
                <img src={BombeiroOverlay} alt="" />
              </div>
            </div>
           </a>
           <a href="tel:190"><div className="img-emergencia">
               <img className="img-contato policia" src={Policia} alt="" />
              <div className="overlay">
                <img src={PoliciaOverlay} alt="" />
              </div>
            </div>
           </a>
           <a href="tel:199"><div className="img-emergencia">
               <img className="img-contato defesacivil" src={DefesaCivil} alt="" />
              <div className="overlay">
                <img src={DefesaCivilOverlay} alt="" />
              </div>
            </div>
           </a>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default PrimeirosSocorros;
