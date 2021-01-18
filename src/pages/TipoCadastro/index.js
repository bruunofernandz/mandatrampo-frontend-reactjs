import React, { Component } from "react";

import Header from "../../Components/Header";
import { Container, Box, Title } from "./styles";
import Api from "../../services/api";
import Footer from "../../Components/NFooter";

import { AiFillFileText } from "react-icons/ai";
import { BsFillBagFill } from "react-icons/bs";

export default class TipoCadastro extends Component {
  state = {
    background: "#EEE",
    userimg: true,
    curriculos: "",
    servicos: {},
    cv: false,
    sv: false
  };

  async componentDidMount() {
    const id = localStorage.getItem("id");
    const response = await Api.get(`/curriculum/${id}/user`).then(
      (res) => res.data
    );

    this.setState({ curriculos: response });
    console.log(this.state.curriculos)
    this.setState({
      cv: this.state.curriculos ? true : false,
    })

    const responseServico = await Api.get(`/services/${id}/user`).then(
      (res) => res.data[0]
    );
    this.setState({ sv: responseServico ? true : false, });
  }

  render() {
    const curriculos = this.state.curriculos;

    return (
      <>
        <Header
          background={this.state.background}
          userimg={this.state.userimg}
          home={this.state.home}
          responsive={this.state.responsive}
          notType
        />

        <Title>
          <h1>Escolha uma das Opções</h1>
        </Title>

        <Container>
          <Box>
            <div className="wrapper-title-icon">
              <AiFillFileText className="icon" />
              <h1>Currículo</h1>
            </div>

            <a className="box-button" href="/curriculo">
              {this.state.cv ?
                'Editar'
              :
                'Cadastrar'
              }
            </a>
          </Box>

          <Box>
            <div className="wrapper-title-icon">
              <BsFillBagFill className="icon" />
              <h1>Serviços</h1>
            </div>

            <a className="box-button" href="/servico">
            {this.state.sv ?
                'Editar'
              :
                'Cadastrar'
              }
            </a>
          </Box>
        </Container>

        <Footer />
      </>
    );
  }
}
