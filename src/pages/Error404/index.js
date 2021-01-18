import React from "react";
import { Link } from "react-router-dom";
import { Container } from "./styles";

function Error404() {
  return(
    <Container>
      <h1>Erro 404</h1>
      <h2>A página buscada não existe!</h2>
      <Link className="link" to={'/'}>Retorne para nossa Homepage</Link>
    </Container>
  );
}

export default Error404;
