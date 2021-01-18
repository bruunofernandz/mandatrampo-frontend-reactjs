import { Container } from "./styles";
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { MdDelete } from "react-icons/md";

import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";

import Dropzone from "react-dropzone";

import api from "../../../../services/api";

class Form extends Component {
  state = {
    user: {},
    file: [],
    service: {
      name: "",
      description: "",
      address: "No-address",
      city: "",
      state: "",
      phone: "",
      celphone: "",
      email: "",
      site: "",
      link_facebook: "",
      link_instagram: "",
      opening_hours: "",
      categories_id: "",
      categories_others: "",
      iswhats: true,
    },

    categoria: {
      name: "",
    },

    list_categories: [],
  };

  async componentDidMount() {
    const { user, service, list_categories } = this.state;

    user.name = localStorage.getItem("nomecompleto");
    user.login = localStorage.getItem("login");
    service.email = localStorage.getItem("email");

    const categorie = await api.get("/categorie");

    this.setState({
      list_categories: categorie.data,
    });
  }

  handleCadastrar = async (e) => {
    e.preventDefault();
    const { service, categoria, file } = this.state;

    try {
      await api.post("services", service).then(async (res) => {
        console.log(res.data);

        if (file) {
          file.forEach(async (node) => {
            const data = new FormData();

            data.append("url", node);
            data.append("services_id", res.data.id);

            await api.post("/services/photo", data).then((res) => {
              return res.data;
            });
          });
        }

        NotificationManager.success(
          "Cadastro feito com sucesso, seu serviço esta em processo de aprovação neste momento !",
          "Muito Bom",
          4000
        );
        document.getElementById("myForm").reset();
        window.location.href='/';
      });

      // await api.post("categorie", categoria);
    } catch (err) {
      NotificationManager.error(`${err.response.data.message}`, "Ops!", 3000);
    }
  };

  handleMultiple = (acceptedFile, rejectFile) => {
    const { file } = this.state;
    const data = new FormData();

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

  render() {
    const { user, service, file, categoria, list_categories } = this.state;

    const enderecos = Object.values(this.props.enderecos);
    const cidades = Object.values(this.props.cidades);

    return (
      <Container>
        <NotificationContainer />
        <div id="btntopo">
          <a href="/">
            <p>VOLTAR</p>
          </a>
        </div>
        <h1 id="desk">MEU SERVIÇO/PEQUENO NEGÓCIO</h1>
        <h1 id="mobi">MEU SERVIÇO/PEQUENO</h1>
        <h1 id="mobi">NEGÓCIO</h1>
        <form id="myForm" onSubmit={this.handleCadastrar}>
          <input
            type="text"
            id="nome"
            placeholder="Nome fantasia*"
            onChange={(e) => (service.name = e.target.value)}
          />
          <input
            type="text"
            id="email"
            placeholder="E-mail"
            value={service.email}
          />
          <input
            type="text"
            id="tel"
            placeholder="Telefone de contato"
            onChange={(e) => (service.phone = e.target.value)}
          />
          <span className="whatsapp">
            <input
              type="text"
              id="cel"
              placeholder="DDD + celular"
              onChange={(e) => {
                user.celphone = e.target.value;
              }}
            />
            <input
              id="chec"
              name="iswhats"
              type="checkbox"
              onChange={(e) => {
                user.iswhats = e.target.checked;

                if (user.iswhats === true) {
                  console.log(true);
                } else {
                  console.log(false);
                }
              }}
            />{" "}
            <p id="textcheck">Contato por WhatsApp?</p>
          </span>
          <br></br>

          <select
            name="estado"
            id="estado"
            onChange={(e) => {
              this.props.getUf();
              service.state = e.target.value;
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
            name="cidade"
            id="cidade"
            disabled
            onChange={(e) => (service.city = e.target.value)}
          >
            <option value="" disabled selected>
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
            id="site"
            placeholder="Site"
            onChange={(e) => (service.site = e.target.value)}
          />

          <select
            name="categoria2"
            id="categoria2"
            required
            onChange={(e) => {
              console.log(e.target.value);
              service.categories_id = e.target.value;
            }}
          >
            <option className="defaultValue" value="" disabled selected>
              Categoria
            </option>

            {list_categories.map((cat) => {
              return (
                <option key={cat.id} value={cat.id}>
                  {cat.name}
                </option>
              );
            })}
          </select>

          <input
            type="text"
            id="categoria"
            placeholder="Outras Categorias"
            onChange={(e) => {
              service.categories_others = e.target.value;
              categoria.name = e.target.value;
            }}
          />
          <input
            type="text"
            id="hora"
            placeholder="Horário de atendimento"
            onChange={(e) => (service.opening_hours = e.target.value)}
          />
          <input
            type="text"
            id="insta"
            placeholder="Nome do perfil do Instagram"
            onChange={(e) => (service.link_instagram = e.target.value)}
          />
          <input
            type="text"
            id="face"
            placeholder="Link do Facebook"
            onChange={(e) => (service.link_facebook = e.target.value)}
          />
          <div id="addFoto">
            <textarea
              placeholder="Fale mais sobre seu negócio pra gente..."
              id="descricao"
              name="descricao"
              rows="8"
              cols="100"
              onChange={(e) => (service.description = e.target.value)}
            />

            <div className="dropzone">
              <Dropzone onDrop={this.handleMultiple}>
                {({ getRootProps, getInputProps }) => (
                  <section>
                    <div {...getRootProps()}>
                      <input name="url" {...getInputProps()} />
                      <label for="avatar">
                        <div className="perfil">
                          <p>
                            Adicione ou arraste aqui fotos de seus produtos ou
                            de seus serviços prestados
                          </p>
                          +
                        </div>
                      </label>
                    </div>
                  </section>
                )}
              </Dropzone>
            </div>
          </div>
          {file.length > 0 ? (
            <div className="previewImage">
              {file.map((foto) => (
                <div>
                  <img
                    key={foto.name}
                    src={foto.preview}
                    height="50"
                    alt={foto.path}
                  />

                  <button
                    type="button"
                    onClick={() => {
                      file.filter((img, index) => {
                        if (img === foto) {
                          file.splice(index, 1);
                        }

                        return index;
                      });

                      this.setState({
                        file: file,
                      });
                    }}
                  >
                    <MdDelete size={22} color="#ff4141" />
                  </button>
                </div>
              ))}
            </div>
          ) : null}
          <div className="groupButton">
            <button
              type="button"
              onClick={(e) => (window.location.href = "/tipocadastro")}
            >
              Voltar
            </button>
            <button type="submit">FINALIZAR</button>
          </div>
        </form>
      </Container>
    );
  }
}

export default withRouter(Form);
