import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root{

  }

  *{
    box-sizing: border-box;
  }

  body{
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #a8dadc;
  }

  .App {
    background-color: #fff;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    /* width: 560px; */
    height: 760px;
    display: flex;
    align-items: center;
    justify-content: center;

    .start-quiz {
      text-align: center;
      position: relative;


        h1 {
          font-family: 'Karla', sans-serif;
          font-size: 32px;
          line-height: 36px;
          margin-bottom: 0;
          color: #293264;
          height: 41px;
          font-weight: bold;
        }

        p {
          font-family: 'Inter', sans-serif;
          color: #293264;
          font-weight: 300;
        }


        button {
          font-family: 'Inter', sans-serif;
          width: 193px;
          height: 52px;
          background-color: #4D5B9E;
          border-radius: 15px;
          border: none;
          cursor: pointer;
          color: #F5F7FB;
          font-size: 16px;
          margin-top: 10px;
        }
      }
    }
`;
