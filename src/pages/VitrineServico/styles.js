import styled from "styled-components";

export const Container = styled.div`
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  .backToHome {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 50px 0;

    @media (max-width: 1380px) {
      margin: 30px 0;
    }

    span {
      color: #666;
      font-weight: bold;
    }

    svg {
      color: #333;
      margin-right: 5px;
    }

    a {
      text-decoration: none;
    }
  }
`;

export const ContainerService = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 1024px) {
    flex-wrap: wrap;
    flex-direction: column;
  }
`;

export const Servico = styled.div`
  width: 550px;
  background: #eee;
  box-shadow: -2px -2px 20px #fff, 2px 2px 20px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  margin: 20px 0;

  @media (max-width: 600px) {
    width: 300px !important;
    font-size: 100% !important;
  }

  @media (max-width: 1024px) {
    width: 600px;
    font-size: 150%;
  }

  span {
    text-align: left;
    word-wrap: break-word;
  }
`;

export const FotoPerfil = styled.img`
  min-width: 450px;
  height: 200px;
  object-fit: cover;
  border-radius: 4px 4px 0px 0px;

  @media (max-width: 600px) {
    width: 300px !important;
  }

  @media (max-width: 1024px) {
    width: 600px;
  }
`;

export const TituloContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  padding: 0px 30px;
  font-weight: bold;
  color: #666;

  img {
    width: 15px;
    margin-left: 10px;
  }
`;

export const Information = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 30px;
  padding-top: 10px;
  padding-bottom: 20px;

  span {
    margin: 5px 0px;
    color: #666;
  }

  .redesSociais {
    display: flex;
    align-items: center;
  }

  .instaLogo {
    margin-left: 15px;
    display: flex;
    justify-content: center;
    align-items: center;

    span {
      margin-left: 5px;
    }
  }

  .faceLogo {
    display: flex;
    justify-content: center;
    align-items: center;

    span {
      margin-left: 5px;
    }
  }
`;

export const ContainerPhotosOne = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    width: 315px;
    border-radius: 4px;
    margin: 5px 0px;
  }

  @media (max-width: 600px) {
    img {
      width: 300px !important;
    }
  }

  @media (max-width: 1024px) {
    img {
      width: 600px;
    }
  }
`;

export const ContainerPhotosSecond = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 315px;
    border-radius: 4px;
    margin: 5px 0px;
  }

  @media (max-width: 600px) {
    img {
      width: 300px !important;
    }
  }

  @media (max-width: 1024px) {
    img {
      width: 600px;
    }
  }
`;
