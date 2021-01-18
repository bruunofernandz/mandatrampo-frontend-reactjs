import React from "react";
import iconeHeart from "../../assets/heart.svg";

import { Container } from "./styles";

function Footer() {
  return (
    <Container>
      <span>
        Todos os Direitos Reservados | Desenvolvido com <img src={iconeHeart} />{" "}
        pelo
      </span>
    </Container>
  );
}

export default Footer;
