import React, { Component } from "react";

import Form from "./Components/Form";
import Image from "./Components/Image";
import Header from "../../Components/Header";

import enderecos from "../../services/enderecos";
import api from "../../services/api";

import { Container } from "./styles";

export default class MeuPerfil extends Component {
  state = {
    background: "rgb(63,61,86)",
    widthNumber: true,
    enderecos: {},
    cidades: {},
    professions: {},
  };

  async componentDidMount() {
    const response = await enderecos.get("/estados");

    this.setState({ enderecos: response.data });

    const response2 = await api.get("/profession");

    this.setState({ professions: response2.data });
  }

  getUf = async () => {
    const uf = document.querySelector("#estado").value;
    document.querySelector("#cidade").removeAttribute("disabled");

    const response = await enderecos.get(`/estados/${uf}/municipios`);

    this.setState({ cidades: response.data });
  };

  render() {
    return (
      <>
        <Header
          background={this.state.background}
          widthNumber={this.state.widthNumber}
        />
        <Container>
          <Image />
          <Form
            enderecos={this.state.enderecos}
            getUf={this.getUf}
            cidades={this.state.cidades}
            professions={this.state.professions}
          />
        </Container>
      </>
    );
  }
}
