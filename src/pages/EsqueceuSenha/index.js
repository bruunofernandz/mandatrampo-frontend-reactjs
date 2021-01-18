import React, { Component } from "react";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";

import "react-notifications/lib/notifications.css";

import logo from "../../assets/logoMandaTrampo.svg"

import { Container, GroupButton, Formulario } from "./styles";
import Api from "../../services/api";
import Image from "../../Components/Image";

export default class EsqueceuSenha extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (event) => {
    const login = document.querySelector("#username").value;

    Api.post("/password/forgot", {
      login: login,
    })
      .then((res) => {
        if (res.status === 204) {
          NotificationManager.success(
            "Link para recuperar senha foi enviado para seu e-mail",
            "Ótimo!",
            4000
          );
        }
      })
      .catch((error) => {
        NotificationManager.error(
          "Usuário incorreto ou não existe",
          "Opz!",
          3000
        );
      });

    event.preventDefault();
  };

  render() {
    return (
      <Container>
        <NotificationContainer />
        <Image className="imagem"/>
        <img className="logotipo" src={logo} alt="" />
        <Formulario>
          <form onSubmit={this.handleSubmit}>
            <h1>Recupere sua senha</h1>
            <input
              className="input"
              type="text"
              placeholder="Informe um nome de usuário"
              name="username"
              id="username"
            />
            <GroupButton>
              <a href="" className="submit-input">Enviar</a>
            </GroupButton>
          </form>
        </Formulario>
      </Container>
    );
  }
}
