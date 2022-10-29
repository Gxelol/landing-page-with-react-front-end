import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,900;1,900&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 61.5%;
  }

  body {
    font-size: 1.6rem;
    background-color: black;
    font-family: ${({ theme }) => theme.fonts.family.default};
  }

  h1 {
    font-family: ${({ theme }) => theme.fonts.family.secondary};
  }
`;
