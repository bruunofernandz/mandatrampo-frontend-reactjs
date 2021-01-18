import styled from "styled-components";

export const Container = styled.div`
  width: 24%;
  min-height: 230px;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  margin-bottom: 25px;
  text-align: center;
  padding-top: 25px;
  border-radius: 10px;
  -webkit-box-shadow: 9px 11px 14px -1px rgba(195, 190, 205, 1);
  -moz-box-shadow: 9px 11px 14px -1px rgba(195, 190, 205, 1);
  box-shadow: 9px 11px 14px -1px rgba(195, 190, 205, 1);
  transition: all 0.2s;
  > h2 {
    padding: 0 20px;
  }
  h2 {
    display: block;
    width: 100%;
    color: #7062ff;
    font-size: 15px;
    /* font-weight: bolder; */
    text-transform: uppercase;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  p {
    font-size: 14px;
    width: 100%;
    margin-bottom: 5px;
    padding: 0 20px;
    display: block;
    /* text-transform: uppercase; */
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }

  .link {
    width: 100%;
    text-decoration: none;
  }
  .button {
    display: flex;
    justify-content: center;
    min-width: 100%;
    padding-left: 0;
    text-decoration: none;
    button {
      width: 50%;
      margin-top: 10px;
    }
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
  }

  .photo {
    margin: auto;
    width: 215px;
    height: 140px;
    object-fit: cover;
  }

  .datas {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .social {
    /* background: #F1F1F1; */
    display: flex;
    justify-content: space-around;
    padding: 0 40px;
    width: 100%;
    img {
      margin: 10px 0;
      filter: grayscale(100%);
      width: 25px;
    }
  }

  @media (max-width: 1100px) {
    width: 48%;
  }
  @media (max-width: 760px) {
    width: 100%;
  }
`;
