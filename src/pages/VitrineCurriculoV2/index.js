import React, { Component } from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/NFooter";
import { MdArrowBack } from "react-icons/md";
import "./cardCurriculo.css";

import { Container } from "./styles";
import fotoPerfil from "../../assets/foto-perfil.png";
import logoLinkedin from "../../assets/logo-linkedin.svg";
import logoWhatsApp from "../../assets/logo-whats.svg";

import Api from "../../services/api";

export default class VitrineCurriculo extends Component {
  state = {
    userimg: true,
    addIcons: true,
    curriculos: {
      professions: {},
      user: {},
    },
  };

  async componentDidMount() {
    const { curriculos } = this.state;
    const { id } = this.props.match.params;

    const response = await Api.get(`curriculum/${id}/details`).then(
      (res) => res.data
    );

    this.setState({
      curriculos: response,
    });
  }

  render() {
    const { curriculos } = this.state;

    return (
      <>
        <Header
          isHome
          userimg={this.state.userimg}
          addIcons={this.state.addIcons}
        />

        <Container>
          <div className="card">
            <div className="backToHome">
              <MdArrowBack size={16} color="#666" />
              <a href="/">
                <span>Voltar para o início</span>
              </a>
            </div>

            <div className="wrapper">
              <div>
                <div className="curriculo-wrapper">
                  {curriculos.user.avatar_url == null ? (
                    <img
                      className="curriculo-foto"
                      src={fotoPerfil}
                      alt="Foto Perfil"
                    />
                  ) : (
                    // <img className="curriculo-foto" src={curriculos.user.avatar_url} alt="Foto Perfil" />
                    <img
                      className="curriculo-foto"
                      src={curriculos.user.avatar_url}
                      alt="Foto Perfil"
                    />
                  )}

                  <div className="curriculo-content">
                    <ul className="social-wrapper">
                      <li className="social-item">
                        <strong>Nome:</strong> {curriculos.user.name}
                      </li>
                      <li className="social-item">
                        <strong>Cargo:</strong> {curriculos.professions.name}
                      </li>
                      <li className="social-item">
                        <strong>E-mail:</strong> {curriculos.user.email}
                      </li>
                      <li className="social-item">
                        <strong>Cidade:</strong> {curriculos.user.city}
                      </li>
                      <li className="social-item">
                        <strong>Experiênciai:</strong>{" "}
                        {curriculos.experience_time}
                      </li>
                      <li className="social-item">
                        <strong>Telefone:</strong> {curriculos.user.phone}
                      </li>
                    </ul>

                    <ul className="social-wrapper social-icone">
                      <li className="social-item">
                        {console.log(curriculos)}

                        {curriculos.link_mediasocial == null ||
                        curriculos.link_mediasocial === "" ? null : (
                          <a href={curriculos.link_mediasocial}>
                            <img
                              className="curriculo-icon"
                              src={logoLinkedin}
                              alt="Icone Logo Linkedin"
                            />
                          </a>
                        )}
                      </li>
                      <li className="social-item">
                        {curriculos.user.iswhats == false ? (
                          ""
                        ) : (
                          <a
                            href={`https://api.whatsapp.com/send?phone=${curriculos.user.celphone}`}
                          >
                            <img
                              className="curriculo-icon"
                              src={logoWhatsApp}
                              alt="Icone Logo WhatsApp"
                            />
                          </a>
                        )}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="curriculo-descricao-wrapper">
                <p className="curriculo-descricao">
                  <strong>Descrição:</strong>
                  {curriculos.description}
                </p>
              </div>
            </div>
          </div>
        </Container>
        <Footer />
      </>
    );
  }
}
