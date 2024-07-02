import React, { useState } from "react";
import "./Login.css";
import Logo from "../../assets/LoginAssets/Logo.png";
import FirstKit from "../../assets/LoginAssets/FirstKit.png";
import Arrow from "../../assets/LoginAssets/Seta.png";
import EyeSlash from "../../assets/LoginAssets/Eye-Slash.png";
import Eye from "../../assets/CadastroAssets/Eye.png";
import { Link, useRoutes } from "react-router-dom";
import useSession from "../../hooks/use-session";

function Login() {
  const [viewPassword, setViewPassword] = useState("password");
  const [switchEye, setSwitchEye] = useState(EyeSlash);
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [cpf, setCpf] = useState("");

  const { login } = useSession();
  const router = useRoutes([
    {
      path: "/HomePosLogin",
    }
  ]);

  async function submitForm() {
      const email = email;
      const password = senha;
      const cpf = cpf;

      login({ email, password, cpf }, {
        optimisticData: {
          email,
          password,
          cpf
        },
      }).then((resp) => {
        if (resp.data.accessToken){
          router.replace("/HomePosLogin");
          return;
        }
      }).catch((error) => {
        const errorMessage = error.toString().split(": ")[1];
        console.error(`${errorMessage}`);
      });
  }

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
                placeholder="Email"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="inputs-boxes">
              <div className="input-senha-box">
                <input
                  className="input-senha"
                  type={viewPassword}
                  placeholder="Senha"
                  required
                  onChange={(e) => setSenha(e.target.value)}
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
                onChange={(e) => setCpf(e.target.value)}
              />
            </div>
            <Link to = "/posLogin">
            <button className="input-btn" type="submit" onClick={() => submitForm()}>
              Entrar
            </button>
            </Link>
          </div>
        </div>
      </div>
      <div>
      </div>
    </main>
  );
}

export default Login;
