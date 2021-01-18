import styled from "styled-components";

export const Title = styled.nav`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  width: 100%;
  height: 100px;
  font-size: 1.5rem;

  @media (max-width: 600px) {
    font-size: 0.75rem;
    height: 50px;
    align-items: flex-end;
  }
`;

export const Container = styled.div`
  display: flex;
  height: 70vh;
  align-items: center;
  justify-content: space-evenly;

  @media (max-width: 768px) {
    flex-direction: column;
    margin: 0 auto;
    height: 100vh;
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: #fff;
  border-radius: 30px;

  width: 300px;
  height: 300px;

  -webkit-box-shadow: 9px 11px 14px -1px rgba(195, 190, 205, 1);
  -moz-box-shadow: 9px 11px 14px -1px rgba(195, 190, 205, 1);
  box-shadow: 9px 11px 14px -1px rgba(195, 190, 205, 1);

  @media (max-width: 768px) {
    width: 280px;
    height: 230px;
  }

  .wrapper-title-icon {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 300px;
    height: 50%;
  }

  .icon {
    width: 50px;
    height: 50px;
  }

  .box-button {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    width: 150px;
    height: 50px;
    color: #7062ff;
    border: 1px solid #7062ff;
    text-decoration: none;
    border-radius: 4px;
    :hover {
      color: #fff;
      background: #7062ff;
    }
  }
`;
