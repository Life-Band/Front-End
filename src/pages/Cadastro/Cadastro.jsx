
import {  Link } from "react-router-dom";

import Logo from "../../assets/CadastroAssets/Logo.png"

import Estetoscopio from "../../assets/CadastroAssets/Estetoscopio.png"
import Arrow from "../../assets/CadastroAssets/arrow-right.png"
import ButtonHome from "../../assets/CadastroAssets/ButtonHome.png"

import "./Cadastro.css";

const Cadastro = () => {
  

  return (
    <>
      <div className="container-cadastro">
          <div className="cards">
          <div className="Card-Left">
          <div className="card-title">
            <Link to="/">
              <img
                className="logo-cadastro"
                src={Logo}
                alt=""
              />
            </Link>
            <h4 className="cadastro-title">Bem-vindo à </h4>
            <h2 className="nome-title">
              Life&nbsp; <span className="band-style">Band</span>
            </h2>
          </div>
          <img
            className="Estetoscopio-img"
            src={Estetoscopio}
            alt=""
          />
        </div>

        <div className="Card-Right">
          <div className="signup-title">
            <h2 className="signup-Text">Cadastro</h2>
            <a href="/login">
              <img src={Arrow} alt="" />
            </a>
            <Link to="/">
              <img className="Home-Button" src={ButtonHome} alt="" />
            </Link>
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
      </div>
    </>
  );
};

export default Cadastro;
