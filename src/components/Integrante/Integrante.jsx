import React from "react";
import "./Integrante.css";

function Integrante(props) {
  return (
    <div className="integrante-card">
      <div className="image-integrante">
        <img src={props.imagem} />
        <div className="integrante-links">
          <a href={props.github}>
            <i class="fa-brands fa-github"></i>
          </a>
          <hr className="hr-links" />
          <a href={props.linkedin}>
            <i class="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </div>

      <h3 className="nome-integrante">{props.nome}</h3>
      <hr />
      <h4 className="funcao-integrante">{props.funcao}</h4>
    </div>
  );
}

export default Integrante;
