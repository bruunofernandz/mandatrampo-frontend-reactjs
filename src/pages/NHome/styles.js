import styled from "styled-components";

export const CardsBox = styled.div`
  margin: 0 8.5vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  .horizon {
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  h1 {
    margin-top: 15px;
    font-size: 16px;
    width: 50%;
    color: #747474;
    text-transform: uppercase;
    text-align: center;
    @media (max-width: 1090px) {
      width: 100%;
      margin-bottom: 20px;
    }
  }

  button {
    margin-bottom: 20px;
    height: 40px;
    width: 145px;
    color: #7062ff;
    border: 1px solid #7062ff;
    transition: background 0.5s;
    :hover {
      transition: background 0.5s;
      color: #fff;
      background-color: #7062ff;
    }
    .load {
      width: 100px;
    }
  }
  @media (max-width: 1090px) {
    .btnArrow {
      width: 100%;
      display: flex;
      justify-content: center;
    }
  }

  .more {
    width: 190px;
  }
`;
