import React, { Component } from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import { MdArrowBack } from "react-icons/md";

import {
  Container,
  Curriculo,
  TituloContainer,
  Information,
  FotoPerfil,
} from "./styles";
import LinkedinIcon from "../../assets/linkedin.png";
import user from "../../assets/user.jpg";
import logo from "../../assets/logoBackground.svg";
import Api from "../../services/api";

export default class VitrineCurriculo extends Component {
  state = {
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
        <Container>
          <Header userimg={this.state.userimg} addIcons={this.state.addIcons} />
          <div className="card">
            <div className="backToHome">
              <MdArrowBack size={16} color="#666" />
              <a href="/">
                <span>Voltar para o início</span>
              </a>
            </div>
            <Curriculo>
              {curriculos.user.avatar_url == null ? (
                <FotoPerfil src={logo} alt="user" />
              ) : (
                <FotoPerfil src={curriculos.user.avatar_url} alt="user" />
              )}
              <TituloContainer>
                {curriculos.professions.name}
                {curriculos.user.link_mediasocial == null ||
                curriculos.user.link_mediasocial === "" ? null : (
                  <a href={curriculos.user.link_mediasocial}>
                    <img src={LinkedinIcon} alt="LinkedinIcon" />
                  </a>
                )}
              </TituloContainer>

              <Information>
                <span>{curriculos.user.city}</span>
                <span>{curriculos.user.name}</span>
                <span className="expTime">
                  {curriculos.experience_time} de experiência
                </span>
                <span>{curriculos.user.email}</span>

                {curriculos.user.phone == null ||
                curriculos.user.phone === "" ? null : (
                  <span>{curriculos.user.phone}</span>
                )}
                {curriculos.user.phone == null ||
                curriculos.user.celphone == null ? null : (
                  <span> ou </span>
                )}
                {curriculos.user.celphone == null ||
                curriculos.user.celphone === "" ? null : (
                  <span>{curriculos.user.celphone}</span>
                )}

                <span>{curriculos.description}</span>
              </Information>
            </Curriculo>
          </div>
          <Footer />
        </Container>
      </>
    );
  }
}
