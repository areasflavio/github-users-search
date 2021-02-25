import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body, html, #root {
    min-height: 100%;
  }

  body, input, button {
    font-family: 'Roboto', sans-serif;
  }

  button {
    border: none;
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }
`;
