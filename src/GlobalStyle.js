import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap');
  * {
    padding: 0;
    margin: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    max-height: 100vh;
    font-family: 500 14px 'Montserrat', sans-serif;
    background: #EEE;
    -webkit-font-smoothing: antialiased !important;
    position: relative;
    overflow-x: hidden;
    -webkit-user-select: none;
     -moz-user-select: -moz-none;
      -ms-user-select: none;
          user-select: none;
  }

  ::selection {
    background: rgb(63, 61, 86);
    color: #fff;
  }

  body, input, button {
    font: 14px 'Montserrat', sans-serif;
  }

  input, button, textarea {
    border: 2px solid #999;
    background: none;
    border-radius: 4px;
  }

  input[type="file"] {
    border: 0;
    background: transparent;
    border-radius: 4px;
  }

  input {
    color: #999;
  }

  button {
    cursor: pointer;
  }

  textarea {
    resize: none;
  }
`;
