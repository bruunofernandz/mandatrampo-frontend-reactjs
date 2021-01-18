import React from "react";
import iconeHeart from "../../assets/heart.svg";

import { Container } from "./styles";

function Footer() {
  return (
    <Container>
      <span>
        Desenvolvido com <img src={iconeHeart} /> pelos <a href="/alunos">Alunos da Fatec Araras -
        2020.</a>
      </span>
    </Container>
  );
}

export default Footer;
