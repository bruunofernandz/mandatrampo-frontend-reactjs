import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 60vw;
  max-width: 60vw;
  min-width: 60vw;
  min-height: 90vh;

  @media (max-width: 900px) {
    padding: 20px 20px;
  }

  .whatsDiv {
    display: flex;
    align-items: center;
  }

  h1 {
    color: #666;
  }

  input:not([type="checkbox"]),
  select {
    height: 40px;
    width: 45%;
    border-radius: 4px;
    margin: 1.5% 2.5%;
    padding-left: 10px;
  }

  #cel {
    width: 25%;
  }

  #estado {
    width: 10%;
  }

  #cidade {
    width: 30%;
  }

  .whatsapp {
    max-width: 15%;
    width: 15%;
    height: 40px;

    font-size: 10px;
  }

  select {
    border: 2px solid #999;
    background: transparent;
  }

  input:focus,
  select:focus,
  textarea:focus {
    border: 2px solid #6c63ff;
    color: #6c63ff;
  }

  select option[disabled]:first-child {
    display: none;
  }

  button {
    height: 40px;
    width: 95%;
    flex: 1;
    border-radius: 4px;
    border: 0;
    margin: 1.5% 2.5%;
    color: #fff;
    font-weight: bold;
    background: #000;
    margin-bottom: 40px;
  }

  .groupButton {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;

    button {
      max-width: 160px;
      margin-right: 15px;
      border: 1px solid #6c63ff;
      background: #6c63ff;
    }
  }

  #addFoto {
    min-width: 100%;
    text-align: center;
    color: #999;
    max-width: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .dropzone {
    margin: 15px 0px 35px 0px;
  }

  input[type="file"] {
    display: none;
  }

  .perfil {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    color: #999;
    font-size: 30px;
    border: 1px dashed #999;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    .plus {
      position: absolute;
      left: 0;
      right: 0;
    }

    img {
      object-fit: cover;
      width: 80px;
      height: 80px;
      border-radius: 50%;
      opacity: 0.3;
    }
  }

  .middle {
    width: 20%;
    max-width: 20%;
    min-width: 20%;

    @media (max-width: 1100px) {
      width: 95vw;
      max-width: 95vw;
      min-width: 95vw;
    }
  }

  .description {
    @media (max-width: 1100px) {
      width: 95vw;
      max-width: 95vw;
      min-width: 95vw;
    }
  }

  .photo {
    padding-top: 25px;
  }

  textarea {
    background: transparent;
    border: 2px solid #999;
    padding: 10px;
    width: 97%;
    color: #999;
  }

  .whatsapp {
    width: 25%;
    min-width: 25%;
    max-width: 25%;
    font-size: 90%;
  }

  @media (max-width: 1100px) {
    width: 100vw;
    max-width: 100vw;
    min-width: 100vw;
    color: #999;
    margin-top: 25px;

    h1 {
      margin-bottom: 25px;
      color: #999;
      font-size: 90%;
    }

    #cel {
      max-width: 52vw;
      min-width: 52vw;
      width: 52vw;
    }
    input:not([type="radio"]) {
      min-width: 95vw;
      max-width: 95vw;
      width: 95vw;
    }

    select {
      color: #999;
      min-width: 95vw;
      max-width: 95vw;
      width: 95vw;
    }

    #estado {
      width: 25%;
    }

    #cidade {
      width: 60%;
    }

    .whatsapp {
      max-width: 100vw;
      min-width: 100vw;
      width: 100vw;
    }

    .groupButton {
      display: flex;
      flex-direction: row;
      margin: 0;
      justify-content: center;
      width: 100vw;
      min-width: 100vw;
      max-width: 100vw;
    }

    #addFoto {
      margin-top: 35px;
      min-width: 100vw;
      text-align: center;
      color: #999;
      max-width: 100vw;
      width: 100vw;
    }

    .plus {
      position: absolute;
    }

    textarea {
      width: 80%;
      margin-bottom: 20px;
    }
  }

  option {
    color: #666;
  }
`;
