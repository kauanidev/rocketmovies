import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialised;
  }

  
  :root {
    font-size: 62.5%;
  }

  body, html, button, input, textarea {
    font-family: 'Roboto Slab', sans-serif;
  }

  body {
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.white};
  }

  .container {
    width: 100%;
    max-width: 1120px;
    padding-left: 2rem;
    padding-right: 2rem;
    margin-left: auto;
    margin-right: auto;
  }

  ::-webkit-scrollbar {
    width: .8rem;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.background};
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.primary};
    border-radius: 99.9rem;
  }
`;
