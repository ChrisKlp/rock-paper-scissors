import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset-advanced';
import './fonts.css';

const GlobalStyle = createGlobalStyle`
  ${reset}

  html {
    font-size: 62.5%;
  }

  body {
    min-width: 28rem;
    min-height: 100vh;
    font-family: 'Barlow Semi Condensed', sans-serif;
    font-size: 1.4rem;
    background: ${({ theme }) => theme.colors.background} no-repeat;
    overflow-x: hidden;

  }

`;

export default GlobalStyle;
