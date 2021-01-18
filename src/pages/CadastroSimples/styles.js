import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 100vh;
  @media (max-width: 1100px) {
    flex-wrap: wrap;
    background-image: linear-gradient(#231C5A,#3A1961, #8826A3);
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    min-height: 100vh;
    min-width: 100vw;
  }
`;
