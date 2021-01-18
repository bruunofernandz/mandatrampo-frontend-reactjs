import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
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

export const Curriculo = styled.div`
  width: 450px;
  background: #eee;
  box-shadow: -2px -2px 20px #fff, 2px 2px 20px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  padding: 20px 30px;
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
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
`;

export const TituloContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 30px;
  text-transform: uppercase;
  font-weight: bold;
  color: #666;

  img {
    width: 15px;
    height: 15px;
    margin-left: 8px;
  }
`;

export const Information = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;

  span {
    margin: 5px 0px;
    color: #666;
  }

  .expTime {
    text-transform: lowercase;
  }
`;
