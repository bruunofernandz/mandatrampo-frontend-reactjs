import React, { Component } from 'react';

import { CardsBox } from './styles';

import Api from "../../services/api";

import Header from '../../Components/Header';
import Search from './Search';
import Footer from '../../Components/NFooter';
import Card from '../../Components/Card';
import PhotoCard from '../../Components/PhotoCard';
import { MdArrowForward } from "react-icons/md";
export default class Home extends Component {
  state = {
    userimg: true,
    addIcons: true,
    curriculos: {},
    servicos: {},
    isloged: false,
  }

  async componentDidMount() {

    const login = localStorage.getItem("@Token_Mandatrampo");

    if (!login || login !== null) {
      this.setState({
        isloged: false
      });
    } else {
      this.setState({
        isloged: true
      });
    }

    const response = await Api.get("/curriculum");
    const responseService = await Api.get("/services");

    this.setState({ curriculos: response.data });
    this.setState({ servicos: responseService.data });
  }

  render() {
    function shuffle(a) {
      for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
      }
      return a;
    }

    const curriculos = Object.values(this.state.curriculos);
    const servicos = Object.values(this.state.servicos);

    shuffle(servicos);
    shuffle(curriculos);
    return (
      <>
        <Header
          isHome
          isloged
          userimg={this.state.userimg}
          addIcons={this.state.addIcons}
        />
        <Search />
        <CardsBox>
          <div className="horizon">
            <h1>Pessoas buscando um emprego</h1>
            <div className="btnArrow">
              <button className="more" onClick={e => window.location.href = "/maiscurriculos"}>Veja mais currículos <MdArrowForward /></button>
            </div>
          </div>
          <div className="horizon second">
            {curriculos.slice(0, 4).map((curriculo) => {
              return <Card
                key={curriculo.id}
                nome={curriculo.user.name}
                cargo={curriculo.professions.name}
                id={curriculo.id}
                cidade={curriculo.user.city}
                experiencia={curriculo.experience_time}
                img={curriculo.user.avatar_url}
              />
            })}
          </div>
        </CardsBox>

        <CardsBox>
          <div className="horizon">
            <h1>Serviços e pequenos negócios</h1>
            <div className="btnArrow">
              <button className="more" onClick={e => window.location.href = "/maisservicos"}>Veja mais serviços <MdArrowForward /> </button>
            </div>
          </div>
          <div className="horizon second">
            {servicos.slice(0, 4).map((servico) => {
              const photos = servico.photo;
              let photo;

              if (photos.length >= 1) {
                photo = photos[0].local_url;
              } else {
                photo = "";
              }
              console.log(servico);
              return <PhotoCard
                key={servico.id}
                isService
                id={servico.id}
                img={photo}
                nome={servico.user.name}
                cargo={servico.name}
                cidade={servico.user.city}
                phone={servico.phone}
                fb={servico.link_facebook}
                insta={servico.link_instagram}
                wpp={
                  servico.iswhats
                    ? "https://api.whatsapp.com/send?phone=55" + servico.phone
                    : ""
                }
              />
            })}
          </div>
        </CardsBox>

        <Footer />
      </>
    );
  }
}
