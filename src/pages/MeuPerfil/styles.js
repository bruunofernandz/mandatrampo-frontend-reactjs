import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 1100px) {
    flex-wrap: wrap;
    background: rgb(63, 61, 86);
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    min-height: 100vh;
    min-width: 100vw;
  }
`;
