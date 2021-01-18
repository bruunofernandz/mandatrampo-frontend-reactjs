import styled from "styled-components";
import HomeImg from "../../../assets/imagem-mandatrampo-home.png";

export const Container = styled.div`
  width: 100%;
  max-width: 85vw;
  height: 356px;
  color: #000;
  margin: 35px 0;
  margin-left: 8.5vw;
  display: flex;
  justify-content: space-between;
  font-size: 20px;

  .titulo {
    width: 50%;
    h1 {
      font-size: 38px;
      color: #121212;
    }
  }

  .imagem-destaque-home {
    background-image: url(${HomeImg});
    margin-right: 75px;
    width: 330px;
    height: 330px;
    background-size: cover;
    background-position: -10px;
    background-repeat: no-repeat;
    border-radius: 50%;
    -webkit-box-shadow: 9px 11px 14px -1px rgba(195, 190, 205, 1);
    -moz-box-shadow: 9px 11px 14px -1px rgba(195, 190, 205, 1);
    box-shadow: 9px 11px 14px -1px rgba(195, 190, 205, 1);
  }

  span {
    color: #6c63ff;
  }
  h2 {
    color: #666;
  }
  div:first-child {
    padding: 60px 0px;
  }
  div:last-child {
    padding: 60px 46px;
  }
  div input {
    color: #666;
    margin-top: 40px;
    width: 95%;
    height: 35px;
    padding-left: 20px;
    ::placeholder {
      color: #666;
    }
  }

  @media (max-width: 1100px) {
    .titulo {
      h1 {
        margin-top: 15px;
        font-size: 38px;
      }
    }
    margin-top: 5px;
    div:last-child {
      width: 50vw;
    }
  }
  @media (max-width: 760px) {
    height: auto;
    .titulo {
      width: 100%;
      margin: 0;
      padding: 0;
      h1 {
        font-size: 20px;
      }
    }
    div:first-child {
      padding: 0px 16px;
    }
    div:last-child {
      display: none;
    }
  }
`;
