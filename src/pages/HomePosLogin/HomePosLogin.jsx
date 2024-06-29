import React from "react";
import HeaderLogin from "../../components/HeaderLogin/HeaderLogin";
import ChatBoot from "../../assets/HomePosLoginAssets/Chatboot.png";
import Footer from "../../components/Footer/Footer";
import IconPulseira from "../../assets/HomePosLoginAssets/Icon-pulseira.png";
import IconAgendamento from "../../assets/HomePosLoginAssets/icon-agendamentos.png";
import "./HomePosLogin.css";

function HomePosLogin() {
  return (
    <>
      <main className="Container-PosLogin">
        <HeaderLogin />

        <div className="Container-Cards">
          <div className="agenda-Paciente">
        
            <div className="agendamentos-title">
              <img className="icon-pulseira" src={IconAgendamento} alt="" />
              <h2 className="title-H2-Cards">AGENDA</h2>
            </div>
              <p className="agendamentos-Paciente">Sem agendamentos</p>
              <a href="/cadAgendamentos" className="botao-Agendamento">FAZER AGENDAMENTO</a>
          </div>

          <div className="pulseira-Paciente">
            <div className="icon">
              <img className="icon-pulseira" src={IconPulseira} alt="" />
              <h2 className="title-H2-Cards">MINHA PULSEIRA</h2>
            </div>
            <p className="description-avisos">NENHUM AVISO</p>
          </div>
        </div>
        <button className="chatboot">
          <img src={ChatBoot} alt="" />
        </button>
      </main>

      <Footer />
    </>
  );
}

export default HomePosLogin;
