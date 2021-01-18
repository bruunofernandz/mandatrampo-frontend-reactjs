import React, { Component } from "react";

import { Container, Form, Row } from "./styles";

import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";

import Img from "../../assets/cadastro.png"

import EmailValidator from "email-validator";

import Enderecos from "../../services/enderecos";
import Api from "../../services/api";

import { getToken } from "../../auth";

import Header from "../../Components/Header";
import Footer from "../../Components/NFooter";

export default class Curriculo extends Component {
  state = {
    curriculoInfo: {},
    curriculos: {},
    enderecos: [],
    cidades: [],
    professions: [],
    link_mediasocial: "", // cv
    description: "", // cv
    profession_id: "", // cv
    profession_name: "",
    profession_others: "", // cv
    experience_time: "", // cv
    name: localStorage.getItem("nomecompleto"), // profile
    email: localStorage.getItem("email"), // profile
    login: localStorage.getItem("login"), // profile
    phone: "", // profile
    celphone: "", // profile
    address: "", // profile
    city: "", // profile
    state: "", // profile
    iswhats: false, // profile
    avatar_url: null, // profile
    avatar: null,
    cv: false,
  };

  async componentDidMount() {
    const responseEnderecos = await Enderecos.get("/estados");
    const enderecos = Object.values(responseEnderecos.data);

    this.setState({ enderecos: enderecos });

    const responseProfessions = await Api.get("/profession");
    const profession = Object.values(responseProfessions.data);

    this.setState({ professions: profession });

    const id = localStorage.getItem("id");
    const responseCurriculo = await Api.get(`/curriculum/${id}/user`).then(
      (res) => res.data
    );

    const response = await Api.get(
      `curriculum/${responseCurriculo.id}/details`
    ).then((res) => res.data);
    this.setState({
      curriculoInfo: response.user,
      curriculos: response,
    });

    this.setState({
      address: this.state.curriculoInfo.address,
      avatar: this.state.curriculoInfo.avatar,
      avatar_url: this.state.curriculoInfo.avatar_url,
      celphone: this.state.curriculoInfo.celphone,
      city: this.state.curriculoInfo.city,
      email: this.state.curriculoInfo.email,
      iswhats: this.state.curriculoInfo.iswhats,
      name: this.state.curriculoInfo.name,
      phone: this.state.curriculoInfo.phone,
      state: this.state.curriculoInfo.state,

      cv: this.state.curriculos.profession_id ? true : false,

      link_mediasocial: this.state.curriculos.link_mediasocial,
      profession_id: this.state.curriculos.profession_id,
      profession_name: this.state.curriculos.professions.name,
      profession_others: this.state.curriculos.profession_others,
      description: this.state.curriculos.description,
    });
  }


  handleValidate = () => {
    const regexp = /[^a-z A-ZáàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]/g;
    const hegex = /[^0-9]/g;
    if (this.state.name.match(regexp)) {
      NotificationManager.error(
        "Erro ao Realizar Cadastro",
        "O nome não pode possuir números ou caractéres especiais",
        3000
      );
      return false;
    } if (!EmailValidator.validate(this.state.email)){
      NotificationManager.error(
        "O E-mail informado não é valido",
        "Ops",
        4000
      );
      return false;
    }
    // } if (this.state.profession_others.match(regexp)) {
    //   NotificationManager.error(
    //     "Erro ao Realizar Cadastro",
    //     "O nome da profissão não pode possuir números ou caractéres especiais",
    //     3000
    //   );    }
      if (this.state.celphone !== null && this.state.celphone !== '' &&  this.state.celphone.match(hegex)) {
        NotificationManager.error(
          "Erro ao Realizar Cadastro",
          "O número de celular deve seguir o padrão 11999999999",
          3000
        );
        return false;
      } if (this.state.celphone !== null && this.state.celphone !== '' && this.state.celphone.length !== 11) {
          NotificationManager.error(
          "Informe DDD e número juntos",
          "O número de celular deve seguir o padrão 11999999999",
          3000
        );
        return false;
      }  if (this.state.phone !== null && this.state.phone !== '' && this.state.phone.match(hegex)) {
        NotificationManager.error(
        "Erro ao Realizar Cadastro",
        "O número de celular deve seguir o padrão 1135353535",
        3000
      );
      return false;
    } if (this.state.phone !== null && this.state.phone !== '' && this.state.phone.length !== 10) {
        NotificationManager.error(
        "Informe DDD e número juntos",
        "O número de celular deve seguir o padrão 1135353535",
        3000
      );
      return false;
    } if (this.state.profession_id === '' || this.state.profession_id === null) {
        NotificationManager.error(
        "Erro ao Realizar Cadastro",
        "O campo profissão é obrigatório",
        3000
      );
      return false;
    } if (this.state.state === '' || this.state.state === null) {
      NotificationManager.error(
        "Erro ao Realizar Cadastro",
        "O campo estado é obrigatório",
        3000
      );
      return false;
    } if (this.state.city === '' || this.state.city === null) {
      NotificationManager.error(
        "Erro ao Realizar Cadastro",
        "O campo cidade é obrigatório",
        3000
      );
      return false;
    } if (this.state.experience_time === '' || this.state.experience_time === null) {
      NotificationManager.error(
        "Erro ao Realizar Cadastro",
        "O campo experiencia é obrigatório",
        3000
      );
      return false;
    } if (this.state.description === '' || this.state.description === null) {
      NotificationManager.error(
        "Erro ao Realizar Cadastro",
        "O campo descrição é obrigatório",
        3000
      );
      return false;
    } if (this.state.description.length > 240) {
      NotificationManager.error(
        "Erro ao Realizar Cadastro",
        "O campo descrição deve conter até 240 caracteres",
        3000
      );
      return false;
    }
    else {
      return true;
    }
  }


  handlePost = async (e) => {
    if (!this.handleValidate()) {
      return;
    } else {
      const {
        link_mediasocial,
        description,
        profession_id,
        profession_others,
        experience_time,
        name,
        email,
        login,
        phone,
        celphone,
        address,
        city,
        state,
        iswhats,
        avatar_url,
      } = this.state;

      let profile = {
        name,
        email,
        login,
        phone,
        celphone,
        address,
        city,
        state,
        iswhats,
      };

      let cv = {
        link_mediasocial,
        description,
        profession_id,
        profession_others,
        experience_time,
      };

      profile = JSON.stringify(profile);
      cv = JSON.stringify(cv);

      await Api.put("/profile", profile, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getToken()}`,
        },
      })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          NotificationManager.error(
            "Erro ao Realizar Cadastro",
            "Tente Novamente",
            4000
          );
        });

      await Api.post("/curriculum", cv, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getToken()}`,
        },
      })
        .then((response) => {
          NotificationManager.success(
            "Currículo Cadastrado Com Sucesso",
            "Ótimo!",
            4000
          );

          setInterval(function(){
            window.location.href = "/"
          }, 5000);
        })
        .catch((error) => {
          NotificationManager.error(
            "Erro ao Realizar Cadastro",
            "Tente Novamente",
            4000
          );
        });
    }
  };

  handlePut = async (e) => {
    if (!this.handleValidate()) {
      return;
    } else {
      const {
        link_mediasocial,
        description,
        profession_id,
        profession_others,
        experience_time,
        name,
        email,
        login,
        phone,
        celphone,
        address,
        city,
        state,
        iswhats,
        avatar_url,
      } = this.state;

      let profile = {
        name,
        email,
        login,
        phone,
        celphone,
        address,
        city,
        state,
        iswhats,
      };

      let cv = {
        link_mediasocial,
        description,
        profession_id,
        profession_others,
        experience_time,
      };

      profile = JSON.stringify(profile);
      cv = JSON.stringify(cv);

      await Api.put("/profile", profile, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getToken()}`,
        },
      })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          NotificationManager.error(
            "Erro ao Realizar Atualização",
            "Tente Novamente",
            4000
          );
        });

      await Api.put("/curriculum", cv, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getToken()}`,
        },
      })
      .then((response) => {
        NotificationManager.success(
          "Currículo Atualizado Com Sucesso",
          "Ótimo!",
          4000
        );

        setInterval(function(){
          window.location.href = "/"
        }, 5000);
      })
      .catch((error) => {
        NotificationManager.error(
          "Erro ao Realizar Atualização",
          "Tente Novamente",
          4000
        );
      });
    }
  };

  handleChangeName = (e) => {
    // const regexp = /[^a-z A-ZáàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]/g;
    this.setState({
      name: e.target.value,
    });

    // if (e.target.value.match(regexp)) {
    //   NotificationManager.error(
    //     "Erro ao Realizar Cadastro",
    //     "O nome não pode possuir números ou caractéres especiais",
    //     3000
    //   );
    // }
  };

  handleChangeEmail = (e) => {
    this.setState({
      email: e.target.value,
    });
    // if (!EmailValidator.validate(e.target.value)){
    //   NotificationManager.error(
    //     "O E-mail informado não é valido",
    //     "Ops",
    //     4000
    //   );
    // }
  };

  handleChangePhone = (e) => {
    // const hegex = /[^0-9]/g;
    this.setState({
      phone: e.target.value,
    });
  //   if (e.target.value.match(hegex)) {
  //     NotificationManager.error(
  //     "Erro ao Realizar Cadastro",
  //     "O número de celular deve seguir o padrão 1135353535",
  //     3000
  //   );
  // } if (e.target.value.length !== 10) {
  //     NotificationManager.error(
  //     "Informe DDD e número juntos",
  //     "O número de celular deve seguir o padrão 1135353535",
  //     3000
  //   );
  // }
  };

  handleChangeCelPhone = (e) => {
    // const hegex = /[^0-9]/g;
    this.setState({
      celphone: e.target.value,
    });
    // if (e.target.value.match(hegex)) {
    //     NotificationManager.error(
    //     "Erro ao Realizar Cadastro",
    //     "O número de celular deve seguir o padrão 11999999999",
    //     3000
    //   );
    // } if (e.target.value.length !== 11) {
    //     NotificationManager.error(
    //     "Informe DDD e número juntos",
    //     "O número de celular deve seguir o padrão 11999999999",
    //     3000
    //   );
    // }
  };

  handleChangeIswhats = (e) => {
    if (document.querySelector("#iswhats").checked === true) {
      this.setState({
        iswhats: true,
      });
    } else {
      this.setState({
        iswhats: false,
      });
    }
  };

  getUf = async () => {
    const uf = document.querySelector("#state").value;
    document.querySelector("#city").removeAttribute("disabled");

    const response = await Enderecos.get(`/estados/${uf}/municipios`);

    this.setState({ cidades: response.data });
  };

  handleChange = async (e) => {
    const { file } = this.state;

    if (e.target.files) {
      if (e.target.files.length !== 0) {
        this.setState({
          file: URL.createObjectURL(e.target.files[0]),
        });

        const data = new FormData();
        data.append("avatar", e.target.files[0]);

        Api.patch("/users/avatar", data).then((response) => {
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

  handleChangeState = (e) => {
    this.setState({
      state: e.target.value,
    });
    this.getUf();
  };

  handleChangeCity = (e) => {
    this.setState({
      city: e.target.value,
    });
  };

  handleChangeMediaSocial = (e) => {
    this.setState({
      link_mediasocial: e.target.value,
    });
  };

  handleChangeProfessions = (e) => {
    this.setState({
      profession_id: e.target.value,
    });
  };

  handleChangeOtherProfession = (e) => {
    // const regexp = /[^a-z A-ZáàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]/g;
    this.setState({
      profession_others: e.target.value,
    });
    // if (e.target.value.match(regexp)) {
    //   NotificationManager.error(
    //     "Erro ao Realizar Cadastro",
    //     "O nome da profissão não pode possuir números ou caractéres especiais",
    //     3000
    //   );
    // }
  };

  handleChangeExperience = (e) => {
    this.setState({
      experience_time: e.target.value,
    });
  };

  handleChangeDescription = (e) => {
    this.setState({
      description: e.target.value,
    });
    // if (e.target.value === '' || e.target.value === null) {
    //   NotificationManager.error(
    //     "Erro ao Realizar Cadastro",
    //     "O campo descrição é obrigatório",
    //     3000
    //   );
    // } if (e.target.value.length > 240) {
    //   NotificationManager.error(
    //     "Erro ao Realizar Cadastro",
    //     "O campo descrição deve conter até 240 caracteres",
    //     3000
    //   );
    // }
  };

  handleChangeAvatar = (e) => [
    this.setState({
      avatar_url: e.target.value,
    }),
  ];

  render() {
    return (
      <>
        <Header
          isHome
          isloged
          userimg={this.state.userimg}
          addIcons={this.state.addIcons}
        />
         <Container img={Img}>
          <NotificationContainer />

          <div className="img" >

          </div>

          <Form>
            <h1>Meu Perfil</h1>
            <Row>
              <div>
                <label>Nome:</label>
                <input
                  className="name"
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Nome Completo"
                  value={this.state.name}
                  onChange={(e) => this.handleChangeName(e)}
                  required
                />
              </div>
              <div>
                <label>Email:</label>
                <input
                  className="email"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="E-mail"
                  value={this.state.email}
                  onChange={(e) => this.handleChangeEmail(e)}
                  required
                />
              </div>
            </Row>

            <Row>
              <div>
                <label>Telefone:</label>
                <input
                  className="telefone"
                  type="number"
                  name="phone"
                  id="phone"
                  placeholder="DDD + Telefone Fixo"
                  value={this.state.phone}
                  onChange={(e) => this.handleChangePhone(e)}
                />
              </div>

              <div className="wrapper-celular">
                <label>Celular:</label>
                <input
                  className="celular"
                  type="number"
                  name="celphone"
                  id="celphone"
                  placeholder="DDD + Celular"
                  value={this.state.celphone}
                  onChange={(e) => this.handleChangeCelPhone(e)}
                />

                <label htmlFor="iswhats">Contato por WhatsApp?</label>
                <input
                  className="whats"
                  type="checkbox"
                  name="iswhats"
                  id="iswhats"
                  defaultChecked={true}
                  onChange={(e) => this.handleChangeIswhats(e)}
                />
              </div>
            </Row>

            <Row>
              <select
                className="estado"
                name="state"
                id="state"
                required
                onChange={(e) => this.handleChangeState(e)}
              >
                <option value={this.state.state} selected disabled>
                  {this.state.state ? this.state.state : "UF"}
                </option>
                {this.state.enderecos.map((estado) => {
                  return (
                    <option key={estado.id} value={estado.sigla}>
                      {estado.sigla}
                    </option>
                  );
                })}
              </select>
              <select
                className="cidade"
                name="city"
                id="city"
                required
                disabled
                onChange={(e) => this.handleChangeCity(e)}
              >
                <option value={this.state.city} selected disabled>
                  {this.state.city ? this.state.city : "Cidade"}
                </option>
                {this.state.cidades.map((cidade) => {
                  return (
                    <option key={cidade.id} value={cidade.nome}>
                      {cidade.nome}
                    </option>
                  );
                })}
              </select>

              <input
                className="redesocial"
                type="text"
                name="link_mediasocial"
                id="link_mediasocial"
                placeholder="Linkedin"
                value={this.state.link_mediasocial}
                onChange={(e) => this.handleChangeMediaSocial(e)}
              />
            </Row>

            <Row>
              <select
                className="profissao"
                name="profession_id"
                id="profession_id"
                required
                onChange={(e) => this.handleChangeProfessions(e)}
              >
                <option value={this.state.profession_id} selected disabled>
                  {this.state.profession_id
                    ? this.state.profession_name
                    : "Profissão"}
                </option>
                {this.state.professions.map((profession) => (
                  <option key={profession.id} value={profession.id}>
                    {profession.name}
                  </option>
                ))}
              </select>

              <input
                className="profissao_outros"
                type="text"
                name="profession_others"
                id="profession_others"
                placeholder="Outra Profissão"
                value={this.state.profession_others}
                required
                onChange={(e) => this.handleChangeOtherProfession(e)}
              />

              <select
                className="experiencia"
                name="experience_time"
                id="experience_time"
                required
                onChange={(e) => this.handleChangeExperience(e)}
              >
                <option value="" disabled selected>
                  Experiência
                </option>
                <option value="Não tenho experiência">
                  Não tenho experiência
                </option>
                <option value="1 a 3 anos">1 a 3 anos</option>
                <option value="4 a 9 anos">4 a 9 anos</option>
                <option value="+10 anos">+10 anos</option>
              </select>
            </Row>

            <Row>
              <div className="wrapper-foto">
                <label className="titulo-foto">Adicionar Foto de Perfil</label>
                <input
                  className="arquivo"
                  type="file"
                  name="avatar_url"
                  id="avatar_url"
                  onChange={(e) => this.handleChange(e)}
                />
              </div>
              {/* {this.state.avatar_url ? (
              <img src={this.state.avatar_url} alt="" />
            ) : (
              <p>Você n possui foto de perfil</p>
            )} */}
            </Row>

            <textarea
              className="descricao"
              name="description"
              id="description"
              cols="100"
              rows="5"
              placeholder="Fale mais sobre você para gente..."
              value={this.state.description}
              onChange={(e) => this.handleChangeDescription(e)}
            ></textarea>

            <div>
              <button
                className="button"
                type="button"
                onClick={(e) => (window.location.href = "/tipocadastro")}
              >
                Voltar
              </button>

              {this.state.cv ? (
                <button
                  className="button"
                  type="button"
                  onClick={(e) => this.handlePut()}
                  id=""
                >
                  Editar
                </button>
              ) : (
                <button
                  className="button"
                  type="button"
                  onClick={(e) => this.handlePost()}
                  id=""
                >
                  Cadastrar
                </button>
              )}
            </div>
          </Form>
        </Container>
        <Footer />
      </>
    );
  }
}
