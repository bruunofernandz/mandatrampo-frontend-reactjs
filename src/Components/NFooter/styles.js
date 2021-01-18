import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100vw;
  justify-content: center;
  align-items: center;
  height: 70px;
  background: #d9d9d9;
  color: gray;
  text-align: center;

  img {
    width: 15px;
  }

  a {
    color: gray;
  }

  @media (max-width: 600px) {
    padding-left: 40px;
    padding-right: 40px;
  }
`;
