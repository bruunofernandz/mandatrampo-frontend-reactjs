import React, { Component } from "react";

import Header from "../../Components/Header";
import Footer from '../../Components/NFooter';
import { MdArrowBack } from "react-icons/md";
import './cardServico.css';
import Carousel from 'react-elastic-carousel';

import {
  Container,
  Servico,
  TituloContainer,
  Information,
  FotoPerfil,
  ContainerPhotosOne,
  ContainerPhotosSecond,
  ContainerService,
} from "./styles";
import logo from "../../assets/logoBackground.svg";
import insta from "../../assets/instagram.png";
import face from "../../assets/face.png";
import Api from "../../services/api";
import fotoPerfil from '../../assets/foto-perfil.png';
import logoLinkedin from '../../assets/logo-linkedin.svg';
import logoWhatsApp from '../../assets/logo-whats.svg';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

export default class VitrineServico extends Component {
  state = {
    userimg: true,
    addIcons: true,
    servico: {
      user: {},
      photo: [],
    },
  };

  async componentDidMount() {
    const { servico } = this.state;
    const { id } = this.props.match.params;


    const response = await Api.get(`services/${id}/details`).then(
      (res) => res.data
    );

    this.setState({
      servico: response,
    });

  }

  render() {
    const { servico } = this.state;
    const foto = Object.values(this.state.servico.photo);
    const settings = {
      infinite: true,
      speed: 400,
      slidesToShow: 4,
      initialSlide: 0,

      responsive: [
        {
          breakpoint: 1900,
          settings: {
            slidesToShow: 3.1,
            infinite: false,
          },
        },
        {
          breakpoint: 1220,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: false,
          },
        },
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
          },
        },
      ],
    };
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
            <div className="wrapper-servico">
              <div>
                {console.log(servico)}
                <div className="servico-wrapper">
                  {servico.photo[0] == null ? (
                    <img className="servico-foto" src={fotoPerfil} alt="Foto Perfil" />


                  ) : (foto.length <= 1 ? (
                    <img className="servico-foto" src={this.state.servico.photo[0].local_url} alt="Foto Perfil" />
                  )
                    : (
                      <Carousel>
                        {foto.map(cont => <div key={foto.id}><img className="servico-foto-carrosel" src={cont.local_url} alt="foto-servico" /></div>)}
                      </Carousel>
                    )
                    )}

                  <div className="servico-content">
                    <ul className="social-wrapper-servico">
                      <li className="title-service">
                        <strong className="">{servico.name}</strong>
                      </li>
                      <li className="social-item-servico">
                        <strong>E-mail:</strong> {servico.email}
                      </li>
                      <li className="social-item-servico">
                        <strong>Cidade:</strong> {servico.city}
                      </li>

                      {servico.phone == null ? (
                        ``
                      ) : (
                          <li className="social-item-servico">
                            <strong>Telefone:</strong> {servico.phone}
                          </li>
                        )}

                      {servico.opening_hours == null ? (
                        ``
                      ) : (
                          <li className="social-item-servico">
                            <strong>Horário de atendimento:</strong> {servico.opening_hours}
                          </li>
                        )}

                    </ul>

                    <ul className="social-wrapper-servico social-icone-servico">
                      <li>
                        {servico.link_facebook == null
                          ? '' : (
                            <a className="social-react" href={servico.link_facebook}><FaFacebook className="ico" />
                            </a>
                          )}

                      </li>
                      <li className="social-item-servico">
                        {servico.link_instagram == null
                          ? '' : (
                            <a className="social-react" href={servico.link_instagram}><FaInstagram className="ico" />
                            </a>
                          )}
                      </li>
                      <li className="social-item-servico">
                        {servico.iswhats == false
                          ? '' : (
                            <a href={`https://api.whatsapp.com/send?phone=${servico.celphone}`}>
                              <img
                                className="servico-icon"
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

              <div className="servico-descricao-wrapper">
                <p className="servico-descricao">
                  <strong>Descrição: </strong>
                  {servico.description}
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
