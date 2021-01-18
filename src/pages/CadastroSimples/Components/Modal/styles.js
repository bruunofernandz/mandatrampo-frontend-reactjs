import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: ${(props) => (props.modal ? "flex" : "none")};
  .btn-header {
    padding-bottom: 40px;
    display: flex;
    justify-content: flex-end;
  }
  .btn-footer {
    color: #000;
    padding-bottom: 40px;
    display: block;
    margin-left: auto;
    margin-right: auto
  }
`;

export const Body = styled.div`
  background: #fff;
  min-height: 70vh;
  min-width: 60vw;
  width: 60vw;
  height: 70vh;
  border-radius: 4px;
  overflow-y: scroll;
  button {
    width: 20px;
    height: 20px;
    border: none;
    margin-left: 10px;
    margin-top: 10px;
    font-size: 20px;
    color: #999;
  }
  h1 {
    width: 100%;
    text-align: center;
    color: #6c63ff;
    font-family: "Arial";
    font-size: 20px;
    font-weight: 500;
  }

  b, h3 {
    color: #000;
  }

  h3 {
    text-align: center;
  }

  @media (max-width: 900px) {
    min-height: 80vh;
    min-width: 80vw;
    width: 80vw;
    height: 80vh;
    h1 {
      font-size: 18px;
    }
  }
`;

export const Text = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 40px;
  p {
    font-size: 12px;
    color: #999;
    text-align: justify;
    margin: 0;
    margin-top: 20px;
  }

  @media (max-width: 900px) {
    p {
      font-size: 18px;
    }
  }
`;
