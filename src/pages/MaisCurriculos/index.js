import React, { Component } from "react";

import { CardsBox } from "./styles";

import Api from "../../services/api";

import Enderecos from "../../services/enderecos";

import Header from "../../Components/Header";
import Footer from "../../Components/NFooter";
import Card from "../../Components/Card";

import Imagem from "../../Components/headerImagem";

import { MdArrowForward } from "react-icons/md";

export default class Home extends Component {
  state = {
    userimg: true,
    addIcons: true,
    curriculos: {},
    enderecos: {},
    cidades: {},
    profissoes: {},
  };

  async componentDidMount() {
    const response = await Api.get("/curriculum");

    this.setState({ curriculos: response.data });

    const responseEnderecos = await Enderecos.get("/estados");

    this.setState({ enderecos: responseEnderecos.data });

    const responseProfession = await Api.get("/profession");

    this.setState({ profissoes: responseProfession.data });
  }

  getUf = async () => {
    const uf = document.querySelector("#estado").value;
    document.querySelector("#cidade").removeAttribute("disabled");

    const response = await Enderecos.get(`/estados/${uf}/municipios`);

    this.setState({ cidades: response.data });
  };

  filtroCidade = async () => {
    const response = await Api.get("/curriculum");

    this.setState({ curriculos: response.data });
    const curriculos = Object.values(this.state.curriculos);
    const cidadesFiltradas = curriculos.filter(
      (curriculo) =>
        curriculo.user.city === document.querySelector("#cidade").value
    );
    this.setState({ curriculos: cidadesFiltradas });
    // document.querySelector("#categoria").removeAttribute('disabled');
  };

  filtroProfissao = async () => {
    const response = await Api.get("/curriculum");

    this.setState({ curriculos: response.data });
    const curriculos = Object.values(this.state.curriculos);
    const profissoesFiltradas = curriculos.filter(
      (curriculo) =>
        curriculo.professions.name ===
        document.querySelector("#categoria").value
    );
    this.setState({ curriculos: profissoesFiltradas });
  };

  render() {
    function shuffle(a) {
      for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
      }
      return a;
    }

    const curriculos = Object.values(this.state.curriculos);

    shuffle(curriculos);
    const enderecos = Object.values(this.state.enderecos);
    const cidades = Object.values(this.state.cidades);
    const profissoes = Object.values(this.state.profissoes);

    return (
      <>
        <Header
          isHome
          userimg={this.state.userimg}
          addIcons={this.state.addIcons}
        />

        <Imagem />

        <CardsBox>
          <div className="horizon">
            <h1>Currículos</h1>

            <select
              required
              name="estado"
              id="estado"
              onChange={(e) => {
                this.getUf();
              }}
            >
              <option value="" disabled selected>
                Estado
              </option>
              {enderecos.map((endereco) => {
                return (
                  <option key={endereco.id} values={endereco.sigla}>
                    {endereco.sigla}
                  </option>
                );
              })}
            </select>

            <select
              name="cidade"
              disabled
              id="cidade"
              onChange={(e) => this.filtroCidade()}
            >
              <option value="" disabled selected>
                Cidade
              </option>
              {cidades.map((cidade) => {
                return (
                  <option key={cidade.id} values={cidade.nome}>
                    {cidade.nome}
                  </option>
                );
              })}
            </select>

            <select
              name="profissao"
              id="categoria"
              onChange={(e) => this.filtroProfissao()}
            >
              <option value="" disabled selected>
                Profissão
              </option>
              {profissoes.map((profissao) => {
                return (
                  <option key={profissao.id} values={profissao.name}>
                    {profissao.name}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="horizon second">
            {curriculos.map((curriculo) => {
              console.log(curriculo);
              return (
                <Card
                  key={curriculo.id}
                  id={curriculo.id}
                  nome={curriculo.user.name}
                  cargo={curriculo.professions.name}
                  cidade={curriculo.user.city}
                  experiencia={curriculo.experience_time}
                  img={curriculo.user.avatar_url}
                />
              );
            })}
          </div>
        </CardsBox>

        <Footer />
      </>
    );
  }
}
