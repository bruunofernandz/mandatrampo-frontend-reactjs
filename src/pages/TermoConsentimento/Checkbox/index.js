import React from "react";

import { Container } from "./styles";

function Checkbox(props) {
  return (
    <Container>
      <label>
        <input onChange={e => window.close()} id="concordo" type="checkbox" />
        <span className="checkmark"></span>
        <span>
          Eu concordo com os{" "}
          <span onClick={e => window.close()}>termos de serviço</span> da
          mandatrampo
        </span>
      </label>
    </Container>
  );
}

export default Checkbox;
