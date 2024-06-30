import React, { useState } from "react";
import "./CadAgendamentos.css";
import IconExam from "../../assets/AgendamentosAssets/IconExperimento.png";
import IconConsultation from "../../assets/AgendamentosAssets/IconConsultation.png";
import IconProcedimento from "../../assets/AgendamentosAssets/IconProcedimento.png";
import IconTime from "../../assets/AgendamentosAssets/IconTempo.png";
import IconInstruction from "../../assets/AgendamentosAssets/IconInstrucao.png";
import IconDate from "../../assets/AgendamentosAssets/IconData.png";
import IconDoctor from "../../assets/AgendamentosAssets/IconMedico.png";
import IconUser from "../../assets/AgendamentosAssets/IconUser.png";
import IconAlergia from "../../assets/AgendamentosAssets/IconAlergia.png";
import IconHistorico from "../../assets/AgendamentosAssets/IconHistorico.png";
import IconOperatorio from "../../assets/AgendamentosAssets/IconOperatorio.png";
import IconMedicamentos from "../../assets/AgendamentosAssets/IconMedicamentos.png";
import HeaderLogin from "../../components/HeaderLogin/HeaderLogin";

function CadAgendamentos() {
  const [cadBtnOpen, setCadBtnOpen] = useState("btnCadAgendamentos");
  const [cadBtnOption, setCadBtnOption] = useState("offAgenda");
  const [cadExam, setCadExam] = useState("cadAgendamentos-InputContainerOFF");
  const [cadConsultation, setCadConsultation] = useState(
    "cadAgendamentos-InputContainerOFF"
  );
  const [cadProcedure, setCadProcedure] = useState(
    "cadAgendamentos-InputContainerOFF"
  );

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
            <button
              className={cadBtnOption}
              onClick={() => {
                setCadExam("cadAgendamentos-InputContainer");
                setCadConsultation("cadAgendamentos-InputContainerOFF");
                setCadProcedure("cadAgendamentos-InputContainerOFF");
              }}
            >
              Exame
            </button>
            <button
              className={cadBtnOption}
              onClick={() => {
                setCadExam("cadAgendamentos-InputContainerOFF");
                setCadConsultation("cadAgendamentos-InputContainer");
                setCadProcedure("cadAgendamentos-InputContainerOFF");
              }}
            >
              Consulta
            </button>
            <button
              className={cadBtnOption}
              onClick={() => {
                setCadExam("cadAgendamentos-InputContainerOFF");
                setCadConsultation("cadAgendamentos-InputContainerOFF");
                setCadProcedure("cadAgendamentos-InputContainer2");
              }}
            >
              Procedimento
            </button>
          </div>
        </div>

        <div className={cadExam}>
          {/*Container dos Campos*/}
          <div className="cadAgendamentos-InputRow">
            {/*Linha de Inputs*/}
            <div className="cadAgendamentos-InputBox">
              {/*Caixa do Input - Opção de Agendamento*/}
              <img src={IconExam} />
              <input type="text" placeholder="Exame de Sangue" />
            </div>
            <div className="cadAgendamentos-InputBox">
              {/*Caixa do Input - Hora do Agendamento*/}
              <img src={IconTime} />
              <input type="Time" />
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

        <div className={cadConsultation}>
          {/*Container dos Campos*/}
          <div className="cadAgendamentos-InputRow">
            {/*Linha de Inputs*/}
            <div className="cadAgendamentos-InputBox">
              {/*Caixa do Input - Opção de Agendamento*/}
              <img src={IconConsultation} />
              <input type="text" placeholder="Pediatria" />
            </div>
            <div className="cadAgendamentos-InputBox">
              {/*Caixa do Input - Hora do Agendamento*/}
              <img src={IconTime} />
              <input type="Time" />
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

        <div className={cadProcedure}>
          {/*Container dos Campos*/}
          <div className="cadAgendamentos-InputRow">
            {/*Linha de Inputs*/}
            <div className="cadAgendamentos-InputBox2">
              {/*Caixa do Input - Opção de Agendamento*/}
              <img src={IconProcedimento} />
              <input type="text" placeholder="Cirurgia" />
            </div>
            <div className="cadAgendamentos-InputBox2">
              {/*Caixa do Input - Hora do Agendamento*/}
              <img src={IconTime} />
              <input type="Time" />
            </div>
            <div className="cadAgendamentos-InputBox2">
              {/*Caixa do Input - Instrução de Preparo*/}
              <img src={IconInstruction} />
              <input type="text" placeholder="Instrução de Preparo" />
            </div>
          </div>
          <div className="cadAgendamentos-InputRow">
            {/*Linha de Inputs*/}
            <div className="cadAgendamentos-InputBox2">
              {/*Caixa do Input - Data do Agendamento*/}
              <img src={IconDate} />
              <input type="date" />
            </div>
            <div className="cadAgendamentos-InputBox2">
              {/*Caixa do Input - Nome do Médico*/}
              <img src={IconDoctor} />
              <input type="text" placeholder="Nome do Médico" />
            </div>
            <div className="cadAgendamentos-InputBox2">
              {/*Caixa do Input - Nome do Paciente*/}
              <img src={IconUser} />
              <input type="text" placeholder="Nome do Paciente" />
            </div>
          </div>
          <div className="cadAgendamentos-InputRow">
            {/*Linha de Inputs*/}
            <div className="cadAgendamentos-InputBox2">
              {/*Caixa do Input - Alergias*/}
              <img src={IconAlergia} />
              <input type="text" placeholder="Alergia" />
            </div>
            <div className="cadAgendamentos-InputBox2">
              {/*Caixa do Input - Histórico Médico*/}
              <img src={IconHistorico} />
              <input type="text" placeholder="Histórico Médico" />
            </div>
            <div className="cadAgendamentos-InputBox2">
              {/*Caixa do Input - Pré-Operatório*/}
              <img src={IconOperatorio} />
              <input type="text" placeholder="Pré-Operatório" />
            </div>
          </div>
          <div className="cadAgendamentos-InputRow">
            {/*Linha de Inputs*/}
            <div className="cadAgendamentos-InputBox2">
              {/*Caixa do Input - Data do Agendamento*/}
              <img src={IconMedicamentos} />
              <input type="text" placeholder="Medicamentos" />
            </div>
            <div className="cadAgendamentos-InputArea2">
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
