import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    width: 100vw;
    height: 100vh;
    background-color: #f0f2f5;
    font-family: 'Poppins', sans-serif;
    overflow-x: hidden;
  }

  button, input {
    font-family: 'Poppins', sans-serif;
  }

  ::selection {
    background-color: rgba(106, 106, 106, 0.3);
    color: #ffffff;
  }
`
export default GlobalStyle;