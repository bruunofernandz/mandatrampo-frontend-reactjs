import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: space-between;
  width: 30vw;
  margin-bottom: 25px;
  .login {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    color: #9999;
    margin-top: 25px;
    span,
    a {
      color: #3399ff;
      text-decoration: underline;
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
    overflow-x: hidden;
    margin-top: 0px;
    min-width: 80%;
    max-width: 80%;
    width: 80%;
    .login {
      color: #fff;
    }
  }
`;

export const Formulario = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
  width: 80%;
  h1 {
    margin-bottom: 40px;
    color: grey;
  }
  .legend {
    color: #b73438;
    font-size: 14px;
  }
  input[type="text"] {
    height: 50px;
    width: 100%;
    border: 1px solid #666;
    border-radius: 4px;
    padding-left: 10px;
    margin-bottom: 20px;
  }

  input[type="email"] {
    height: 50px;
    width: 100%;
    border: 1px solid #666;
    border-radius: 4px;
    margin-bottom: 20px;
    padding-left: 10px;
  }

  input[type="password"] {
    height: 50px;
    width: 100%;
    border: 1px solid #666;
    border-radius: 4px;
    margin-bottom: 20px;
    padding-left: 10px;
  }

  input:focus {
    border: 1px solid #6c63ff;
    color: #6c63ff;
  }

  @media (max-width: 1100px) {
    width: 100%;
    h3 {
      color: #fff;
    }
    input[type="text"],
    input[type="email"],
    input[type="password"] {
      border: 1px solid #666;
      ::placeholder {
        color: #fff;
      }
    }
  }
`;

export const GroupButton = styled.div`
  width: 100%;
  margin-top: 40px;
  display: flex;
  justify-content: space-between;

  button {
    height: 40px;
    flex: 1;
    border-radius: 4px;
    border: 0;
    color: #fff;
    :first-child {
      margin-right: 10px;
      border: 1px solid #6c63ff;
      color: #999999;
    }

    :last-child {
      margin-left: 10px;
      background: #6c63ff;
    }
  }
  @media (max-width: 1100px) {
    button {
      :first-child {
        color: #fff;
      }
    }
  }
`;
