import React from "react";
import "./Contato.css";
import Header from "../../components/Header/Header";
import Person1 from "../../assets/ContatoAssets/Person1.png";
import Person2 from "../../assets/ContatoAssets/Person2.png";
import Person3 from "../../assets/ContatoAssets/Person3.png";

function Contato() {
  return (
    <main className="contato-container">
      <section className="contato-form-container">
        <Header use="visible" className="header" />

        <form action="" className="form-contato">
          <h2 className="label-title">Fale conosco</h2>

          <div className="inputs-contato">
            <div className="input-contato">
              <label>Nome completo</label>
              <input required type="text" placeholder="Digite seu nome" />
            </div>

            <div className="input-contato">
              <label>E-mail</label>
              <input required type="text" placeholder="Digite seu e-mail" />
            </div>
          </div>

          <div className="textarea-contato">
            <label>Mensagem</label>
            <textarea required />
            <button type="submit">ENVIAR</button>
          </div>
        </form>

        <img src={Person1} alt="Person" className="person1" />
        <img src={Person2} alt="Doctors" className="person2" />
      </section>

      <section className="contato-social-container">
        <h2>Siga nossas redes sociais</h2>

        <div className="social-links">
          <a href="https://www.linkedin.com/company/life-band/">
            <i class="fa-brands fa-linkedin"></i> <h3>Linkedin</h3>
          </a>
          <a href="https://github.com/Life-Band">
            <i class="fa-brands fa-github"></i> <h3>GitHub</h3>
          </a>
          <a href="https://www.instagram.com/lifeband.proa/">
            <i class="fa-brands fa-instagram"></i> <h3>Instagram</h3>
          </a>
        </div>

        <img src={Person3} className="person3" alt="person3" />
      </section>
    </main>
  );
}

export default Contato;
