import React from "react";

import Checkbox from "../Checkbox";

import { Container, Formulario, GroupButton } from "./styles";

function Form(props) {
  return (
    <Container>
      <Formulario>
        <h1>CADASTRE-SE</h1>
        <input type="text" name="name" id="name" pattern="[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$" placeholder="Nome completo" onBlur={(e) => props.validarNome()} required />
        <p className="legend name"></p>
        <input type="email" name="email" id="email" placeholder="Email" onBlur={(e) => props.validarEmail()} required />
        <p className="legend email"></p>
        <input type="text" name="login" id="login" placeholder="Nome de usuário" onBlur={(e) => props.validarLogin()} required />
        <p className="legend username"></p>
        <input type="password" name="password" id="password" placeholder="Senha" onBlur={(e) => props.validarSenha()} required />
        <input type="password" id="passConfirm" placeholder="Confirme sua senha" onBlur={(e) => props.validarSenha()} required />
        <p className="legend password"></p>

        <div className="checkbox">
          <label htmlFor="">
            <Checkbox abirFechar={props.abirFechar} />
          </label>
        </div>
        <GroupButton>
          <button type="button" onClick={() => {window.location.href='/'}}>Voltar</button>
          <button type="button" onClick={e => props.submitar()}>Cadastrar</button>
        </GroupButton>
        <span className="login">
          Já tem uma conta ? &nbsp;
          <a href="/login">Entrar</a>
        </span>
      </Formulario>
    </Container>
  );
}

export default Form;
