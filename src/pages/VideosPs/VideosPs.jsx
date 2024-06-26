import React from "react";
import "./VideosPs.css";
import ImageEngasgo from "../../assets/PrimeirosSocorrosAssets/Engasgo.png";
import ImageInfarto from "../../assets/PrimeirosSocorrosAssets/Infarto.png";
import Afogamento from "../../assets/videosAssets/Afogamento.png";
import AVC from "../../assets/videosAssets/AVC.png";
import Cobra from "../../assets/videosAssets/Cobra.png";
import Convulsao from "../../assets/videosAssets/Convulsao.png";
import Desmaio from "../../assets/videosAssets/Desmaio.png";
import Queimadura from "../../assets/videosAssets/Queimadura.png";
import Header from "../../components/Header/Header";
import CardVideos from "../../components/CardsPrimeirosSocorros/CardVideos.jsx";

const VideosPs = () => {
  return (
    <main className="container-main-videos">
      <Header use="notVisible" />
      <section className="container-videos">
        <CardVideos
          link="https://youtu.be/HcvJ69Gydeg?si=jM8W_KK4lYNzNd6B"
          crises="Infarto"
          image={ImageInfarto}
        />
        <CardVideos
          link="https://youtu.be/CiBaKoPl4IM?si=CZzh1OoI4am-iaW9"
          crises="Afogamento"
          image={Afogamento}
        />
        <CardVideos
          link="https://youtu.be/bpHV3_vH_DU?si=UGvUMZoj-nQ8xQWt"
          crises="Convulsão"
          image={Convulsao}
        />
        <CardVideos
          link="https://youtu.be/fYZpdFpF_bQ?si=3hTMH9ekv4hRvjc1"
          crises="Desmaio"
          image={Desmaio}
        />
        <CardVideos
          link="https://youtu.be/5kyyABzEy_k?si=e2wjmR0NGx3fjUQj"
          crises="Engasgo"
          image={ImageEngasgo}
        />
        <CardVideos
          link="https://youtu.be/kOncLqHEEQU?si=GBbCuMFwCNKaXva3"
          crises="AVC"
          image={AVC}
        />
        <CardVideos
          link="https://youtu.be/oDR1zD1QFTc?si=CCRlK7fSYT_A14i-"
          crises="Peçonha"
          image={Cobra}
        />
        <CardVideos
          link="https://youtu.be/ZtkwWQEiznY?si=AVM_HFuSSnsxrUFG"
          crises="Queimadura"
          image={Queimadura}
        />
      </section>
    </main>
  );
};
export default VideosPs;
