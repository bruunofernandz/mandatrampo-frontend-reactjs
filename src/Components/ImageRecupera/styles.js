import styled from "styled-components";

export const Container = styled.div`
  background-image: url(${(props) => props.HelpImage});
  width: 70vw;
  max-width: 70vw;
  min-width: 70vw;
  min-height: 100%;
  background-size: cover;
  div {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  span {
    color: #fff;
    font-weight: bold;
    letter-spacing: 1px;
    text-align: center;
    font-size: 16px;
    margin: 12px 12px;
  }

  .logo-login {
    width: 500px;
    margin-bottom: 75px;
  }
  @media (max-width: 1100px) {
    display: none;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 100vw;

  }
`;

export const Images = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-left: 50px;
  margin-top: 50px;
/*
  img {
    width: 100%;
  } */

  span {
    font-weight: bold;
    color: #999;
    letter-spacing: 1px;
    text-align: center;
    span {
      margin: 0px;
      color: #6c63ff;
    }
  }

  @media only screen and (min-width : 320px) and (max-width : 480px) {
    margin-left: 0%;
    img {
      width: 70%;
      padding-top: 3%;
    }

    span {
      font-size: 12px;
      margin: 12px 12px;
    }
  }

  @media only screen and (min-width : 481px) and (max-width : 595px) {
    margin-left: 0%;
    img {
      width: 80%;
      padding-top: 3%;
    }

    span {
      font-size: 14px;
      margin: 12px 12px;
    }
  }

  @media only screen and (min-width : 596px) and (max-width : 690px) {
    margin-left: 0%;
    img {
      width: 80%;
      padding-top: 3%;
    }

    span {
      font-size: 20px;
      margin: 12px 12px;
    }
  }

  @media only screen and (min-width : 691px) and (max-width : 800px) {
    margin-left: 0%;
    img {
      width: 80%;
      padding-top: 3%;
    }

    span {
      font-size: 20px;
      margin: 12px 12px;
    }
  }

  @media only screen and (min-width : 801px) and (max-width : 1024px) {
    margin-left: 0%;
    img {
      width: 80%;
      padding-top: 3%;
    }

    span {
      font-size: 20px;
      margin: 12px 12px;
    }
  }

  @media only screen and (min-width: 1025px) and (max-width: 1280px) {
    margin-left: 0%;
    img {
      width: 80%;
      padding-top: 3%;
    }

    span {
      font-size: 23px;
      margin: 12px 12px;
    }
  }

  @media only screen and (min-width: 1281px) and (max-width: 1366px) {
    margin-left: 0%;
    img {
      width: 75%;
      padding-top: 3%;
    }

    span {
      font-size: 23px;
      margin: 12px 12px;
    }
  }

  @media only screen and (min-width: 1367px) and (max-width: 1600px) {
    margin-left: 0%;
    img {
      width: 83%;
      padding-top: 3%;
    }

    span {
      font-size: 25px;
      margin: 12px 12px;
    }
  }

  @media only screen and (min-width: 1601px) and (max-width: 1824px) {
    margin-left: 0%;
    img {
      width: 85%;
      padding-top: 3%;
    }

    span {
      font-size: 27px;
      margin: 12px 12px;
    }
  }

  @media only screen and (min-width: 1825px) and (max-width: 1920px) {
    margin-left: 0%;
    img {
      width: 90%;
      padding-top: 3%;
    }

    span {
      font-size: 30px;
      margin: 12px 12px;
    }
  }
`;
