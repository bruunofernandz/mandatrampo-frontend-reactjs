import React, { Component } from "react";
import Slider from "react-slick";
import { MdArrowForward } from "react-icons/md";

import { Container } from "./styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Header from "../../Components/Header";
import Card from "./Card";
import Search from "./Search";
import Footer from "./Footer";

import Api from "../../services/api";

export default class Home extends Component {
  state = {
    userimg: true,
    addIcons: true,
    slides: 0,
    curriculos: {},
    servicos: {},
  };

  async componentDidMount() {
    const response = await Api.get("/curriculum");
    const responseService = await Api.get("/services");

    this.setState({
      slides: response.data.length,
    });
    // this.setState({enderecos: response.data});

    this.setState({ curriculos: response.data });
    this.setState({ servicos: responseService.data });

  }

  render() {
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
        <Container>
          <Header userimg={this.state.userimg} addIcons={this.state.addIcons} />
          <Search />
          <div className="profissao">
            <div className="apresentacao">
              <h1>Pessoas Buscando um emprego</h1>

              <button>
                <div className="seemoreCurriculo">
                  <span>Veja mais curriculos</span>
                  <MdArrowForward size={16} color="#6c63ff" />
                </div>
              </button>
            </div>
            <Slider {...settings}>
              {curriculos.map((curriculo) => {
                return (
                  <Card
                    key={curriculo.id}
                    id={curriculo.id}
                    cargo={curriculo.professions.name}
                    nome={curriculo.user.name}
                    cidade={curriculo.user.city}
                    experiencia={curriculo.experience_time}
                    
                  />
                );
              })}
            </Slider>
          </div>

          <div className="servico">
            <div className="apresentacao">
              <h1>Serviços e pequenos negócios</h1>
              <button>
                <div className="seemoreCurriculo">
                  <span>Veja mais Serviços</span>
                  <MdArrowForward size={16} color="#6c63ff" />
                </div>
              </button>
            </div>
            <Slider className="serv" {...settings}>
              {servicos.map((servicos) => {
                const photos = servicos.photo;
                console.log(servicos);
                let photo;

                if (photos.length >= 1) {
                  photo = photos[0].local_url;
                } else {
                  photo = "";
                }

                return (
                  <Card
                    key={servicos.id}
                    isService
                    img={photo}
                    id={servicos.id}
                    cargo={servicos.name}
                    cidade={servicos.user.city}
                    nome={servicos.user.name}
                    phone={servicos.phone}
                    fb={
                      servicos.link_facebook
                        ? "https://www.facebook.com" + servicos.link_facebook
                        : ""
                    }
                    instagram={
                      servicos.link_instagram
                        ? "https://www.instagram.com" + servicos.link_instagram
                        : ""
                    }
                    wpp={
                      servicos.iswhats
                        ? "https://api.whatsapp.com/send?phone=" +
                          servicos.phone
                        : ""
                    }
                  />
                );
              })}
            </Slider>
          </div>
          <Footer />
        </Container>
      </>
    );
  }
}
