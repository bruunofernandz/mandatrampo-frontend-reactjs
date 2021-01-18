import React, { Component } from 'react';

import  {Container, Images, Col}  from './styles';
import Logo from "../../assets/logoMT.svg";

import Footer from '../../Components/NFooter';
import Header from '../../Components/Header';

export default class Home extends Component {
    state = {
      userimg: true,
      addIcons: true,
    }

  render() {

    return (
      <>
      <Header />
       <Container>
           <Images>
           <img src={Logo} ></img>
           </Images>
       </Container>
       <Col>
       <p>
       Anderson - anderson.guedes@outlook.com.br <br></br>
       Ariosmar - pegoraroaf@yahoo.com.br <br></br>
       Bruno  - bruunofernandz@hotmail.com <br></br>
       Danilo - denadai.sicari@gmail.com <br></br>
       Eduardo - eduardo.rocha2510@hotmail.com <br></br>
       Elias  - eliassjonas@gmail.com  <br></br>
       </p>
       <p>
       Everton - evertonbarramansa1@gmail.com <br></br>
       Fábio -  fabiosuzarth@hotmail.com <br></br>
       Fernanda -  fernandazbarreto@gmail.com <br></br>
       Flávia - flafurlan12@gmail.com  <br></br>
       Jair  - jair.lopes@etec.sp.gov.br  <br></br>
       Jhonny - jhonnymarkes@outlook.com <br></br>
       </p>
       <p>
       João  - joao.gomes31@fatec.sp.gov.br <br></br>
       Mateus - mateusviniciussilva07@gmail.com <br></br>
       Paulo - paulo.amigoni@gmail.com <br></br>
       Raphael  - raphaelmachadofreire@gmail.com  <br></br>
       Renato - renatosilvad07@gmail.com<br></br>
       Silvia - silviarosa.curto@gmail.com <br></br>
       </p>

        </Col>



        <Footer />
      </>
    );
  }
}
