import React, { useState } from "react";
import HeaderLogin from "../../components/HeaderLogin/HeaderLogin";
import Zuri1 from "../../assets/ZuriAssets/ZuriImagem1.png";
import Zuri2 from "../../assets/ZuriAssets/ZuriImagem2.png";
import Zuri3 from "../../assets/ZuriAssets/ZuriImagem3.png";
import Zuri4 from "../../assets/ZuriAssets/ZuriImagem4.png";
import ALProfile from "../../assets/ZuriAssets/ALProfile.png";
import ZuriProfile from "../../assets/ZuriAssets/ZuriProfile.png";
import "./AssistenteZuri.css";

function AssistenteZuri() {
  const [perguntaOff, setPerguntaOff] = useState("options-zuri");
  const [primeiraPergunta, setPrimeiraPergunta] = useState("hiddenQuestion");
  const [segundaPergunta, setSegundaPergunta] = useState("hiddenQuestion");
  const [terceiraPergunta, setTerceiraPergunta] = useState("hiddenQuestion");
  const [quartaPergunta, setQuartaPergunta] = useState("hiddenQuestion");
  const [imagemZuri, setImagemZuri] = useState(Zuri1);

  return (
    <main className="zuri-container">
      {/* <HeaderLogin use="notVisible" /> */}
      <div className="contentZuri-container">
        <div className="chat">
          <h2 className="h2-zuri">Assistente Zuri</h2>
          <hr />
          <div className={perguntaOff}>
            <h5>Escolha uma das Opções: </h5>
            <button
              onClick={() => {
                setPerguntaOff("hiddenQuestion");
                setImagemZuri(Zuri2);
                setPrimeiraPergunta("primeiraPerguntaOn");
              }}
            >
              Como agendar uma Consulta?
            </button>
            <button
              onClick={() => {
                setPerguntaOff("hiddenQuestion");
                setImagemZuri(Zuri3);
                setSegundaPergunta("segundaPerguntaOn");
              }}
            >
              Como funciona a Life Click?
            </button>
            <button
              onClick={() => {
                setPerguntaOff("hiddenQuestion");
                setImagemZuri(Zuri4);
                setTerceiraPergunta("terceiraPerguntaOn");
              }}
            >
              Como ter uma Life Click?
            </button>
            <button
              onClick={() => {
                setPerguntaOff("hiddenQuestion");
                setImagemZuri(Zuri4);
                setQuartaPergunta("quartaPerguntaOn");
              }}
            >
              Quais são os Planos de Assinatura?
            </button>
          </div>

          <div className={primeiraPergunta}>
            <div className="UserQuestion">
              <img src={ALProfile} className="ProfileImg" />
              <div>
                <p>Como agendar uma Consulta?</p>
              </div>
            </div>
            <div className="UserResponse">
              <img src={ZuriProfile} className="ProfileImg" />
              <div>
                <p>
                  Para fazer o agendamento de uma consulta, basta ir para a
                  pagina de agendamentos, selecionar a opção de agendamento:
                  consulta preencher as informações e confirmar horário
                </p>
              </div>
            </div>
          </div>

          <div className={segundaPergunta}>
            <div className="UserQuestion">
              <img src={ALProfile} className="ProfileImg" />
              <div>
                <p>Como funciona a Life Click?</p>
              </div>
            </div>
            <div className="UserResponse">
              <img src={ZuriProfile} className="ProfileImg" />
              <div>
                <p>
                  A Life Click funciona da seguinte maneira: quando o usuário da
                  pulseira pressiona o botão de emergência, seu contato de
                  emergência (responsável) e o hospital são notificados
                  imediatamente sobre o incidente. Ambos recebem a localização
                  exata do usuário para que possam providenciar socorro
                  rapidamente.
                </p>
              </div>
            </div>
          </div>

          <div className={terceiraPergunta}>
            <div className="UserQuestion">
              <img src={ALProfile} className="ProfileImg" />
              <div>
                <p>Como ter uma Life Click?</p>
              </div>
            </div>
            <div className="UserResponse">
              <img src={ZuriProfile} className="ProfileImg" />
              <div>
                <p>
                  Para ter acesso a uma Life Click você precisa fazer parte do
                  Plano Individual da Life Band ou ter acesso ao convênio de um
                  hospital que ofereça a pulseira
                </p>
              </div>
            </div>
          </div>

          <div className={quartaPergunta}>
            <div className="UserQuestion">
              <img src={ALProfile} className="ProfileImg" />
              <div>
                <p>Quais são os Planos da Life Band?</p>
              </div>
            </div>
            <div className="UserResponse">
              <img src={ZuriProfile} className="ProfileImg" />
              <div>
                <p>
                  Os planos que a Life Band oferece variam entre, Individual,
                  Hospitalar Básico e Hospital Avançado, sendo o Individual
                  voltado a uma pessoa que deseja ter a Life Click
                </p>
              </div>
            </div>
          </div>

          <div className="input-zuri">
            <button
              onClick={() => {
                setPerguntaOff("options-zuri");
                setPrimeiraPergunta("hiddenQuestion");
                setSegundaPergunta("hiddenQuestion");
                setTerceiraPergunta("hiddenQuestion");
                setQuartaPergunta("hiddenQuestion");
                setImagemZuri(Zuri1);
              }}
            >
              Dúvidas Frequentes
            </button>
            <i class="fa-solid fa-angle-down"></i>
          </div>
        </div>
        {/* <img className="zuriImg0" src={imagemZuri} alt="Imagem da Zuri" /> */}
      </div>
    </main>
  );
}

export default AssistenteZuri;
