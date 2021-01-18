import React from "react";

import { Container } from "./styles";

import acao from "../../../../assets/acao.png";

function Image() {
  return (
    <Container>
      <h1>Editar dados do seu currículo</h1>
      <img src={acao} alt="imagem" />
    </Container>
  );
}

export default Image;
