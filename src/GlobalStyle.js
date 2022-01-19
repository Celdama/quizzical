import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root{
    --white: #fff;
    --medWhite: #f5f7fB;
    --lightBlue: #a8dadc;
    --darkBlue: #293264;
    --medBlue: #4d5b9e;
    --lightGray: #dbdef0
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
