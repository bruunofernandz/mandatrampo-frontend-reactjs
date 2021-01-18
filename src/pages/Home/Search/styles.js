import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 85vw;
  height: 356px;
  color: #000;
  margin: 35px 0;
  margin-left: 8.5vw;
  display: flex;
  justify-content: space-between;
  font-size: 20px;

  .titulo {
    width: 50%;
    h1 {
      font-size: 38px;
      color: #121212;
    }
  }

  span {
    color: #6c63ff;
  }
  h2 {
    color: #666;
  }
  div:first-child {
    padding: 60px 0px;
  }
  div:last-child {
    padding: 60px 46px;
  }
  div input {
    color: #666;
    margin-top: 40px;
    width: 95%;
    height: 35px;
    padding-left: 20px;
    ::placeholder {
      color: #666;
    }
  }

  @media (max-width: 1100px) {
    .titulo {
      width: 100%;

      h1 {
        text-align: center;
        font-size: 40px;
      }
    }
    margin: 5px 0;
    margin-left: 3.5vw;
    height: auto;
    div:last-child {
      display: none;
    }
  }
  @media (max-width: 600px) {
    div:first-child {
      padding: 29px 16px;
    }
  }
`;
