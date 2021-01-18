import React, { Component } from "react";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";

import { Container, GroupButton, Formulario } from "./styles";

import Api from "../../services/api";
import Image from "../../Components/ImageRecupera";

export default class RestaurarSenha extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleValidate = (e) => {
    const senha = document.querySelector("#senha");
    const confirmacao = document.querySelector("#confirmacao");

    if (senha.value !== confirmacao.value) {
      NotificationManager.error("Senhas informadas não conferem", "Opz!", 3000);
      return false;
    } else {
      return true;
    }
  };

  handleSubmit = (event) => {
    const password = document.querySelector("#senha").value;
    const password_confirmation = document.querySelector("#confirmacao").value;
    const token = this.props.location.search.replace("?token=", "");

    if (this.handleValidate()) {
      Api.post("/password/reset", {
        password,
        password_confirmation,
        token,
      })
        .then((res) => {
          if (res.status === 204) {
            NotificationManager.success(
              "Senha alterado com sucesso, você já pode efetuar seu login",
              "Ótimo!",
              4000
            );
          }
        })
        .catch((error) => {
          NotificationManager.error(
            "Confira se as senhas informadas estão corretas, ou em branco",
            "Opz!",
            3000
          );
        });
    }

    event.preventDefault();
  };

  render() {
    return (
      <Container>
        <NotificationContainer />
        <Image />
        <Formulario>
          <form onSubmit={this.handleSubmit}>
            <h1>Cadastrar nova senha</h1>
            <input
              className="input"
              type="password"
              placeholder="Informe sua nova senha"
              id="senha"
              name="senha"
            />
            <input
              className="input"
              type="password"
              placeholder="Confirme a sua nova senha"
              id="confirmacao"
              name="confirmacao"
            />
            <GroupButton>
              <input className="submit-input" type="submit" value="Enviar" />
            </GroupButton>
          </form>
        </Formulario>
      </Container>
    );
  }
}
