import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  height: 25px;
  align-items: center;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    border-radius: 4px;
  }

  input ~ .checkmark {
    box-shadow: 0px 0px 2px #999999;
  }

  input:checked ~ .checkmark {
    background: rgb(63, 61, 86);
  }

  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  input:checked ~ .checkmark:after {
    display: block;
  }

  .checkmark:after {
    left: 9px;
    top: 5px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
  span {
    color: #999;
    span {
      cursor: pointer;
      color: #3399ff;
    }
  }
  @media (max-width: 1100px) {
    span {
      color: #fff;
    }
    input:checked ~ .checkmark {
      background: #6c63ff;
    }
    input ~ .checkmark {
      box-shadow: 0px 0px 2px #ffffff;
    }
  }
`;
