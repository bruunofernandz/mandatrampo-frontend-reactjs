import styled from "styled-components";

export const Container = styled.div`
  min-width: 30vw;
  max-width: 30vw;
  width: 30vw;
  background: rgb(63,61,86);
  height: auto;
  background-attachment: fixed;
  color: #fff;
  h1 {
    font-size: 28px;
    margin: 10%;
  }
  img {
    margin: 5%;
    @media (max-width: 1366px) {
      width: 520px;
    };
  }
  @media (max-width: 1100px) {
    display: none;
    }
`;

