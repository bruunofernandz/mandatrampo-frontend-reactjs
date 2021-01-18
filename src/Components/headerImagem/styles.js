import styled from "styled-components";
import imagemSuper from "../../assets/montagem-super.png";

export const Container = styled.div`
  width: 100%;
  height: 200px;
  background-image: url(${imagemSuper});
  background-attachment: fixed;
  background-repeat: repeat-x;

  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: normal;

  @media (max-width: 600px) {
    display: none;
  }
`;
