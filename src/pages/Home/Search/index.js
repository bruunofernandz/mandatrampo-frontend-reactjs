import React from "react";
import { Container } from "./styles";

import HomeImg from "../../../assets/home.png";

function Search() {
  return (
    <Container>
      <div className="titulo">
        <h1>
          Busque <span>currículos e serviços. </span>
          manda um trampo pra alguém que precisa<span>.</span>
        </h1>
      </div>

      <div>
        <img src={HomeImg} />
      </div>
    </Container>
  );
}

export default Search;
