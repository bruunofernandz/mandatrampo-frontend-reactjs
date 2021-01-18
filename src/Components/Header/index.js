import React from "react";

import { Container, Menu } from "./styles";
import Logo from "../../assets/logoMandaTrampo.svg";

import LogoOficial from "../../assets/logoMT.svg";
import { getToken, logout, isAuthenticated } from "../../auth";
import { faHome, faUser } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MdAddCircle } from "react-icons/md";

function Header(props) {
  return (
    <Container>
      <a onClick={{/*(e) => logout()*/}} href="/">
        <img
          className="logo-header-mandatrampo"
          src={LogoOficial}
          alt="Logo Manda Trampo"
        />
      </a>
      <Menu notType={props.notType}>
        {isAuthenticated() ?
          <a onClick={(e) => logout()} href="/">
            <FontAwesomeIcon icon={faUser} />
            &nbsp; Logout
          </a> :
          <a href="/login">
            <FontAwesomeIcon icon={faUser} />
            &nbsp; Login
          </a>
        }
        {isAuthenticated() ?
        <a href="/tipocadastro">
          <MdAddCircle className="icon" />
          &nbsp;Tipo Cadastro
        </a> :
        <a href="/cadastro">
          <MdAddCircle className="icon" />
          &nbsp;Criar Conta
        </a>
        }
      </Menu>

      {/* <Primary
        background={props.background}
        widthNumber={props.widthNumber}
        userimg={props.userimg}
        home={props.home}
        responsive={props.responsive}
        addIcons={props.addIcons}
      >
        <Home home={props.home}>
          <a href="/">
            <FontAwesomeIcon icon={faHome} />
            &nbsp;Início
          </a>
        </Home>

        <a href="/">
          <img className="logo2" src={LogoOficial} alt="" />
          {props.isHome ? (
            <img className="logo2" src={LogoOficial} alt="" />
          ) : (
            <img className="logo" src={Logo} alt="" />
          )}
        </a>

        {getToken() ? (
          <Userimg
            userimg={props.userimg}
            home={props.isHome}
            addIcons={props.addIcons}
          >
            <a onClick={(e) => logout()} href="/">
              <FontAwesomeIcon icon={faUser} />
              &nbsp; Logout
            </a>
            <Plus addIcons={props.addIcons}>
              <a href="/cadastrocurriculo">
                <MdAddCircle className="icon" />
                Adicionar Currículo
              </a>

              <a href="/cadastroservico">
                <MdAddCircle className="icon" />
                Adicionar Serviços
              </a>
            </Plus>
          </Userimg>
        ) : (
          <Userimg
            userimg={props.userimg}
            home={props.isHome}
            addIcons={props.addIcons}
          >
            <Plus addIcons={props.addIcons}>
              <a href="/cadastro">
                <MdAddCircle className="icon" />
                Criar conta
              </a>

              <a href="/login">
                <MdAddCircle className="icon" />
                Login
              </a>
            </Plus>
          </Userimg>
        )}
      </Primary> */}
    </Container>
  );
}

export default Header;
