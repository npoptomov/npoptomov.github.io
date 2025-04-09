import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@500;700&display=swap');

  body {
    margin: 0;
    font-family: 'Orbitron', 'Roboto', sans-serif;
    background: radial-gradient(ellipse at top, #1a1a3d 0%, #0a0a23 100%);
    color: #fff;
    overflow-x: hidden;
    scroll-behavior: smooth;
    background-attachment: fixed;
  }

  * {
    box-sizing: border-box;
  }

  a {
    color: #00d4ff;
    text-decoration: none;
    transition: all 0.3s ease;
    &:hover {
      text-shadow: 0 0 15px #00d4ff;
    }
  }

  ::selection {
    background: #00d4ff;
    color: #fff;
  }
`;