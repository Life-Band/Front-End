import React, { useState } from "react";
import "./Login.css";
import Logo from "../../assets/LoginAssets/Logo.png";
import FirstKit from "../../assets/LoginAssets/FirstKit.png";
import Arrow from "../../assets/LoginAssets/Seta.png";
import EyeSlash from "../../assets/LoginAssets/Eye-Slash.png";
import Eye from "../../assets/CadastroAssets/Eye.png";
import { Link } from "react-router-dom";

function Login() {
  const [viewPassword, setViewPassword] = useState("password");
  const [switchEye, setSwitchEye] = useState(EyeSlash);

  return (
    <main className="main-container">
      <div className="container-login">
        <Link to="/">
          <img className="logo-login" src={Logo} alt="Imagem do Logo " />
        </Link>
        <h2>Bem-vindo</h2>
        <h4>de volta</h4>
        <img className="first-kit" src={FirstKit} alt="Imagem do Kit" />
        <div className="right-container">
          <div className="title-login">
            <h1>Login</h1>
            <a href="/cadastro" className="arrow">
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
            <div className="inputs-boxes">
              <div className="input-senha-box">
                <input
                  className="input-senha"
                  type={viewPassword}
                  placeholder="Senha"
                  required
                />
                <button
                  className="eye-slash"
                  onClick={() => {
                    if (viewPassword === "password") {
                      setViewPassword("text");
                      setSwitchEye(Eye);
                    } else {
                      setViewPassword("password");
                      setSwitchEye(EyeSlash);
                    }
                  }}
                >
                  <img src={switchEye} />
                </button>
              </div>
              <input
                className="input-cpf"
                type="text"
                placeholder="CPF"
                maxLength="11"
                required
              />
            </div>
            <Link to = "/posLogin">
            <button className="input-btn" type="submit">
              Entrar
            </button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Login;
