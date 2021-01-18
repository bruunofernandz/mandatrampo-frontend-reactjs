import React from "react";

import { Container, Formulario, GroupButton } from "./styles";

function Form(props) {
  return (
    <Container>
      <Formulario>
        <h1>Seja Bem-Vindo ao Mandatrampo</h1>
        <input type="text" className="username" id="login" placeholder="Nome de usuário" />
        <input type="password" id="password" placeholder="Senha" />
        <span id="message"></span>
        <GroupButton>
          <button type="button" onClick={e => props.submitar()}>Entrar</button>
        </GroupButton>
        <span className="login">
          <a href="/esqueceusenha">Esqueceu sua senha ?</a>
          <a href="/cadastro">Não possui conta ?</a>
        </span>
      </Formulario>
    </Container>
  );
}

export default Form;
