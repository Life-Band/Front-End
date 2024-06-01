import React from "react";
import "./LifeClick.css";
import HeaderLogin from "../../components/HeaderLogin/HeaderLogin";
import NotificacaoPulseira from "../../components/NotificacaoPulseira/NotificacaoPulseira";
import ProfileJohn from "../../assets/LifeClickAssets/ProfileJohn.png";
import ProfileJane from "../../assets/LifeClickAssets/ProfileJane.png";
import ProfileMayk from "../../assets/LifeClickAssets/ProfileMayk.png";
import Manutencao from "../../assets/LifeClickAssets/Wrench.png";
import Attention from "../../assets/LifeClickAssets/Attention.png";
import Warning from "../../assets/LifeClickAssets/Warning.png";

function LifeClick() {
  return (
    <main className="lifeClick-Container">
      <HeaderLogin />
      <div className="lifeClick-Content">
        <h2 className="lifeClick-Title">LIFE BAND CLICK</h2>

        <NotificacaoPulseira
          profileUser={ProfileJohn}
          nameUser="JOHN DOE"
          iconNotification={Manutencao}
          dateNotification="23/06"
          statusNotification="MANUTENÇÃO"
          color="#0085FF"
        />

        <NotificacaoPulseira
          profileUser={ProfileJane}
          nameUser="JANE DOE"
          iconNotification={Warning}
          dateNotification="15:30"
          statusNotification="ABERTO"
          color="#FF0000"
        />

        <NotificacaoPulseira
          profileUser={ProfileMayk}
          nameUser="MAYK DOE"
          iconNotification={Attention}
          dateNotification="15:20"
          statusNotification="NO&nbsp;HOSPITAL"
          color="#F39C4C"
        />
      </div>
    </main>
  );
}

export default LifeClick;
