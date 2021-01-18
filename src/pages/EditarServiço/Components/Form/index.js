import { Container } from "./styles";
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { Formik, ErrorMessage } from "formik";

import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";

import Dropzone from "react-dropzone";
import validation from "./validation";

import api from "../../../../services/api";

class Form extends Component {
  state = {
    file: [],
    delPhotos: [],
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

    delId: "",
  };

  async componentDidMount() {
    const { service, file, list_categories } = this.state;

    service.email = localStorage.getItem("email");

    const categorie = await api.get("/categorie");

    this.setState({
      list_categories: categorie.data,
    });

    console.log(categorie.data);

    await api
      .get("/services/a0fedd71-1c58-4184-9747-005af14c8e17/details")
      .then((response) => {
        service.id = response.data.id;
        service.name = response.data.name;
        service.description = response.data.description;
        service.city = response.data.city;
        service.state = response.data.state;
        service.phone = response.data.phone;
        service.celphone = response.data.celphone;
        service.email = response.data.email;
        service.site = response.data.site;
        service.link_facebook = response.data.link_facebook;
        service.link_instagram = response.data.link_instagram;
        service.opening_hours = response.data.opening_hours;
        service.categories_id = response.data.categories_id;
        service.categories_others =
          response.data.categories_others == null
            ? ""
            : response.data.categories_others;
        service.iswhats = response.data.iswhats;

        // this.setState({
        //   editService: response.data,
        // });

        this.setState({
          file: response.data.photo,
          delPhotos: response.data.photo,
        });
      });
  }

  handleCadastrar = async (e) => {
    e.preventDefault();
    const { service, categoria, file, delPhotos } = this.state;

    try {
      await api.put("services", service).then(async (res) => {
        // if (delPhotos) {
        //   var node;
        //   for (node of delPhotos) {
        //     if (node) {
        //       await api.post("/services/delphoto", node.id).then((response) => {
        //         return response.data;
        //       });
        //     } else {
        //       continue;
        //     }
        //   }
        // }

        // if (file) {
        //   file.forEach(async (node) => {
        //     const data = new FormData();

        //     data.append("url", node);
        //     data.append("services_id", res.data.id);

        //     await api.post("/services/photo", data).then((res) => {
        //       return res.data;
        //     });
        //   });
        // }

        NotificationManager.success(
          "Cadastro feito com sucesso!",
          "Muito Bom",
          4000
        );

        NotificationManager.info(
          "Seu serviço esta em processo de aprovação neste momento",
          "Agora é só aguardar!",
          6000
        );
        document.getElementById("myForm").reset();

        return res.data;
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
    const { service, file, categoria, list_categories } = this.state;

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

        <Formik
          initialValues={{
            categoria2: "",
          }}
          validationSchema={validation}
        >
          <form id="myForm" onSubmit={this.handleCadastrar} va>
            <input
              type="text"
              id="nome"
              placeholder="Nome fantasia*"
              defaultValue={service.name}
              onChange={(e) => (service.name = e.target.value)}
            />
            <input
              type="text"
              id="email"
              placeholder="E-mail"
              defaultValue={service.email}
              onChange={(e) => (service.email = e.target.value)}
            />
            <input
              type="text"
              id="tel"
              placeholder="Telefone de contato"
              defaultValue={service.phone}
              onChange={(e) => (service.phone = e.target.value)}
            />
            <span className="whatsapp">
              <input
                type="text"
                id="cel"
                placeholder="DDD + celular"
                defaultValue={service.celphone}
                onChange={(e) => {
                  service.celphone = e.target.value;
                }}
              />
              <input
                id="chec"
                name="iswhats"
                type="checkbox"
                defaultValue={service.iswhats}
                onChange={(e) => {
                  const { service, file } = this.state;
                  service.iswhats = e.target.checked;

                  if (service.iswhats === true) {
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
              required
              onChange={(e) => {
                this.props.getUf();
                service.state = e.target.value;
              }}
            >
              <option className="defaultValue" value="" disabled selected>
                UF
              </option>
              {enderecos.map((endereco) => {
                return (
                  <option key={endereco.id} value={endereco.sigla}>
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
              <option className="defaultValue" value="" disabled selected>
                Cidade
              </option>

              {cidades.map((cidade) => {
                return (
                  <option key={cidade.id} value={cidade.nome}>
                    {cidade.nome}
                  </option>
                );
              })}
            </select>
            <input
              type="text"
              id="site"
              defaultValue={service.site}
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
            <ErrorMessage name="categoria2" />

            <input
              type="text"
              id="categoria"
              placeholder="Outras Categorias"
              defaultValue={service.categories_others}
              onChange={(e) => {
                service.categories_others = e.target.value;
                categoria.name = e.target.value;
              }}
            />
            <input
              type="text"
              id="hora"
              placeholder="Horário de atendimento"
              defaultValue={service.opening_hours}
              onChange={(e) => (service.opening_hours = e.target.value)}
            />
            <input
              type="text"
              id="insta"
              placeholder="Nome do perfil do Instagram"
              defaultValue={service.link_instagram}
              onChange={(e) => (service.link_instagram = e.target.value)}
            />
            <input
              type="text"
              id="face"
              placeholder="Link do Facebook"
              defaultValue={service.link_facebook}
              onChange={(e) => (service.link_facebook = e.target.value)}
            />
            <div id="addFoto">
              <textarea
                placeholder="Fale mais sobre seu negócio pra gente..."
                id="descricao"
                name="descricao"
                defaultValue={service.description}
                rows="8"
                cols="100"
                onChange={(e) => (service.description = e.target.value)}
              />

              {/* <div className="dropzone">
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
              </div> */}
            </div>
            {/* {file.length > 0 ? (
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
            ) : null} */}

            <div className="groupButton">
              <button
                type="button"
                onClick={(e) => (window.location.href = "/tipocadastro")}
              >
                Voltar
              </button>
              <button type="submit">Salvar</button>
            </div>
          </form>
        </Formik>
      </Container>
    );
  }
}

export default withRouter(Form);
