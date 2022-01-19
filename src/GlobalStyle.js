import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root{
    --white: #fff;
    --medWhite: #F5F7FB;
    --lightBlue: #a8dadc;
    --darkBlue: #293264;
    --medBlue: #4D5B9E;
  }

  *{
    box-sizing: border-box;
  }

  body{
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
    height: 100vh;
    background-color: var(--lightBlue);
  }

`;
