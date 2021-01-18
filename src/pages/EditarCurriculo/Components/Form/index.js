import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";

import "react-notifications/lib/notifications.css";

import { Container } from "./styles";
import api from "../../../../services/api";

class Form extends Component {
  state = {
    editCurriculum: {
      description: "",
      user: {
        avatar_url: "",
      },
    },
    file: null,
    user: {
      name: "",
      login: "",
      email: "",
      phone: "",
      celphone: "",
      address: "No-address",
      state: "",
      city: "",
      iswhats: false,
    },
    data: {
      curriculum: "",
      link_mediasocial: "",
      description: "",
      profession_id: "",
      profession_others: "",
      experience_time: "",
    },
  };

  async componentDidMount() {
    const { user, editCurriculum, file } = this.state;

    user.name = localStorage.getItem("nomecompleto");
    user.login = localStorage.getItem("login");
    user.email = localStorage.getItem("email");

    await api
      .get("/curriculum/ea202cb1-fa7f-485f-abae-400ba3f4e9da/details")
      .then((response) => {
        this.setState({
          editCurriculum: response.data,
        });

        this.setState({
          file: response.data.user.avatar_url,
        });

        return response.data;
      });
  }

  handleCadastrar = async (e) => {
    e.preventDefault();
    const { data, file, user } = this.state;

    try {
      const responseUser = await api.put("/profile", user, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      const responseCv = await api.put("/curriculum", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log(responseCv);

      console.log(responseUser);

      await NotificationManager.success(
        "Currículo editado com sucesso",
        "Muito Bom",
        4000
      );

      this.props.history.push("/");
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

  render() {
    const enderecos = Object.values(this.props.enderecos);
    const cidades = Object.values(this.props.cidades);
    const professions = Object.values(this.props.professions);

    const { data, file, user, editCurriculum } = this.state;

    return (
      <Container>
        <NotificationContainer />

        <h1>Editar Currículo</h1>
        <form id="myForm" onSubmit={this.handleCadastrar}>
          <div className="firstRow">
            <select
              required
              name="estado"
              id="estado"
              onChange={(e) => {
                this.props.getUf();

                user.state = e.target.value;
              }}
            >
              <option value="" disabled selected>
                UF
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
              required
              name="cidade"
              id="cidade"
              onChange={(e) => {
                if (e.target.value !== "") {
                  user.city = e.target.value;
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
              <option disabled selected value="">
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
            <input
              type="text"
              id="rede-social"
              placeholder="Linkedin ou rede social"
              onChange={(e) => {
                e.preventDefault();
                data.link_mediasocial = e.target.value;
              }}
            />
          </div>

          <div className="secondRow">
            <select
              required
              onChange={(e) => {
                e.preventDefault();
                data.profession_id = e.target.value;
              }}
              name="profissao"
              id="profissao"
            >
              <option value="" disabled selected>
                Profissão
              </option>
              {professions.map((profession) => {
                return (
                  <option key={profession.id} value={profession.id}>
                    {profession.name}
                  </option>
                );
              })}
            </select>
            <input
              className="middle"
              type="text"
              id="profissao"
              defaultValue={editCurriculum.profession_others}
              onChange={(e) => {
                e.preventDefault();
                data.profession_others = e.target.value;
              }}
              placeholder="Outra profissão"
            />
            <select
              required
              onChange={(e) => {
                e.preventDefault();
                data.experience_time = e.target.value;
              }}
              className="middle"
              name="experiencia"
              id="experiencia"
            >
              <option value="" disabled selected>
                Tempo de exp.
              </option>
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
                    <img src={this.state.file} className="imgAvatar" alt="" />

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
                className="description"
                required
                placeholder="Fale mais sobre você para gente..."
                id="descricao"
                name="descricao"
                rows="5"
                cols="100"
                defaultValue={editCurriculum.description}
                onChange={(e) => {
                  data.description = e.target.value;
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
              <button type="submit">Salvar</button>
            </div>
          </div>
        </form>
      </Container>
    );
  }
}

export default withRouter(Form);
