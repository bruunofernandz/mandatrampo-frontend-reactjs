import styled from "styled-components";

export const Container = styled.div`
  width: 24%;
  min-height: 430px;
  background: #fff;
  position: relative;
  margin-bottom: 25px;
  text-align: center;
  padding-top: 25px;
  border-radius: 10px;
  -webkit-box-shadow: 9px 11px 14px -1px rgba(195, 190, 205, 1);
  -moz-box-shadow: 9px 11px 14px -1px rgba(195, 190, 205, 1);
  box-shadow: 9px 11px 14px -1px rgba(195, 190, 205, 1);
  transition: all 0.2s;
  .social {
    position: absolute;
    bottom: 70px;
    display: flex;
    justify-content: space-around;
    padding: 10px 57px;
    width: 100%;
    .ico {
      font-size: 25px;
      color: #656;
    }
  }
  > h2 {
    padding: 0 20px;
  }
  h2 {
    display: block;
    width: 100%;
    color: #7062ff;
    font-size: 15px;
    font-weight: bolder;
    text-transform: uppercase;
    margin-top: 20px;
  }

  p {
    font-size: 14px;
    width: 100%;

    margin-bottom: 5px;
    padding: 0 20px;
    display: block;
  }
  div {
    display: flex;
    justify-content: center;
    width: 100%;
    padding-left: 0;
    button {
      width: 50%;
      /* font-weight: bolder; */
      margin-top: 10px;
      position: absolute;
      bottom: 0px;
    }
  }

  .photo {
    margin: auto;
    width: 215px;
    height: 140px;
  }

  :hover {
    background: #7062ff;
    transition: all 0.2s;
    p,
    h2 {
      color: #fff;
    }
    div {
      button {
        border: 2px solid #fff;
        color: #fff;
        :hover {
          transition: all 0.2s;
          background: #fff;
          color: #7062ff;
        }
      }
    }
    .social {
      .ico {
        color: #fff;
      }
    }
  }

  .datas {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
  }

  @media (max-width: 1100px) {
    width: 48%;
  }
  @media (max-width: 760px) {
    width: 100%;
  }
`;
