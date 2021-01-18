import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: space-between;
  align-items: center;
  width: 30vw;
  h1 {
    color: grey;
    text-align: center;
    margin-bottom: 40px;
  }
  #message {
    color: red;
    margin-bottom: 25px;
    @media (max-width: 1100px) {
      color: violet;
    }
  }

  .login {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 90%;
    margin-top: 40px;
    span,
    a {
      color: grey;
      margin-bottom: 10px;
      cursor: pointer;
      transition: opacity 0.2s;
    }

    a:hover {
      opacity: 0.7;
    }
  }
  @media (max-width: 1366px) {
    width: 40vw;
  }
  @media (max-width: 1100px) {
    margin-top: 0px;
    min-width: 80%;
    max-width: 80%;
    width: 80%;
    .login {
      a {
        color: #fff;
      }
    }
  }
`;

export const Formulario = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
  width: 80%;
  h3 {
    text-align: center;
    padding: 0 10%;
    margin-bottom: 20px;
    color: #999;
  }

  input {
    height: 50px;
    width: 90%;
    border-radius: 4px;
    padding-left: 10px;
    border: 1px solid #666;
    ::placeholder {
      font-size: 16px;
      padding: 0 5px;
    }
  }
  .username {
      margin-bottom: 20px;
    }

  input:focus {
    border: 1px solid #6c63ff;
    color: #6c63ff;
  }

  @media (max-width: 1100px) {
    width: 100%;
    color: #fff;
    h1 {
      color: #fff;
    }
    margin-top: 60px;
    input {
      color: #fff;
      border: 1px solid #fff;
      ::placeholder {
        color: #fff;
      }
    }
    input:focus {
      border: 1px solid #fff;
      color: #fff;
    }
  }
`;

export const GroupButton = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;

  button {
    height: 50px;
    flex: 1;
    border-radius: 4px;
    border: 0;
    color: #fff;
    font-weight: bold;
    font-size: 18px;
    text-transform: uppercase;
    background: #6c63ff;
    :hover {
      cursor: pointer;
      background: transparent;
      color: #636cff;
      border: 1px solid #636cff;
    }
  }
`;
