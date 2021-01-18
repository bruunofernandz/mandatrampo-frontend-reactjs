import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  .img {
    width: 700px;
    background-size: cover;
    background-image: url(${(props) => props.img});
    @media (max-width: 600px) {
      display: none;
      width: 0;
    }

    margin: 0;
    padding:0;
  }

  select option[disabled]:first-child {
    display: none;
  }
`;

export const Form = styled.form`
  display: flex;
  padding: 30px;
  width: 700px;
  height: 100%;

  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* border: 1px solid black; */

  select {
    width: 250px;
  }
  textarea {
    margin-top: 20px;
    margin-bottom: 20px;
    width: 100%;
    padding: 20px;
    line-height: 20px;
    text-align: justify;
    border: 1px solid #666;
    border-radius: 4px;
  }

  .button {
    padding: 10px;
    width: 100px;
    font-size: 1rem;
    align-items: center;
    text-decoration: none;
    color: #666;
    border: 1px solid #666;
    border-radius: 4px;
    margin-right: 25px;

    :hover {
      background: #6c63ff;
      border: 1px solid #6c63ff;
      color: #fff;
    }
  }
`;

export const Row = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 40px;

  .name {
    width: 250px;
    height: 40px;
    padding: 10px;
    margin-left: 10px;
    border: 1px solid #666;
    border-radius: 4px;
  }

  .email {
    width: 250px;
    height: 40px;
    padding: 10px;
    margin-left: 10px;
    border: 1px solid #666;
    border-radius: 4px;
  }

  .telefone {
    width: 125px;
    height: 40px;
    padding: 10px;
    margin-left: 10px;
    border: 1px solid #666;
    border-radius: 4px;
  }

  .wrapper-celular {
    margin-left: 10px;
    /* border: 1px solid black; */
  }

  .celular {
    width: 125px;
    height: 40px;
    padding: 5px;
    margin-left: 20px;
    margin-right: 20px;
    border: 1px solid #666;
    border-radius: 4px;
  }

  .estado {
    width: 60px;
    height: 40px;
    padding: 5px;
    border: 1px solid #666;
    border-radius: 4px;
    background: transparent;
  }

  .cidade {
    width: 200px;
    height: 40px;
    padding: 5px;
    border: 1px solid #666;
    border-radius: 4px;
    background: transparent;
  }

  .redesocial {
    width: 310px;
    height: 40px;
    padding: 5px;
    border: 1px solid #666;
    border-radius: 4px;
    background: transparent;
  }

  .whats {
    margin-left: 10px;
  }

  .profissao {
    width: 150px;
    height: 40px;
    padding: 10px;
    border: 1px solid #666;
    border-radius: 4px;
    background: transparent;
  }

  .profissao {
    width: 220px;
    height: 40px;
    padding: 10px;
    border: 1px solid #666;
    border-radius: 4px;
    background: transparent;
  }

  .profissao_outros {
    width: 220px;
    height: 40px;
    padding: 10px;
    border: 1px solid #666;
    border-radius: 4px;
    background: transparent;
  }

  .experiencia {
    width: 120px;
    height: 40px;
    padding: 10px;
    border: 1px solid #666;
    border-radius: 4px;
    background: transparent;
  }

  .wrapper-foto {
    width: 100%;
    height: 45px;
    border-radius: 4px;
    padding: 20px;
    border: 1px solid #666;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .titulo-foto {
    /* margin-left: auto; */
    margin-right: auto;
  }

  @media (max-width: 600px) {
    /* border: 1px solid black; */
    height: auto;

    flex-direction: column;
    align-items: center;
    justify-content: center;

    .name {
      margin-left: 0px;
      width: 260px;
      display: block;
    }

    .email {
      display: block;
      margin-left: 0px;
      width: 260px;
    }

    .telefone {
      display: block;
      width: 260px;
      height: 40px;
      padding: 10px;
      margin-left: 0px;
      border: 1px solid #666;
      border-radius: 4px;
    }

    .wrapper-celular {
      margin-left: 0px;
      flex-direction: column;
      align-items: center;
    }

    .celular {
      display: block;
      width: 260px;
      margin-left: 0px;
      margin-right: 0px;
    }

    .estado {
      display: block;
      width: 260px;
      height: 40px;
    }

    .cidade {
      display: block;
      width: 260px;
      height: 40px;
    }

    .redesocial {
      display: block;
      width: 260px;
      height: 40px;
    }

    .profissao {
      display: block;
      width: 260px;
      height: 40px;
    }

    .profissao_outros {
      display: block;
      width: 260px;
      height: 40px;
    }

    .experiencia {
      display: block;
      width: 260px;
      height: 40px;
    }

    .titulo-foto {
      display: none;
    }

    input[type="file"] {
      display: block;
      width: 220px;
      height: 100px;
    }

    .wrapper-foto {
      flex-direction: column;
      height: 65px;
      display: block;
      width: 260px;
    }

    .descricao {
      height: 300px;
      display: block;
      width: 200px;
    }
  }
`;
