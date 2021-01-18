import React, { Component } from "react";

import api from "../../services/api";
import { login } from "../../auth";

import { NotificationContainer, NotificationManager } from "react-notifications";

import logo from "../../assets/logoMandaTrampo.svg"

import Image from "../../Components/Image";
import Form from "./Components/Form";

import Footer from "../../Components/NFooter";

import { Container } from "./styles";

export default class Login extends Component {
  state = {
    modal: false,
    background: "transparent",
    userimg: false,
    home: false,
  };

  handleSubmit = async () => {
    const loginDOM = document.querySelector("#login");
    const password = document.querySelector("#password");
    const data = {};

    if (!loginDOM.value) {
      NotificationManager.error("Erro ao Efetuar Login", "O campo nome de usuário deve ser preenchido", 3000);
    }
    if (!password.value) {
      NotificationManager.error("Erro ao Efetuar Login", "O campo nome de usuário deve ser preenchido", 3000);
    } else {
      data.login = loginDOM.value;
      data.password = password.value;
      try {
        const response = await api.post("/sessions", data);

        localStorage.setItem("nomecompleto", response.data.user.name);
        localStorage.setItem("email", response.data.user.email);
        localStorage.setItem("login", data.login);
        localStorage.setItem("id", response.data.user.id);
        login(response.data.token);
        if(response.data.user.level === "U"){
          this.props.history.push('/tipocadastro');
        }
        else if(response.data.user.level === "A"){
          this.props.history.push('/admin');
        }
      } catch (error) {
        console.log(error);
        NotificationManager.error("Erro ao Efetuar Login", "Por Favor Insira Dados Válidos", 3000);
      }
    }
  };

  render() {
    return (
      <>
        <Container>
          <NotificationContainer />
          <Image className="imagem"/>
          <img className="logotipo" src={logo} alt="" />
          <Form submitar={this.handleSubmit} />
        </Container>
      </>
    );
  }
}
