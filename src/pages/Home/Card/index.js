import React from "react";

import { Container } from "./styles";

import { Redirect, Link } from "react-router-dom";

import logoMandaTrampo from "../../../assets/logoBackground.svg";
import instagram from "../../../assets/insta.png";
import fb from "../../../assets/fb.png";
import wpp from "../../../assets/wpp.png"

function Card(props) {
  let Image;

  if (props.isService) {
    if (props.img) {
      Image = <img className="product" src={props.img} alt="Serviço" />;
    } else {
      Image = <img className="product" src={logoMandaTrampo} alt="Serviço" />;
    }
  }
  return (

    <Container isService={props.isService}>
      {Image}
      <h2>{props.cargo}</h2>
      <span>{props.nome}</span>
      <span>{props.cidade}</span>
      <span>
        {props.experiencia ? props.experiencia + " de experiência" : ""}
      </span>
      <span>
        {props.phone
          ? "(" +
            props.phone[0] +
            props.phone[1] +
            ") " +
            props.phone.substring(2, props.phone.length)
          : ""}
      </span>
      <div className="social">
        {props.wpp ? <a href={props.wpp} target="_blank"><img src={wpp} alt="" /></a> : ""}
        {props.fb ? <a href={props.fb} target="_blank"><img src={fb} alt="" /></a> : ""}
        {props.instagram ? <a href={props.instagram} target="_blank"><img src={instagram} alt="" /></a> : ""}
      </div>
      {
        props.isService ? <Link to={`/vitrineservico${props.id}`}>
                     <button>Veja mais</button>
                    </Link>
        : <Link to={`/vitrinecurriculo${props.id}`}>
                      <button>Veja mais</button>
                    </Link>
      }
        {/* <button>Veja mais</button>
      </Link> */}
    </Container>
  );
}

export default Card;
