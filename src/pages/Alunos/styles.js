import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-items: space-between;
  button {
    height: 100px;
    width: 150px;
    flex: 1;
    border-radius: 4px;
    border: 0;
    color: #fff;
    font-weight: bold;
    font-size: 18px;
    text-transform: uppercase;
    background: #6c63ff;
    margin: 12px 0;
    border: 1px solid #636cff;
    padding: 10px;
    :hover {
      cursor: pointer;
      background: transparent;
      color: #636cff;
      border: 1px solid #636cff;
    }
  }
`;

export const Images = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70%;
  margin-top: 10px;

  img {
    width: 100%;
  }

`;

export const Col = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  margin-top: 10px;
  p {
      width: 30%;
      font-size: 1.2rem;
      line-height: 1.9;
      color: rgb(102, 102, 102);
      padding: 0px;
      text-align: center;
      margin-bottom: 50px;
  }
  @media (max-width: 1100px){
      justify-content: flex-start;
      flex-direction: column;
      p {
      width: 100%;
      font-size: 0.9rem;
      }
}

`;
