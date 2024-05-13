import React from "react";
import "./Login.css";
import Logo from "../../assets/LoginAssets/Logo.png";
import FirstKit from "../../assets/LoginAssets/FirstKit.png";
import Arrow from "../../assets/LoginAssets/Seta.png";
import EyeSlash from "../../assets/LoginAssets/Eye-Slash.png";

function Login() {
  return (
    <main className="main-container">
      <div className="container">
        <a href="http://localhost:5173">
          <img className="logo-login" src={Logo} alt="Imagem do Logo " />
        </a>
        <h2>Bem-vindo</h2>
        <h4>de volta</h4>
        <img className="first-kit" src={FirstKit} alt="Imagem do Kit" />
        <div className="right-container">
          <div className="title-login">
            <h1>Login</h1>
            <a href="http://localhost:5173/cadastro" className="arrow">
              <img src={Arrow} />
            </a>
          </div>
          <div className="input-box">
            <div>
              <input
                className="input-name"
                type="text"
                placeholder="Nome"
                required
              />
            </div>
            <div className="container-dad">
              <div>
                <input
                  className="input-senha"
                  type="password"
                  placeholder="Senha"
                  required
                />
                <button className="eye-slash">
                  <img src={EyeSlash} />
                </button>
              </div>
              <div input-cpf>
                <input
                  className="input-cpf"
                  type="text"
                  placeholder="CPF"
                  maxLength="11"
                  required
                />
              </div>
            </div>
            <button className="input-btn" type="submit">
              Entrar
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Login;
