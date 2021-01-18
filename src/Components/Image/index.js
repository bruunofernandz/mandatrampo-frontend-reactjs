import React from "react";
import HelpImage from "../../assets/imagem-entrevista.png";
import logo from "../../assets/logoMandaTrampo.svg"
import { Container, Images } from "./styles";

function Image() {
  return (
    <>
      <Container HelpImage={HelpImage}>
        {/* <Images> */}
          <div>
          <img src={logo} className="logo-login" alt="Mandatrampo"/>
            {/* <span>
              Queremos apenas te ajudar a passar por tudo isso!
            </span> */}
          </div>
          {/* <img src={HelpImage} alt="" /> */}
        {/* </Images> */}
      </Container>
    </>
  );
}

export default Image;
