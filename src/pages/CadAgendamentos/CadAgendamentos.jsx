import React, { useState } from "react";
import "./CadAgendamentos.css";
import IconExam from "../../assets/AgendamentosAssets/IconExperimento.png";
import IconTime from "../../assets/AgendamentosAssets/IconTempo.png";
import IconInstruction from "../../assets/AgendamentosAssets/IconInstrucao.png";
import IconDate from "../../assets/AgendamentosAssets/IconData.png";
import IconDoctor from "../../assets/AgendamentosAssets/IconMedico.png";
import IconUser from "../../assets/AgendamentosAssets/IconUser.png";
import HeaderLogin from "../../components/HeaderLogin/HeaderLogin";

function CadAgendamentos() {
  const [cadBtnOpen, setCadBtnOpen] = useState("btnCadAgendamentos");
  const [cadBtnOption, setCadBtnOption] = useState("offAgenda");

  return (
    <main className="Bg-CadAgendamentos">
      <HeaderLogin />

      <div className="cardFacaAgend">
        <div className="topCadAgendamentos">
          <h2>Faça um Agendamento</h2>

          <div className={cadBtnOpen}>
            <div className="optionsCadAgendamentos">
              <button
                onClick={() => {
                  if (cadBtnOption == "offAgenda") {
                    setCadBtnOpen("btnCadAgendamentosOpen");
                    setCadBtnOption("optionCadAgendamentos");
                  } else {
                    setCadBtnOpen("btnCadAgendamentos");
                    setCadBtnOption("offAgenda");
                  }
                }}
              >
                Opção de Agendamento
              </button>
              <i class="fa-solid fa-angle-down"></i>
            </div>
            <button className={cadBtnOption}>Exame</button>
            <button className={cadBtnOption}>Consulta</button>
            <button className={cadBtnOption}>Procedimento</button>
          </div>
        </div>

        <div className="cadAgendamentos-InputContainer">
          {/*Container dos Campos*/}
          <div className="cadAgendamentos-InputRow">
            {/*Linha de Inputs*/}
            <div className="cadAgendamentos-InputBox">
              {/*Caixa do Input - Opção de Agendamento*/}
              <img src={IconExam} />
              <input type="text" value="Exame" disabled />
            </div>
            <div className="cadAgendamentos-InputBox">
              {/*Caixa do Input - Hora do Agendamento*/}
              <img src={IconTime} />
              <input type="Time" value="00:00" />
            </div>
            <div className="cadAgendamentos-InputBox">
              {/*Caixa do Input - Instrução de Preparo*/}
              <img src={IconInstruction} />
              <input type="text" placeholder="Instrução de Preparo" />
            </div>
          </div>
          <div className="cadAgendamentos-InputRow">
            {/*Linha de Inputs*/}
            <div className="cadAgendamentos-InputBox">
              {/*Caixa do Input - Data do Agendamento*/}
              <img src={IconDate} />
              <input type="date" />
            </div>
            <div className="cadAgendamentos-InputBox">
              {/*Caixa do Input - Nome do Médico*/}
              <img src={IconDoctor} />
              <input type="text" placeholder="Nome do Médico" />
            </div>
            <div className="cadAgendamentos-InputBox">
              {/*Caixa do Input - Nome do Paciente*/}
              <img src={IconUser} />
              <input type="text" placeholder="Nome do Paciente" />
            </div>
          </div>
          <div className="cadAgendamentos-InputRow">
            {/*Linha de Inputs*/}
            <div className="cadAgendamentos-InputArea">
              <textarea placeholder="OBSERVAÇÕES"></textarea>
            </div>
          </div>
        </div>

        <button className="confirmarAgendamento">Confirmar Horário</button>
      </div>
    </main>
  );
}

export default CadAgendamentos;
