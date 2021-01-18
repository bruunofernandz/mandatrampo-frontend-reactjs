import React from "react";

import { Container } from "./styles";

import acao from "../../../../assets/acao.png"

function Image() {
  return(
    <Container>
      <h1>Precisamos de alguns dados para te ajudar a divulgar seu serviço ou negócio</h1>
      <img src={acao} alt="imagem" />
    </Container>
  );
}

export default Image;
