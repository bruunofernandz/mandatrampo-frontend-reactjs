import React from "react";

import { Container } from "./styles";

import acao from "../../../../assets/acao.png"

function Image() {
  return(
    <Container>
      <h1>Precisamos de alguns dados para te ajudar a conseguir um emprego</h1>
      <p>* Este formulário é necessário para os recrutadores poderem te conhecer melhor</p>
      <img src={acao} alt="imagem" />
    </Container>
  );
}

export default Image;
