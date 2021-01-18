import React, { Component } from "react";

import { CardsBox } from "./styles";

import Api from "../../services/api";

import Enderecos from "../../services/enderecos";

import Header from "../../Components/Header";
import Footer from "../../Components/NFooter";
import PhotoCard from "../../Components/PhotoCard";
import Imagem from "../../Components/headerImagem";

export default class Home extends Component {
  state = {
    userimg: true,
    addIcons: true,
    servicos: {},
    enderecos: {},
    cidades: {},
    categorias: {},
  };

  async componentDidMount() {
    const responseService = await Api.get("/services");

    this.setState({ servicos: responseService.data });

    const responseEnderecos = await Enderecos.get("/estados");

    this.setState({ enderecos: responseEnderecos.data });

    const responseCategorie = await Api.get("/categorie");

    this.setState({ categorias: responseCategorie.data });
  }

  getUf = async () => {
    const uf = document.querySelector("#estado").value;
    document.querySelector("#cidade").removeAttribute("disabled");

    const response = await Enderecos.get(`/estados/${uf}/municipios`);

    this.setState({ cidades: response.data });
  };

  filtroCidade = async () => {
    const response = await Api.get("/services");

    this.setState({ servicos: response.data });
    const servicos = Object.values(this.state.servicos);
    const cidadesFiltradas = servicos.filter((servico) => (
      servico.user.city === document.querySelector("#cidade").value
    ));
    this.setState({ servicos: cidadesFiltradas });
    document.querySelector("#categoria").removeAttribute("disabled");
  }

  filtroCategoria = async () => {
    const response = await Api.get("/services");

    this.setState({ servicos: response.data });
    const servicos = Object.values(this.state.servicos);
    const categoriasFiltradas = servicos.filter((servico) => (
      servico.categories.name === document.querySelector("#categoria").value
    ));
    console.log(categoriasFiltradas)
    this.setState({ servicos: categoriasFiltradas })
  }

  render() {
    function shuffle(a) {
      for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
      }
      return a;
    }

    const servicos = Object.values(this.state.servicos);

    shuffle(servicos);
    const enderecos = Object.values(this.state.enderecos);
    const cidades = Object.values(this.state.cidades);
    const categorias = Object.values(this.state.categorias);

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
            <h1>Serviços</h1>

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

            <select name="cidade" disabled id="cidade" onChange={e => this.filtroCidade()}>
              <option value="" disabled selected>
                Cidade
              </option>
              {cidades.map((cidade) => {
                return (
                  <option key={cidade.id} values={cidade.nome}>
                    {cidade.nome}
                  </option>
                )
              })}
            </select>

            <select name="categoria" id="categoria" onChange={e => this.filtroCategoria()}>
              <option value="" disabled selected>
                Categoria
              </option>
              {categorias.map((categoria) => {
                return (
                  <option key={categoria.id} values={categoria.name}>
                    {categoria.name}
                  </option>
                )
              })}
            </select>
          </div>

          <div className="horizon second">
            {servicos.map((servico) => {
              const photos = servico.photo;
              let photo;

              if (photos.length >= 1) {
                photo = photos[0].local_url;
              } else {
                photo = "";
              }
              return (
                <PhotoCard
                  key={servico.id}
                  isService
                  id={servico.id}
                  img={photo}
                  nome={servico.user.name}
                  cargo={servico.name}
                  cidade={servico.user.city}
                  phone={servico.phone}
                  fb={servico.link_facebook}
                  insta={servico.link_instagram}
                  wpp={
                    servico.iswhats
                      ? "https://api.whatsapp.com/send?phone=55" + servico.phone
                      : ""
                  }
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
