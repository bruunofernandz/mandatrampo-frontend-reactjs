import React, { Component } from "react";

import { Container, Form, Row } from "./styles";

import { MdDelete } from "react-icons/md";

import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";

import EmailValidator from "email-validator";

import Enderecos from "../../services/enderecos";
import Api from "../../services/api";

import Dropzone from "react-dropzone";

import { getToken } from "../../auth";

import Img from "../../assets/servico.png"

import Header from "../../Components/Header";
import Footer from "../../Components/NFooter";

export default class Curriculo extends Component {
  state = {
    servico: false,
    curriculoInfo: {},
    curriculos: {},
    enderecos: [],
    cidades: [],
    categories: [],
    login: localStorage.getItem("login"), // profile
    file: [],

    name: '',
    description: '',
    city: '',
    state: '',
    phone: '',
    celphone: '',
    email: '',
    site: '',
    link_facebook: '',
    link_instagram: '',
    opening_hours: '',
    categories_id: '',
    categories_others: '',
    iswhats: false,

    categories_name: '' // n envia,
  };

  async componentDidMount() {
    const responseEnderecos = await Enderecos.get("/estados");
    const enderecos = Object.values(responseEnderecos.data);

    this.setState({ enderecos: enderecos });

    const responseCategorie = await Api.get("/categorie");
    const categorie = Object.values(responseCategorie.data);

    this.setState({ categories: categorie });

    const id = localStorage.getItem("id");
    const responseServico = await Api.get(`/services/${id}/user`).then(
      (res) => res.data[0]
    );

    console.log(responseServico)

    if (responseServico) {
      this.setState({
        servico: responseServico ? true : false,
        categories_id: responseServico.categories_id,
        categories_name: responseServico.categories.name,
        categories_others: responseServico.categories_others,
        celphone: responseServico.celphone,
        city: responseServico.city,
        description: responseServico.description,
        email: responseServico.email,
        iswhats: responseServico.iswhats,
        link_facebook: responseServico.link_facebook,
        link_instagram: responseServico.link_instagram,
        name: responseServico.name,
        opening_hours: responseServico.opening_hours,
        site: responseServico.site,
        state: responseServico.state,

        file: responseServico.photo,
      });
    }
    console.log(this.state.file)
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
      if (this.state.celphone !== null && this.state.celphone !== '' && this.state.celphone.match(hegex)) {
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
      }
        if (this.state.phone !== null && this.state.phone !== '' && this.state.phone.match(hegex)) {
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
    } if (this.state.categories_id === '' || this.state.categories_id === null) {
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
    }
    // if (this.state.opening_hours === '' || this.state.opening_hours === null) {
    //   NotificationManager.error(
    //     "Erro ao Realizar Cadastro",
    //     "O campo experiencia é obrigatório",
    //     3000
    //   );
    // }
     if (this.state.description === '' || this.state.description === null) {
      NotificationManager.error(
        "Erro ao Realizar Cadastro",
        "O campo descrição é obrigatório",
        3000
      );
    } if (this.state.description.length > 240) {
      NotificationManager.error(
        "Erro ao Realizar Cadastro",
        "O campo descrição deve conter até 240 caracteres",
        3000
      );
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
        name,
        description,
        city,
        state,
        phone,
        celphone,
        email,
        site,
        link_facebook,
        link_instagram,
        opening_hours,
        categories_id,
        categories_others,
        iswhat
      } = this.state;

      let service = {
        name,
        description,
        city,
        state,
        phone,
        celphone,
        email,
        site,
        link_facebook,
        link_instagram,
        opening_hours,
        categories_id,
        categories_others,
        iswhat
      };

      service = JSON.stringify(service);

      await Api.post("/services", service, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getToken()}`,
        },
      })

        .then((response) => {
          if (this.state.file) {
            this.state.file.forEach(async (node) => {
              const data = new FormData();

              data.append("url", node);
              data.append("services_id", response.data.id);

              await Api.post("/services/photo", data).then((response) => {
                return response.data;
              });
            });
          }
          NotificationManager.success(
            "Cadastro feito com sucesso, seu serviço esta em processo de aprovação neste momento !",
            "Muito Bom",
            4000
          );

          setInterval(function(){
            window.location.href = "/"
          }, 5000);
        })
        .catch((error) => {
          NotificationManager.error(`${error.response.data.message}`, "Ops!", 3000);
        });
    }
  };

  handlePut = async (e) => {
    if (!this.handleValidate()) {
      return;
    } else {
      const {
        name,
        description,
        city,
        state,
        phone,
        celphone,
        email,
        site,
        link_facebook,
        link_instagram,
        opening_hours,
        categories_id,
        categories_others,
        iswhat
      } = this.state;

      let service = {
        name,
        description,
        city,
        state,
        phone,
        celphone,
        email,
        site,
        link_facebook,
        link_instagram,
        opening_hours,
        categories_id,
        categories_others,
        iswhat
      };

      service = JSON.stringify(service);

      await Api.put("/services", service, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getToken()}`,
        },
      })

        .then((response) => {
          // if (this.state.file) {
          //   this.state.file.forEach(async (node) => {
          //     const data = new FormData();

          //     data.append("url", node);
          //     data.append("services_id", response.data.id);

          //     await Api.post("/services/photo", data).then((response) => {
          //       return response.data;
          //     });
          //   });
          // }
          NotificationManager.success(
            "Cadastro feito com sucesso, seu serviço esta em processo de aprovação neste momento !",
            "Muito Bom",
            4000
          );

          setInterval(function(){
            window.location.href = "/"
          }, 5000);
        })
        .catch((error) => {
          NotificationManager.error(`${error.response.data.message}`, "Ops!", 3000);
          console.log(error.response.data)
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
    //const hegex = /[^0-9]/g;
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
      NotificationManager.success(
            "Fotos adicionadas",
            "Sucesso",
            3000
           );
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

  handleMultiple = (acceptedFile, rejectFile) => {
    const { file } = this.state;
    const data = new FormData();

    console.log(acceptedFile)

    if (acceptedFile && acceptedFile.length < 6) {

      this.setState({
        file: acceptedFile.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        ),
      });
    } else {
      NotificationManager.error("O número máximo é de 5 fotos", "Ops!", 4000);
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

  handleChangeSite = (e) => {
    this.setState({
      site: e.target.value,
    });
  };

  handleChangeInstagram = (e) => {
    this.setState({
      link_instagram: e.target.value,
    });
  };

  handleChangeFacebook = (e) => {
    this.setState({
      link_facebook: e.target.value,
    });
  };

  handleChangeCategories = (e) => {
    this.setState({
      categories_id: e.target.value,
    });
  };

  handleChangeOtherCategorie = (e) => {
    const regexp = /[^a-z A-ZáàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]/g;
    this.setState({
      categories_others: e.target.value,
    });
    if (e.target.value.match(regexp)) {
      NotificationManager.error(
        "Erro ao Realizar Cadastro",
        "O nome da categoria não pode possuir números ou caractéres especiais",
        3000
      );
    }
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

  handleChangeHours = (e) => {
    this.setState({
      opening_hours: e.target.opening_hours
    })
  }

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
            <h1>Meu Serviço</h1>
            <Row>
              <div>
                <label>Serviço:</label>
                <input
                  className="name"
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Nome Fantasia"
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
                name="site"
                id="site"
                placeholder="Site"
                value={this.state.site}
                onChange={(e) => this.handleChangeSite(e)}
              />
            </Row>

            <Row>
              <select
                className="profissao"
                name="categories_id"
                id="categories_id"
                required
                onChange={(e) => this.handleChangeCategories(e)}
              >
                <option value={this.state.categories_id} selected disabled>
                  {this.state.categories_id
                    ? this.state.categories_name
                    : "Categoria"}
                </option>
                {this.state.categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>

              <input
                className="profissao_outros"
                type="text"
                name="profession_others"
                id="profession_others"
                placeholder="Outras Categorias"
                value={this.state.categories_others}
                required
                onChange={(e) => this.handleChangeOtherCategorie(e)}
              />

              <input
                className="experiencia"
                type="text"
                name="opening_hours"
                id="opening_hours"
                placeholder="Horários"
                value={this.state.opening_hours}
                required
                onChange={(e) => this.handleChangeHours(e)}
              />
            </Row>

            <Row>
            <input
                className="redesocial"
                type="text"
                name="link_instagram"
                id="link_instagram"
                placeholder="Link do Instagram"
                value={this.state.link_instagram}
                required
                onChange={(e) => this.handleChangeInstagram(e)}
              />

              <input
                className="redesocial"
                type="text"
                name="link_facebook"
                id="link_facebook"
                placeholder="Link do Facebook"
                value={this.state.link_facebook}
                required
                onChange={(e) => this.handleChangeFacebook(e)}
              />
            </Row>
            {/* {this.state.servico ? '' : */}
              <div className="dropzone">
                <Dropzone onDrop={this.handleMultiple}>
                  {({ getRootProps, getInputProps }) => (
                    <section>
                      <div className="drop" {...getRootProps()}>
                        <input name="url" {...getInputProps()} />
                        <label for="avatar">
                          <div className="perfil">
                            <p>
                              Clique aqui para adicionar fotos de seus produtos ou
                              de seus serviços prestados<br/>
                            </p>
                            <p>
                            </p>
                          </div>
                        </label>
                      </div>
                    </section>
                  )}
                </Dropzone>
                  </div>
                   {/* } */}

            {this.state.file.length > 0 ? (
            <div className="previewImage">
              {this.state.file.map((foto) => (
                <div>
                  {!this.state.servico ?
                  <img
                    key={foto.name}
                    src={foto.preview}
                    height="50"
                    alt={foto.path}
                  />
                  :
                  <img
                    key={foto.id}
                    src={foto.local_url}
                    height="50"
                    alt={foto.path}
                  />
                  }

                  <button
                    type="button"
                    onClick={() => {
                      this.state.file.filter((img, index) => {
                        if (img === foto) {
                          this.state.file.splice(index, 1);
                        }

                        return index;
                      });

                      this.setState({
                        file: this.state.file,
                      });
                    }}
                  >
                    <MdDelete size={22} color="#ff4141" />
                  </button>
                </div>
              ))}
            </div>
          ) : null}

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

               {this.state.servico ? (
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
