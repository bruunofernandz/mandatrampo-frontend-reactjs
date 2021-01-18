import React from "react";

import { Container, Box, Box2, GroupButton } from "./styles";
import { AiFillFileText } from "react-icons/ai";
import { BsFillBagFill } from "react-icons/bs";

function Button(props) {
  return (
    <Container>
      <p className="titulo">Escolha uma das opções</p>
      <p className="desc2">Não se preocupe, você poderá altecadastrarrar os</p>
      <p className="desc2">dois depois =)</p>
      <p className="desc1">
        Não se preocupe, você poderá alterar os dois depois =)
      </p>
      <Box>
        {props.curriculos ? (
          <Box2>
            <p>
              {console.log(props.curriculos)}
              <AiFillFileText className="ico" />
              <h3>Currículo</h3>
            </p>
            <GroupButton>
              <button type="button">
                <a href="/cadastrocurriculo">
                  <p className="desc1 a">Editar</p>
                  <p className="desc2">Editar</p>
                </a>
              </button>
            </GroupButton>
          </Box2>
        ) : (
          <Box2>
            <p>
              <AiFillFileText className="ico" />
              <h3>Currículo</h3>
            </p>
            <GroupButton>
              <button type="button">
                <a href="/cadastrocurriculo">
                  <p className="desc1">Cadastrar</p>
                  <p className="desc2">Cadastrar</p>
                </a>
              </button>
            </GroupButton>
          </Box2>
        )}
        <Box2>
          <p>
            <BsFillBagFill className="ico" />
            <h3>Serviço</h3>
          </p>
          <GroupButton>
            <button type="button">
              <a href="/cadastroservico">
                <p className="desc2">CADASTRAR SERVIÇO/</p>
                <p className="desc2">NEGÓCIO</p>
                <p className="desc1">CADASTRAR SERVIÇO</p>
              </a>
            </button>
          </GroupButton>
        </Box2>
      </Box>
    </Container>
  );
}

export default Button;
