import React from "react";

import { Container } from "./styles";

import Image from "../../assets/user.jpg";

import { Link } from 'react-router-dom';

import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

function PhotoCard(props) {
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
            <strong>Telefone:</strong>
            {props.phone} {props.experiencia}
          </p>
        ) : (
            ""
          )}
      </div>
      {props.isService ? (
        <div className="social">
          {props.fb ? (
            <a href={props.fb}>
              <FaFacebook className="ico" />
            </a>
          ) : (
              ""
            )}
          {props.insta ? (
            <a href={props.insta}>
              <FaInstagram className="ico" />
            </a>
          ) : (
              ""
            )}
          {props.wpp ? (
            <a href={props.wpp}>
              <FaWhatsapp className="ico" />
            </a>
          ) : (
              ""
            )}
        </div>
      ) : (
          ""
        )}
      <Link className="link" to={`/vitrineservico${props.id}`}>
        <div>
          <button>Veja Mais</button>
        </div>
      </Link>
    </Container >
  );
}

export default PhotoCard;
