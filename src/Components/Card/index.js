import React from "react";

import { Container } from "./styles";

import { Link } from "react-router-dom";

import Image from "../../assets/user.jpg";
import wpp from "../../assets/wpp.png";
import fb from "../../assets/fb.png";
import insta from "../../assets/instagram.png";

function Card(props) {
  return (
    <Container>
      {props.img ? (
        <img className="photo" src={props.img} alt="" />
      ) : (
        <img className="photo" src={Image} alt="" />
      )}
      <h2>{props.cargo}</h2>
      <div className="datas">
        <p>
          <strong>Nome:</strong> {props.nome}
        </p>
        {props.cidade ? (
          <p>
            <strong>Cidade:</strong> {props.cidade}
          </p>
        ) : (
          ""
        )}
        {props.experiencia ? (
          <p>
            <strong>Experiência:</strong> {props.experiencia}
          </p>
        ) : (
          ""
        )}
        {props.phone ? (
          <p>
            <strong>Telefone: {props.phone}</strong> {props.experiencia}
          </p>
        ) : (
          ""
        )}
      </div>
      {props.isService ? (
        <div className="social">
          <img src={fb} alt="" />
          <img src={insta} alt="" />
          <img className="wpp" src={wpp} alt="" />
        </div>
      ) : (
        ""
      )}
      <Link className="link" to={`/vitrinecurriculo${props.id}`}>
        <div className="button">
          <button>Veja Mais</button>
        </div>
      </Link>
    </Container>
  );
}

export default Card;
