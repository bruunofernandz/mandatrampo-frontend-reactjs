import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  overflow-x: hidden;
  flex-direction: column;
  justify-content: center;

  .seemoreCurriculo {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 5px;

    svg {
      margin-left: 2px;
    }
  }

  .profissao {
    margin-bottom: 45px;
    margin-left: 7.5vw;
    width: 85%;
    .apresentacao {
      display: flex;
      justify-content: space-between;

      h1 {
        font-size: 18px;
        padding: 2px 5px;
      }

      button {
        padding: 5px;
        border: 2px solid #6c63ff;
        color: #6c63ff;
        border-radius: 4px;
        margin-bottom: 15px;
        width: 200px;
      }
    }
    h1 {
      color: #666;
      margin-bottom: 25px;
      margin-left: 20px;
      text-transform: uppercase;
      @media (max-width: 1100px) {
        font-size: 18px;
      }
    }
    @media (max-width: 800px) {
      margin-bottom: 5px;
    }
  }

  .servico {
    margin-bottom: 45px;
    margin-left: 7.5vw;
    width: 85%;
    .apresentacao {
      display: flex;
      justify-content: space-between;
      h1 {
        font-size: 18px;
        padding: 2px 5px;
      }
      button {
        padding: 5px;
        border: 2px solid #6c63ff;
        color: #6c63ff;
        border-radius: 4px;
        margin-bottom: 15px;
        width: 200px;
      }
    }
    h1 {
      color: #666;
      margin-bottom: 25px;
      margin-left: 20px;
      text-transform: uppercase;
      @media (max-width: 1100px) {
        font-size: 18px;
      }
    }

    .serv {
      height: auto;
      max-height: 600px;
    }
  }
`;
