import styled from "styled-components";

export const Container = styled.div`
  background: rgb(63, 61, 86);
  color: #fff;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h2,
  .link {
    font-size: 20px;
    margin-top: 35px;
  }
  .link {
    text-decoration: none;
    color: #e3e3e3;
    transition: all 1.5s;
    :hover {
      background: #e3e3e3;
      color: rgb(63, 61, 85);
    }
  }
`;
