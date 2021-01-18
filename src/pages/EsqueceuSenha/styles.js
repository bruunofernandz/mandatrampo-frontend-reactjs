import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 100vh;
  .logotipo {
    display: none;
  }
  h1 {
    color: grey;
    text-align: center;
    margin-bottom: 18px;
    margin-top:30vh; 
  }
  @media (max-width: 1100px) {
    overflow-x: hidden;
    flex-wrap: wrap;
    background-image: linear-gradient(#231C5A,#3A1961, #8826A3);
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    min-width: 100vw;
    max-width: 100vw;
    width: 100vw;
    .logotipo {
      width: 300px;
      padding: 15px 0;
      margin-top: 30px;
      display: block;
    }
    h1 {
      margin-top: 11vh;
      color: #fff;
    }
  }
`;

export const GroupButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  .submit-input {
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
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

export const Formulario = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
  width: 80%;

  .input {
    height: 50px;
    width: 100%;
    border-radius: 4px;
    padding-left: 10px;
    border: 1px solid #666;
    margin-bottom: 20px;
    ::placeholder {
      font-size: 14px;
      padding: 0 5px;
    }
  }

  input:focus {
    border: 1px solid #fff;
    color: #6c63ff;
  }

  @media (max-width: 1100px) {
    width: 100%;
    .input {
      border: 1px solid #fff;
      ::placeholder {
        color: #fff;
      }
    }
  }
`;