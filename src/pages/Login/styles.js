import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 100vh;
  .logotipo {
    display: none;
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
    h1 {
      display: none;
    }
    .logotipo {
      width: 300px;
      padding: 15px 0;
      margin-top: 30px;
      display: block;
    }
  }
`;
