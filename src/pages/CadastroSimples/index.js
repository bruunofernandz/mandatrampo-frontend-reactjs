import React, { Component } from "react";
import emailValidator from "email-validator";

import api from "../../services/api";

import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";

import Image from "../../Components/ImageCadastrar";
import Form from "./Components/Form";
import Modal from "./Components/Modal";

import { Container } from "./styles";

export default class CadastroSimples extends Component {
  state = {
    modal: false,
    background: "rgb(63,61,86)",
    cadastro: {},
  };

  handleModal = () => {
    const { modal } = this.state;

    if (modal === false) {
      this.setState({
        modal: true,
      });
    } else {
      this.setState({
        modal: false,
      });
    }
  };

  handleValidateName = () => {
    const name = document.querySelector("#name");
    const value = name.value;
    const regexp = /[^a-z A-ZáàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]/g;

    if (value.match(regexp)) {
      name.style.border = "1px solid #B73438";
      name.style.marginBottom = "1px";
      NotificationManager.error(
        "Erro ao Realizar Cadastro",
        "O nome não pode possuir números ou caractéres especiais",
        3000
      );
      document.querySelector(".name").style.marginBottom = "38px";
    } else if (!value) {
      name.style.border = "1px solid #999";
    } else {
      name.style.border = "1px solid #6c63ff";
      this.state.cadastro.name = value;
    }
  };

  handleValidateEmail = () => {
    const email = document.querySelector("#email");

    if (!email.value) {
      email.style.border = "1px solid #999 ";
      document.querySelector(".email").innerHTML = " ";
    } else if (!emailValidator.validate(email.value)) {
      email.style.border = "1px solid #B73438 ";
      email.style.marginBottom = "1px";
      NotificationManager.error(
        "Erro ao Realizar Cadastro",
        "O e-mail informado é inválido",
        3000
      );
      document.querySelector(".email").style.marginBottom = "38px";
    } else {
      email.style.border = "1px solid #6c63ff";
      document.querySelector(".email").innerHTML = " ";
      const value = email.value;
      this.state.cadastro.email = value;
    }
  };

  handleLogin = () => {
    const login = document.querySelector("#login");
    const value = login.value;

    if (value.indexOf(" ") >= 0) {
      login.style.border = "1px solid #B73438";
      login.style.marginBottom = "1px";
      NotificationManager.error(
        "Erro ao Realizar Cadastro",
        "O nome de usuário não pode conter espaços",
        3000
      );
      document.querySelector(".username").style.marginBottom = "38px";
    } else if (!value) {
      login.style.border = "1px solid #999";
      document.querySelector(".username").innerHTML = " ";
    } else {
      document.querySelector(".username").innerHTML = " ";
      login.style.border = "1px solid #6c63ff";
      this.state.cadastro.login = value;
    }
  };

  handleValidatePass = () => {
    const password = document.querySelector("#password");
    const passConfirm = document.querySelector("#passConfirm");

    if (!passConfirm.value || !password.value) {
      passConfirm.style.border = "1px solid #999 ";
      password.style.border = "1px solid #999";
      document.querySelector(".password").innerHTML = " ";
    } else if (password.value !== passConfirm.value) {
      passConfirm.style.border = "1px solid #B73438";
      passConfirm.style.marginBottom = "1px";
      NotificationManager.error(
        "Erro ao Realizar Cadastro",
        "As senhas informadas não correspondem!",
        3000
      );
      document.querySelector(".password").style.marginBottom = "38px";
    } else {
      passConfirm.style.border = "1px solid #6c63ff";
      password.style.border = "1px solid #6c63ff";
      document.querySelector(".password").innerHTML = " ";
      const value = password.value;
      this.state.cadastro.password = value;
    }
  };

  handleSubmit = async () => {
    const concordo = document.getElementById("concordo");
    if (!this.state.cadastro.name || this.state.cadastro.name === " ") {
      document.querySelector("#name").style.border = "1px solid #B73438";
      document.querySelector("#name").style.marginBottom = "1px";
      NotificationManager.error(
        "Erro ao Realizar Cadastro",
        "O campo Nome completo é obrigatório",
        3000
      );
      document.querySelector(".name").style.marginBottom = "20px";
    }
    if (!this.state.cadastro.email || this.state.cadastro.email === " ") {
      document.querySelector("#email").style.border = "1px solid #B73438";
      document.querySelector("#email").style.marginBottom = "1px";
      NotificationManager.error(
        "Erro ao Realizar Cadastro",
        "O campo Email é obrigatório",
        3000
      );
      document.querySelector(".email").style.marginBottom = "20px";
    }
    if (!this.state.cadastro.login || this.state.cadastro.login === " ") {
      document.querySelector("#login").style.border = "1px solid #B73438";
      document.querySelector("#login").style.marginBottom = "1px";
      NotificationManager.error(
        "Erro ao Realizar Cadastro",
        "O campo Nome de usuário é obrigatório",
        3000
      );
      document.querySelector(".username").style.marginBottom = "20px";
    }
    if (!this.state.cadastro.email || this.state.cadastro.email === " ") {
      document.querySelector("#email").style.border = "1px solid #B73438";
      document.querySelector("#email").style.marginBottom = "1px";
      NotificationManager.error(
        "Erro ao Realizar Cadastro",
        "O campo Email é obrigatório",
        3000
      );
      document.querySelector(".email").style.marginBottom = "20px";
    }
    if (!this.state.cadastro.password || this.state.cadastro.password === " ") {
      document.querySelector("#password").style.border = "1px solid #B73438";
      document.querySelector("#passConfirm").style.border = "1px solid #B73438";
      document.querySelector("#passConfirm").style.marginBottom = "1px";
      NotificationManager.error(
        "Erro ao Realizar Cadastro",
        "É obrigatório o preenchimento dos campos de senha",
        3000
      );
      document.querySelector(".password").style.marginBottom = "20px";
    }
    if (concordo.checked === false) {
      NotificationManager.error(
        "Erro ao Realizar Cadastro",
        "Para continuar o cadastro, leia e autorize os termos de serviço",
        3000
      );
    } else {
      await api
        .post("/users", this.state.cadastro)
        .then((response) => {
          NotificationManager.success(
            "Erro ao Realizar Cadastro",
            "Cadastro realizado com sucesso",
            500
          );
          this.props.history.push("/login");
        })
        .catch((error) => {
          if (error.response.status === 400) {
            document.querySelector("#login").style.border = "1px solid #B73438";
            document.querySelector("#login").style.marginBottom = "1px";
            document.querySelector("#login").value = "";
            NotificationManager.error(
              "Erro ao Realizar Cadastro",
              "O Nome de usuário ja está sendo utilizado por outra pessoa",
              3000
            );
            document.querySelector(".username").style.marginBottom = "20px";
            document.querySelector("#password").value = "";
            document.querySelector("#passConfirm").value = "";
            this.state.cadastro.password = " ";
          } else {
            alert("Ocorreu algum erro. Por favor, tente novamente");
            NotificationManager.error(
              "Erro ao Realizar Cadastro",
              "Ocorreu algum erro. Por favor, tente novamente",
              3000
            );
          }
        });
    }
  };

  render() {
    return (
      <>
        <Container>
          <NotificationContainer />
          <Image />
          <Form
            abirFechar={this.handleModal}
            validarNome={this.handleValidateName}
            validarSenha={this.handleValidatePass}
            validarEmail={this.handleValidateEmail}
            validarLogin={this.handleLogin}
            submitar={this.handleSubmit}
          />
        </Container>
        <Modal abirFechar={this.handleModal} modal={this.state.modal} />
      </>
    );
  }
}
