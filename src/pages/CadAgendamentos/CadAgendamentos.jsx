import React, { useState } from "react";
import "./CadAgendamentos.css";
import HeaderLogin from "../../components/HeaderLogin/HeaderLogin";

function CadAgendamentos() {
    const [cadBtnOpen, setCadBtnOpen] = useState("btnCadAgendamentos");
    const [cadBtnOption, setCadBtnOption] = useState("offAgenda");

    return(
        <main className="Bg-CadAgendamentos">
            <HeaderLogin />
            
            <div className="cardFacaAgend">
                <div className="topCadAgendamentos">
                    <h2>Faça um Agendamento</h2>

                    <div className={cadBtnOpen}>
                        <div className="optionsCadAgendamentos">
                            <button onClick={() => {
                                if (cadBtnOption == "offAgenda"){
                                    setCadBtnOpen("btnCadAgendamentosOpen")
                                    setCadBtnOption("optionCadAgendamentos")
                                } else {
                                    setCadBtnOpen("btnCadAgendamentos")
                                    setCadBtnOption("offAgenda")
                                }
                            }}>
                                Opção de Agendamento
                            </button>
                            <i class="fa-solid fa-angle-down"></i>
                        </div>
                        <button className={cadBtnOption}>Exame</button>
                        <button className={cadBtnOption}>Consulta</button>
                        <button className={cadBtnOption}>Procedimento</button>
                    </div>
                </div>

                <button className="confirmarAgendamento">Confirmar Horário</button>
            </div>
        </main>
    )
}

export default CadAgendamentos;