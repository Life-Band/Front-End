import React from 'react'
import Maleta from "../../assets/CadastroAssets/maleta.png"
import Perfil from "../../assets/CadastroAssets/perfil.png"
import './Cadastro.css'

const Cadastro = () => {
  return (
    <main className="cadastroContainer">
      <div className="divCadastro">       
        <h2 className="cadastroTitle">Escolha o tipo de Cadastro</h2>

        <div className="options-cadastro">
          <a href="#">
            <img src={Maleta} alt="Maleta de Trabalho" />
            <h3>Funcionário</h3>
          </a>

          <a href="/cadPaciente">
            <img src={Perfil} alt="Usuário" />
            <h3>Paciente</h3>
          </a>
        </div>
      </div>
    </main>
  )
}

export default Cadastro
