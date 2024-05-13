import React from "react";
import "./Cadastro.css";

const Cadastro = () => {
  return (
    <>
      <div className="container-cadastro">
        <div className="Card-Left">
          <div className="card-title">
            <a href="http://localhost:5173">
              <img
                className="logo-cadastro"
                src="src\assets\CadastroAssets\Logo.png"
                alt=""
              />
            </a>
            <h4 className="cadastro-title">Bem-vindo à </h4>
            <h2 className="nome-title">
              Life&nbsp; <span className="band-style">Band</span>
            </h2>
          </div>
          <img
            className="Estetoscopio-img"
            src="src\assets\CadastroAssets\Estetoscopio.png"
            alt=""
          />
        </div>

        <div className="Card-Right">
          <div className="signup-title">
            <h2 className="signup-Text">Cadastro</h2>
            <a href="http://localhost:5173/login">
              <img src="src\assets\CadastroAssets\arrow-right.png" alt="" />
            </a>
          </div>

          <div className="signup-Columns">
            <form action="" method="" className="left-Column">
              <input type="text" placeholder="Nome" required />
              <input
                type="date"
                name=""
                id=""
                placeholder="Data de nascimento"
                required
              />
              <input type="number" placeholder="Telefone" required />
              <input
                className="passwordCadastro"
                type="password"
                name=""
                id=""
                placeholder="Digite sua senha"
                required
              />
            </form>

            <form action="" method="" className="right-Column">
              <input type="email" name="" id="" placeholder="E-mail" required />

              <div className="select-Gender">
                <select name="" id="" required>
                  <option value="" disabled selected>
                    Gênero
                  </option>
                  <option value="">Masculino</option>
                  <option value="">Feminino</option>
                </select>
              </div>

              <input
                type="text"
                name=""
                id=""
                placeholder="CPF"
                maxLength="11"
                required
              />

              <input
                className="passwordCadastro"
                type="password"
                name=""
                id=""
                placeholder="Confirmar Senha"
                required
              />
            </form>
          </div>

          <div className="container-cadastrar">
            <button type="submit" className="btn-cadastro">
              Cadastrar
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cadastro;
