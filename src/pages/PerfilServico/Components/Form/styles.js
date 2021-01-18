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

  .dropzone {
    margin: 35px 20px 35px 20px;
  }

  h1 {
    color: #666;
    font-size: 22px;
    margin-bottom: 7px;
  }

  #btntopo {
    display: none;
  }

  #mobi {
    display: none;
  }

  #desk {
    display: inline-block;
  }

  input:not([type="checkbox"]),
  select {
    height: 40px;
    width: 41%;
    border-radius: 4px;
    margin: 1.5% 2.5%;
    padding-left: 10px;
  }

  #estado {
    width: 8%;
  }

  #cidade {
    width: 28%;
  }

  #cel {
    width: 25%;
  }

  .whatsapp {
    max-width: 100vw;
    min-width: 100vw
    width: 100vw;
    height: 40px;
  }

  #chec {
    max-width: 0.8vw;
    min-width: 0.8vw;
    width: 0.8vw;
  }

  #textcheck {
    max-width: 5vw;
    min-width: 5vw;
    width: 5vw;
    font-size: 1.1rem;
    float: right;
    margin-right: 100px;
    margin-top: 20px;
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
    width: 91%;

    button {
      max-width: 160px;
      margin-right: 15px;
      border: 1px solid #6c63ff;
      background: #6c63ff;
    }
  }

  #addFoto {
    margin-top: 20px;
    min-width: 92%;
    text-align: center;
    color: #999;
    max-width: 92%;
    width: 92%;
  }

  .perfil {
    height: 180px;
    border: 50%;
    color: #999;
    font-size: 30px;
    background: transparent;
    border: 1px dashed #999;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    input[type="file"] {
      display: none;
    }
  }
  p {
    font-size: 14px;
  }

  .middle {
    width: 20%;
    max-width: 20%;
    min-width: 20%;
  }

  textarea {
    background: transparent;
    border: 2px solid #999;
    padding: 10px;
    width: 95%;
    color: #999;
  }

  @media (max-width: 1100px) {
    text-align: center;
    width: 100vw;
    max-width: 100vw;
    min-width: 100vw;
    color: #999;
    margin-top: 25px;

    .dropzone {
      padding: 30px 8%;
    }

    h1 {
      margin-bottom: 25px;
      color: #999;
      font-size: 21px;
      color: #6c63ff;
      line-height: 0.1;
    }

    .whatsapp {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      max-width: 100vw;
      min-width: 100vw;
      width: 100vw;
      margin-top: 15px;
    }

    #textcheck {
      max-width: 20vw;
      min-width: 20vw;
      width: 20vw;
      border: none;
      font-size: 1.1rem;
      margin-left: -2px;
      margin-bottom: 15px;
      margin-right: 19px;
      margin-top: 0;
    }

    #chec {
      max-width: 5vw;
      min-width: 5vw;
      width: 5vw;
      margin-bottom: 15px;
    }

    #desk {
      display: none;
    }

    #mobi {
      display: inline-block;
    }

    #cel {
      max-width: 50vw;
      min-width: 50vw;
      width: 50vw;
    }

    input:not([type="checkbox"]) {
      min-width: 80vw;
      max-width: 80vw;
      width: 85vw;
      margin-bottom: 26px;
    }

    #estado {
      color: #999;
      min-width: 23vw;
      max-width: 23vw;
      margin-bottom: 26px;
    }

    #cidade {
      color: #999;
      min-width: 52vw;
      max-width: 52vw;
      margin-bottom: 26px;
    }

    #categoria2 {
      color: #999;
      min-width: 80vw;
      max-width: 80vw;
      margin-bottom: 26px;
    }

    @media (max-width: 900px) {
      .dropzone {
        padding: 30px 8%;
        margin: 0 10px;
      }

      .previewImage {
        width: 100vw;
        height: 20vh;

        div {
          width: 20px;
          height: 20px;
          margin: 0px 10px;

          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 4px;
          }
        }
      }
      .groupButton {
        display: flex;
        flex-direction: row;
        margin: 0;
        justify-content: center;
        align-items: center;
        width: 100vw;
        min-width: 100vw;
        max-width: 100vw;
        button {
          max-width: 137px;
          margin-left: 13px;
          border: 1px solid #6c63ff;
          background: #6c63ff;
        }
      }
    }

    #addFoto {
      margin-top: 6px;
      min-width: 100vw;
      text-align: center;
      color: #999;
      max-width: 100vw;
      width: 100vw;
    }

    textarea {
      width: 80%;
    }

    .perfil {
      height: 120px;
      border: 50%;
      color: #999;
      background: transparent;
      border: 1px dashed #999;
    }

    p {
      font-size: 9px;
      margin-left: 20px;
      margin-right: 20px;
    }

    #btntopo {
      display: flex;
      flex-direction: column;
      width: 100%;
      max-width: 100%;
      min-width: 100%;
      height: 105px;
      a {
        text-decoration: none;
        color: #dcdcdc;
        text-align: left;
      }
      p {
        font-size: 0.8rem;
        font-weight: bold;
        margin-left: 25px;
        margin-top: 14px;
      }
    }
  }

  .previewImage {
    display: flex;
    justify-content: center;
    align-items: center;

    div {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100px;
      height: 100px;
      margin: 0px 20px;
      background: #121212;
      position: relative;
      border-radius: 4px;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: 0.8;
        position: absolute;
        border-radius: 4px;
      }

      button {
        background: transparent;
        position: absolute;
      }
    }
  }
`;
