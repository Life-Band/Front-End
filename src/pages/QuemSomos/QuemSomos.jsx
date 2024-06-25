import React from "react";
import "./QuemSomos.css";
import Header from "../../components/Header/Header";
import Logo from "../../assets/QuemSomosAssets/LOGO.png";
import Hand from "../../assets/QuemSomosAssets/Hand.png";
import PrimaryColor from "../../assets/QuemSomosAssets/PrimaryColor.png";
import SecondaryColor from "../../assets/QuemSomosAssets/SecondaryColor.png";
import DarkBlueColor from "../../assets/QuemSomosAssets/DarkBlueColor.png";
import WhiteColor from "../../assets/QuemSomosAssets/WhiteColor.png";
import WhiteBlueColor from "../../assets/QuemSomosAssets/WhiteBlueColor.png";
import Missao from "../../assets/QuemSomosAssets/Missao.png";
import Visao from "../../assets/QuemSomosAssets/Visao.png";
import Valores from "../../assets/QuemSomosAssets/Valores.png";
import Relacionamento from "../../assets/QuemSomosAssets/Relacionamento.png";
import Solucoes from "../../assets/QuemSomosAssets/Solucoes.png";
import Agilidade from "../../assets/QuemSomosAssets/Agilidade.png";
import ZURI from "../../assets/QuemSomosAssets/ZURI.png";
import Atualizacoes from "../../assets/QuemSomosAssets/Atualizações.png";
import Hospitais from "../../assets/QuemSomosAssets/Hospitais.png";
import Pulseira from "../../assets/QuemSomosAssets/Pulseira.png";
import Footer from "../../components/Footer/Footer";
import { useTranslation } from "react-i18next";

function QuemSomos() {
  const { t } = useTranslation();

  return (
    <main className="QuemSomos-Container">
      <Header use="notVisible" />
      <section className="QS-about">
        <div className="Mission-Container">
          <div>
            <img className="Icon-Mission" src={Missao} alt="Estrela" />
            <h2 className="Title-Mission">Missão</h2>
          </div>

          <p>
            Corre em nossas veias tornar-se a principal referência em serviços
            de saúde, reconhecida pela qualidade excepcional, acessibilidade e
            eficiência, através das nossas operações. Comprometemo-nos a liderar
            a inovação no setor, proporcionando uma experiência de atendimento
            ao paciente que ultrapasse as expectativas e contribua para o
            bem-estar duradouro da comunidade.
          </p>
        </div>

        <div className="Mission-Container">
          <div>
            <img className="Icon-Mission" src={Visao} alt="Alvo" />
            <h2 className="Title-Mission">Visão</h2>
          </div>

          <p>
            A nossa Aspiração é ser reconhecido como líder no segmentos de
            serviços de saúde básicos privatizados, destacando-nos pela
            excelência em qualidade, eficiência e inovação. Buscamos contribuir
            de forma significativa com uma doze de adrenalina para a area da
            saúde privada e o desenvolvimento sustentável do setor, liderando a
            inovação e promovendo o bem-estar duradouro da comunidade que
            servimos.
          </p>
        </div>

        <div className="Mission-Container">
          <div>
            <img className="Icon-Mission" src={Valores} alt="Coração" />
            <h2 className="Title-Mission">Valores</h2>
          </div>

          <h3>Ética, Integridade e Honestidade:</h3>
          <p>
            Valorizamos em um ambiente Hospitalar a integridade profissional,
            que representa o compromisso de agir de acordo com princípios éticos
            em todas as nossas atividades, mesmo em situações de vida ou morte.
            Ela envolve honestidade, transparência, confiabilidade e
            responsabilidade nas ações e decisões tomadas no ambiente de
            trabalho.
          </p>

          <h3>Excelência no Atendimento:</h3>
          <p>
            Reconhecemos que a maneira de cuidar das pessoas é essencial para o
            sucesso de um Hospital. Valorizando a qualidade e inovação no
            atendimento por ser um diferencial competitivo, contribuindo para
            fidelização de clientes e garantir uma reputação para a Instituição
            de Saúde. 
          </p>
        </div>
      </section>
      <section className="QS-Logo">
        <h2 className="QS-title">Logo da Life Band</h2>

        <img src={Logo} className="QS-LogoImg" alt="Logo da Life Band" />
        <div className="QS-LogoText">
          <p>Assento vazio pois o paciente já foi atendido</p>
          <p>Coração para remeter a saúde e a vida </p>
        </div>
        <div className="QS-HandContainer">
          <img src={Hand} className="QS-Hand" alt="Braço" />
        </div>
      </section>
      <section className="QS-Colors">
        <h2 className="QS-title">Cores do nosso Sistema</h2>

        <div className="QS-ColorsGroup">
          <div className="ColorDiv">
            <h3>SEGURANÇA</h3>
            <div className="white1">
              <img src={PrimaryColor} />
            </div>
            <h3>#263FBF</h3>
          </div>
          <div className="ColorDiv">
            <h3>SERIEDADE</h3>
            <div className="white2">
              <img src={SecondaryColor} />
            </div>
            <h3>#0847EA</h3>
          </div>
          <div className="ColorDiv">
            <h3>CALMA</h3>
            <div className="white3">
              <img src={DarkBlueColor} />
            </div>
            <h3>#0D0250</h3>
          </div>
          <div className="ColorDiv">
            <h3>LIMPEZA</h3>
            <div className="black1">
              <img src={WhiteColor} />
            </div>
            <h3>#FFFFFF</h3>
          </div>
          <div className="ColorDiv">
            <h3>PAZ</h3>
            <div className="black2">
              <img src={WhiteBlueColor} />
            </div>
            <h3>#E8F0FF</h3>
          </div>
        </div>
      </section>
      <section className="sectionComunidade">
        <h2 className="h2Comunidade">Impactos para a comunidade</h2>
        <div className="comunidadPai">
          <div className="imgSolucoes">
            <img src={Solucoes} alt="Solucoes" />
            <h2>
              Soluções <br />
              Tecnologicas
            </h2>
          </div>
          <div className="imgAgilidade">
            <img src={Agilidade} alt="Agilidade" />
            <h2>
              Bom relacionamento <br />
              entre médicos e <br />
              pacientes
            </h2>
          </div>
          <div className="imgRelacionamento">
            <img src={Relacionamento} alt="Relacionamento" />
            <h2>
              Agilidade no <br /> Atendimento
            </h2>
          </div>
        </div>
      </section>
      <section className="Qs-ProximosPassos">
        <h2 className="h2Passos">Próximos Passos</h2>
        <div className="container-box-implementacoes">
          <div className="box-implementacoes">
            <img src={ZURI} alt="" />

            <p className="futuroZuri">
              Implementação de inteligência artificial na Zuri
            </p>
          </div>
          <div className="box-implementacoes">
            <img src={Pulseira} alt="" />
            <p className="futuroLeft">Aprimoramentos da pulseira Life Click</p>
          </div>
          <div className="box-implementacoes">
            <img src={Atualizacoes} alt="" />

            <p className="futuroRight">Atualizações no sistema</p>
          </div>
          <div className="box-implementacoes">
            <img src={Hospitais} alt="" />
            <p className="futuroLeft">Implementação em Hospitais Públicos</p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

export default QuemSomos;
