import Arrow from '../../assets/CadastroAssets/arrow-right.png'
import Home from '../../assets/CadastroAssets/ButtonHome.png'
import EyeSlash from '../../assets/CadastroAssets/Eye-Slash.png'
import Eye from '../../assets/CadastroAssets/Eye.png'
import Calendar from '../../assets/CadastroAssets/Calendar.png'
import React, { useState } from "react";
import './CadastroPaciente.css'

function CadastroPaciente() {
  const [viewPassword, setViewPassword] = useState("password");
  const [viewPassword2, setViewPassword2] = useState("password");
  const [switchEye, setSwitchEye] = useState(EyeSlash);
  const [switchEye2, setSwitchEye2] = useState(EyeSlash);

  return (
    <main className="cadastroPacienteContainer">
      <div className="divCadastro">
        <div className="headerCadastro">
            <div className="h2CadPaciente">
              <h2>Cadastro de Paciente</h2>
              <a href="/login">
                <img src={Arrow} alt="Seta para Login" />
              </a>
            </div>

            <a href="/">
              <img src={Home} alt="Botão de Home" />
            </a>
        </div>

        <form action="?" className="formPacienteContainer">
          <div  className="inputPacienteContainer">
            <input type="text" className="inputCadPaciente" required placeholder="Nome"/>
            <input type="email" className="inputCadPaciente" required placeholder="E-mail"/>
            <input type="text" className="inputCadPaciente" required placeholder="RG"/>
            <input type="text" className="inputCadPaciente" required placeholder="CPF"/>
            
            <div>
              <input type="date" className="inputCadPaciente" required placeholder="Data de Nascimento"/>
              <button type="button">
                <img src={Calendar}/>
              </button>
            </div>
            <select required className="inputCadPaciente">
              <option disabled selected>
                Gênero
              </option>
              <option>Masculino</option>
              <option>Feminino</option>
              <option>Outro</option>
            </select>
            <input type="text" className="inputCadPaciente" required placeholder="Histórico"/>
            <input type="text" className="inputCadPaciente" required placeholder="Endereço"/>

            <input type="number" className="inputCadPaciente" required placeholder="Telefone"/>
            <input type="text" className="inputCadPaciente" required placeholder="Tipo Sanguíneo"/>
            <div>
              <input type={viewPassword} className="inputCadPaciente" required placeholder="Senha"/>
              <button type="button" onClick={() => {
                if (viewPassword === "password") {
                  setViewPassword("text")
                  setSwitchEye(Eye)
                } else {
                  setViewPassword("password")
                  setSwitchEye(EyeSlash)
                }
              }}>
                <img src={switchEye} />
              </button>
            </div>
            <div>
              <input type={viewPassword2} className="inputCadPaciente" required placeholder="Confirmar Senha"/>
              <button type="button"  onClick={() => {
                if (viewPassword2 === "password") {
                  setViewPassword2("text")
                  setSwitchEye2(Eye)
                } else {
                  setViewPassword2("password")
                  setSwitchEye2(EyeSlash)
                }
              }}>
                <img src={switchEye2} />
              </button>
            </div>
          </div>

          <button type="submit" className="cadPacienteBtn">Cadastrar</button>
        </form>
      </div>
    </main>
  )
}

export default CadastroPaciente;
