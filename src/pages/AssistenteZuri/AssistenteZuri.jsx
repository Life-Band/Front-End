import React from "react";
import HeaderLogin from "../../components/HeaderLogin/HeaderLogin";
import Zuri1 from "../../assets/ZuriAssets/ZuriImagem1.png";
import "./AssistenteZuri.css";

function AssistenteZuri() {
  return (
    <main className="zuri-container">
      <HeaderLogin use="notVisible" />
      <div className="contentZuri-container">
        <div className="chat">
          <h2 className="h2-zuri">Assistente Zuri</h2>
          <hr />
          <div className="options-zuri">
            <button>Como agendar uma Consulta?</button>
            <button>Como funciona a Life Click?</button>
            <button>Como ter uma Life Click? </button>
            <button>Quais são os Planos de Assinatura?</button>
          </div>

          <div className="input-zuri">
            <button>Dúvidas Frequentes</button>
            <i class="fa-solid fa-angle-down"></i>
          </div>
        </div>
        <img src={Zuri1} alt="Imagem da Zuri" />
      </div>
    </main>
  );
}

export default AssistenteZuri;
