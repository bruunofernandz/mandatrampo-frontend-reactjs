import styled from "styled-components";

export const CardsBox = styled.div`
  margin: 0 8.5vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  .horizon {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
  }
  h1 {
    margin-top: 100px;
    margin-bottom: 50px;
    font-size: 25px;
    width: 50%;
    color: #747474;
    text-transform: uppercase;
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
    border: 2px solid #7062ff;
    :hover {
      color: #fff;
      background-color: #7062ff;
    }
    .load {
      width: 100px;
    }
  }
  #estado {
    margin-top: 100px;
    margin-bottom: 50px;
    height: 37px;
    width: 10vw;
  }
  select option[disabled]:first-child {
    display: none;
  }

  #cidade {
    margin-top: 100px;
    margin-bottom: 50px;
    height: 37px;
    width: 12vw;
  }
  #categoria {
    margin-top: 100px;
    margin-bottom: 50px;
    height: 37px;
    width: 10vw;
  }

  select {
    border: 1px solid rgb(191, 191, 191);
    border-radius: 5px;
    color: rgb(115, 115, 115);
    padding-left: 10px;
    border-right: 10px;
    background-color: transparent;
  }

  .more {
    width: 190px;
  }

  @media (max-width: 1090px) {
    #estado {
      margin-top: 35px;
      margin-bottom: 50px;
      height: 37px;
      width: 18vw;
    }
    #cidade {
      margin-top: 35px;
      margin-bottom: 50px;
      height: 37px;
      width: 30vw;
    }
    #categoria {
      margin-top: 35px;
      margin-bottom: 50px;
      height: 37px;
      width: 18vw;
    }
  }

  @media (max-width: 760px) {
    #estado {
      margin-top: 25px;
      margin-bottom: 5px;
      height: 37px;
      width: 100vw;
    }
    #cidade {
      margin-top: 10px;
      margin-bottom: 5px;
      height: 37px;
      width: 100vw;
    }
    #categoria {
      margin-top: 10px;
      margin-bottom: 55px;
      height: 37px;
      width: 100vw;
    }
  }
`;
