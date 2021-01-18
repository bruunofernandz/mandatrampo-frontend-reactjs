import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 100vh;
  @media (max-width: 1100px) {
    overflow-x: hidden;
    flex-wrap: wrap;
    background: rgb(63, 61, 86);
    flex-direction: column;
    align-items: center;
    min-height: 90vh;
    min-width: 100vw;
    max-width: 100vw;
    width: 100vw;
  }

  h1 {
    color: grey;
    text-align: center;
    margin-bottom: 13px;
    margin-top: 25vh;
  }
`;

export const GroupButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  .submit-input {
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
    border: 1px solid #6c63ff;
    color: #6c63ff;
  }

  @media (max-width: 1100px) {
    width: 100%;
  }
`;