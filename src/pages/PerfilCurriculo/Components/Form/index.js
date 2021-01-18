import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";

import { Formik, ErrorMessage } from "formik";
import schema from "./schema";

import "react-notifications/lib/notifications.css";

import { Container } from "./styles";
import api from "../../../../services/api";
import { validate } from "email-validator";

class Form extends Component {
  state = {
    file: null,

    iswhats: false,
    name: "",
    login: "",
    email: "",
    phone: "",
    celphone: "",
    address: "No-address",
    state: "",
    city: "",

    curriculos: {},
    curriculoInfo: {},

    profession_others: "",
    experience_time: "",
    profession_id: "",
    link_mediasocial: "",
    description: "",
  };

  async componentDidMount() {
    // const { user } = this.state;

    this.state.name = localStorage.getItem("nomecompleto");
    this.state.login = localStorage.getItem("login");
    this.state.email = localStorage.getItem("email");

    const id = localStorage.getItem("id");
    const responseCurriculo = await api
      .get(`/curriculum/${id}/user`)
      .then((res) => res.data);

    const response = await api
      .get(`curriculum/${responseCurriculo.id}/details`)
      .then((res) => res.data);
    this.setState({
      curriculoInfo: response.user,
    });

    this.setState({
      curriculos: responseCurriculo,
      profession_others: responseCurriculo.profession_others,
      experience_time: responseCurriculo.experience_time,
      profession_id: responseCurriculo.profession_id,
      link_mediasocial: responseCurriculo.link_mediasocial,
      description: responseCurriculo.description,
      name: response.user.name,
      email: response.user.email,
      phone: response.user.phone,
      celphone: response.user.celphone,
      address: response.user.address,
      state: response.user.state,
      city: response.user.city,
      iswhats: response.user.iswhats,
      file: response.user.avatar_url,
    });
  }

  handleCadastrar = async (e) => {
    e.preventDefault();
    // const { data, file, user } = this.state;

    const usuarios = {
      name: this.state.name,
      email: this.state.email,
      login: this.state.login,
      phone: this.state.phone,
      celphone: this.state.celphone,
      address: this.state.address,
      city: this.state.city,
      state: this.state.state,
      iswhats: this.state.iswhats,
    };

    const curriculum = {
      curriculum: "",
      link_mediasocial: this.state.link_mediasocial,
      description: this.state.description,
      profession_id: this.state.profession_id,
      profession_others: this.state.profession_others,
      experience_time: this.state.experience_time,
    };

    try {
      const responseUser = await api.put("/profile", usuarios, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      const responseCv = await api.put("/curriculum", curriculum, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      // this.state.curriculoInfo ?

      // :
      // // api.post("/curriculum", data, {
      // //   headers: {
      // //     "Content-Type": "application/json",
      // //   },
      // // })

      console.log("teste", responseCv);

      console.log("teste2", responseUser);

      await NotificationManager.success(
        "Cadastro feito com sucesso",
        "Muito Bom",
        4000
      );

      // this.props.history.push("/");
    } catch (err) {
      NotificationManager.error(`${err.response.data.message}`, "Ops!", 3000);
    }
  };

  handleChange = (e) => {
    const { file } = this.state;

    if (e.target.files) {
      if (e.target.files.length !== 0) {
        this.setState({
          file: URL.createObjectURL(e.target.files[0]),
        });

        const data = new FormData();
        data.append("avatar", e.target.files[0]);

        api.patch("/users/avatar", data).then((response) => {
          console.log(response.data);
          return response.data;
        });

        NotificationManager.success(
          "Foto de perfil atualizada",
          "Ótimo!",
          4000
        );
      } else {
        this.setState({
          file: [...file],
        });

        NotificationManager.info(
          "Você precisa selecionar uma foto",
          "Ops!",
          4000
        );
      }
    } else {
      NotificationManager.error(
        "Erro ao salvar a foto",
        "Voce cancelou a foto",
        4000
      );
    }
  };

  handleChangeOtherProfession = (e) => {
    this.setState({
      profession_others: e.target.outraProfissao,
    });
  };

  handleink_mediasocial = (e) => {
    this.setState({
      link_mediasocial: e.target.social,
    });
  };

  handleDescription = (e) => {
    this.setState({
      description: e.target.description,
    });
  };

  handlePhone = (e) => {
    this.setState({
      phone: e.target.phone,
    });
  };

  handleCelphone = (e) => {
    this.setState({
      celphone: e.target.celphone,
    });
  };

  handleCheckbox = (e) => {
    this.setState({
      iswhats: e.target.iswhats,
    });
  };
  render() {
    const enderecos = Object.values(this.props.enderecos);
    const cidades = Object.values(this.props.cidades);
    const professions = Object.values(this.props.professions);

    const { data, file, user } = this.state;
    return (
      <Container>
        <NotificationContainer />

        <h1>Meu Perfil Para Currículo</h1>

        <Formik
          initialValues={{
            name: "",
            email: "",
            phone: "",
            estado: "",
            cidade: "",
            profissao: "",
          }}
          validationSchema={schema}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ handleSubmit, handleChange }) => (
            <form id="myForm" onSubmit={(e) => this.handleCadastrar(e)}>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Nome completo"
                value={this.state.name}
                disabled
                required
              />
              <ErrorMessage name="name" />

              <input
                type="text"
                id="email"
                name="email"
                placeholder="E-mail"
                value={this.state.email}
                disabled
                required
              />
              <ErrorMessage name="email" />

              <input
                type="number"
                id="phone"
                name="phone"
                placeholder="Telefone de contato"
                value={this.state.phone}
                onChange={(e) => {
                  this.handlePhone(e);
                }}
              />

              <ErrorMessage name="phone" />

              <span className="whatsapp">
                <input
                  type="number"
                  id="celphone"
                  name="celphone"
                  value={this.state.celphone}
                  placeholder="DDD + celular"
                  onChange={(e) => {
                    this.handleCelphone(e);
                  }}
                />
                <input
                  name="iswhats"
                  type="checkbox"
                  id="iswhats"
                  defaultChecked="true"
                  onChange={(e) => {
                    this.handleCheckbox(e);
                  }}
                />
                Contato por WhatsApp?
              </span>

              <select
                name="estado"
                id="estado"
                onChange={(e) => {
                  this.props.getUf();
                }}
              >
                {this.state.state ? (
                  <option value={this.state.state} disabled selected>
                    {this.state.state}
                  </option>
                ) : (
                  <option value="" disabled selected>
                    UF
                  </option>
                )}
                {enderecos.map((endereco) => {
                  return (
                    <option key={endereco.id} values={endereco.sigla}>
                      {endereco.sigla}
                    </option>
                  );
                })}
              </select>

              <ErrorMessage name="estado" />

              <select
                //required
                name="cidade"
                id="cidade"
                onChange={(e) => {
                  if (e.target.value !== "") {
                    this.setState({
                      city: e.target.value,
                    });
                  } else {
                    NotificationManager.error(
                      "Voce precisa colocar sua cidade",
                      "Ops!",
                      3000
                    );
                  }
                }}
                disabled
              >
                {this.state.curriculoInfo.city ? (
                  <option
                    disabled
                    selected
                    value={this.state.curriculoInfo.city}
                  >
                    {this.state.curriculoInfo.city}
                  </option>
                ) : (
                  <option disabled selected value="">
                    Cidade
                  </option>
                )}
                {cidades.map((cidade) => {
                  return (
                    <option key={cidade.id} values={cidade.nome}>
                      {cidade.nome}
                    </option>
                  );
                })}
              </select>

              <ErrorMessage name="cidade" />

              <input
                type="text"
                id="social"
                placeholder="Linkedin"
                value={this.state.link_mediasocial}
                onChange={(e) => {
                  this.handleink_mediasocial(e);
                }}
              />
              <select name="profissao" id="profissao">
                {this.state.profession_id ? (
                  <option value={this.state.profession_id} disabled selected>
                    {this.state.curriculos.professions.name}
                  </option>
                ) : (
                  <option value="" disabled selected>
                    Profissão
                  </option>
                )}
                {professions.map((profession) => {
                  return (
                    <option key={profession.id} value={profession.id}>
                      {profession.name}
                    </option>
                  );
                })}
              </select>

              <ErrorMessage name="profissao" />

              <input
                className="middle"
                type="text"
                id="outraProfissao"
                name="outraProfissao"
                value={this.state.profession_others}
                onChange={(e) => {
                  this.handleChangeOtherProfession(e);
                }}
                placeholder="Outra profissão"
              />

              <select
                required
                className="middle"
                name="experiencia"
                id="experiencia"
              >
                {this.state.experience_time ? (
                  <option value={this.state.experience_time} disabled selected>
                    {this.state.experience_time}
                  </option>
                ) : (
                  <option value="" disabled selected>
                    Tempo de exp.
                  </option>
                )}
                <option value="Não tenho experiência">
                  Não tenho experiência
                </option>
                <option value="1 a 3 anos">1 a 3 anos</option>
                <option value="4 a 9 anos">4 a 9 anos</option>
                <option value="+10 anos">+10 anos</option>
              </select>
              <div id="addFoto">
                <p className="photo">
                  Clique abaixo e adicione uma foto de perfil
                </p>
                <div className="dropzone">
                  <label for="avatar">
                    <div className="perfil">
                      <img
                        src={
                          this.state.curriculoInfo.avatar_url
                            ? this.state.curriculoInfo.avatar_url
                            : this.state.file
                        }
                        className="imgAvatar"
                        alt=""
                      />

                      <p className="plus">+</p>

                      <input
                        type="file"
                        name="avatar"
                        id="avatar"
                        onChange={this.handleChange}
                        onAbort={this.handleAbortAvatar}
                      />
                    </div>
                  </label>
                </div>
                <textarea
                  required
                  placeholder="Fale mais sobre você para gente..."
                  id="descricao"
                  name="descricao"
                  rows="5"
                  cols="100"
                  value={this.state.description}
                  onChange={(e) => {
                    this.handleDescription(e);
                  }}
                />
              </div>

              <div className="groupButton">
                <button
                  type="button"
                  onClick={(e) => (window.location.href = "/tipocadastro")}
                >
                  Voltar
                </button>
                <button type="submit">Finalizar</button>
              </div>
            </form>
          )}
        </Formik>
      </Container>
    );
  }
}

export default withRouter(Form);
