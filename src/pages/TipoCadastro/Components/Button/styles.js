import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100vw;
  margin-top: 95px;
  margin-bottom: 25px;
  flex-direction: column;
  .titulo {
    color: #4f4f4f;
    width: 100%;
    padding: 3px;
    align-items: center;
    text-align: center;
    font-size: 28px;
    font-weight: bold;
  }
  p {
    color: #808080;
    width: 100%;
    padding: 3px;
    text-align: center;
  }
  .desc2 {
    display: none;
    text-transform: uppercase;
  }
  @media (max-width: 1100px) {
    min-width: 95%;
    max-width: 95%;
    width: 95%;
    display: flex;
    flex-direction: column;
    .titulo {
      color: #fff;
      width: 100%;
      padding: 3px;
      align-items: center;
      text-align: center;
      text-transform: uppercase;
      font-size: 1.52rem;
      font-weight: normal;
      line-height: 1.7;
    }
    .desc2 {
      display: inline;
      margin-top: 10px;
      color: #fff;
      width: 100%;
      text-transform: uppercase;
      padding: 3px;
      text-align: center;
      font-size: 0.74rem;
      line-height: 0.1;
    }
    .desc1 {
      text-transform: uppercase;
      display: none;
    }
  }
`;
export const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: space-between;
  flex-direction: row;
  margin-top: 18px;
  width: 100%;
  @media (max-width: 1100px) {
    margin-top: 86px;
    min-width: 100%;
    max-width: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: space-between;
    flex-direction: column;
  }

  @media (max-width: 1366px) {
    height: 100%;
  }
`;
export const Box2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 28%;
  height: 100%;
  margin: 40px;
  padding-top: 70px;
  padding-bottom: 60px;
  border-color: #a9a9a9;
  border-radius: 4px;
  border-width: 2px;
  a: {
    text-transform: uppercase;
  }
  border-style: solid;
  h3 {
    color: #999;
    font-size: 1.09rem;
    text-transform: uppercase;
  }
  .desc2 {
    text-transform: uppercase;
    display: none;
  }
  .ico {
    font-size: 70px;
    color: #999;
  }
  @media (max-width: 1366px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 28%;
    height: 65%;
    margin: 40px;
    padding-top: 60px;
    padding-bottom: 50px;
    border-color: #a9a9a9;
    border-radius: 4px;
    border-width: 2px;
    border-style: solid;
    h3 {
      color: #999;
      font-size: 1.09rem;
    }
    .desc2 {
      display: none;
    }
  }
  @media (max-width: 1100px) {
    border: none;
    justify-content: space-around;
    align-items: center;
    margin-left: 0;
    margin-right: 0;
    margin-bottom: 15px;
    min-width: 100%;
    max-width: 100%;
    width: 100%;
    padding: 6px;
    h3 {
      display: none;
    }
  }
`;
export const GroupButton = styled.div`
  width: 58%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;

  a {
    text-decoration: none;
  }
  button {
    display: inline-block;
    flex: 1;
    border-radius: 4px;
    border: 0;
    color: #fff;
    font-weight: bold;
    background: #6c63ff;
    height: 47px;
    margin-top: 10px;
  }
  p {
    color: #fff;
    font-size: 0.95rem;
  }
  .desc2 {
    text-transform: uppercase;
    display: none;
  }
  @media (max-width: 1366px) {
    width: 58%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    button {
      display: inline-block;
      flex: 1;
      border-radius: 4px;
      border: 0;
      color: #fff;
      font-weight: bold;
      background: #6c63ff;
      height: 47px;
    }
    p {
      color: #fff;
      font-size: 0.89rem;
    }
  }
  @media (max-width: 1100px) {
    width: 98%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    height: 0px;
    padding-top: 0;
    button {
      display: inline-block;
      flex: 1;
      border-radius: 4px;
      border: 0;
      color: #fff;
      font-weight: bold;
      background: #6c63ff;
      height: 40px;
    }
    .desc2 {
      padding-top: 0;
      margin: 5px 0 0 0;
      line-height: 0.6;
      display: block;
      font-size: 14px;
      text-transform: uppercase;
    }
    .desc1 {
      text-transform: uppercase;
      display: none;
    }
  }
`;
