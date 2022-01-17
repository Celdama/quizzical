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
  }

  .App {
    outline: 1px solid red;
    width: 560px;
    height: 560px;
    display: flex;
    align-items: center;
    justify-content: center;

    .start-quiz {
      text-align: center;
      position: relative;
      /* overflow: hidden; */

      .content {
        overflow: hidden;
        position: relative;
        width: 560px;
        height: 560px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .yellow-blob {
          position: absolute;
          height: 235px;
          width: 297px;
          background-color: red;
          left: 72%;
          top: -10%;
          border-radius: 40px 35px 34px 56px;
          background-color: #FFFAD1;
          transform: rotate(-128deg);
        }

        .blue-blob {
          position: absolute;
          height: 235px;
          width: 297px;
          background-color: red;
          left: -20%;
          bottom: -20%;
          border-radius: 96px;
          background-color: #DEEBF8;
        }

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
  }

  .green {
    color: green;
  }
`;
