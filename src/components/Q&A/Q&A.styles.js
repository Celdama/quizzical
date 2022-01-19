import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 90%;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  button {
    align-self: center;
    /* margin-top: 8px; */
    border: none;
    border-radius: 10px;
    color: #fff;
    padding: 8px;
    background-color: #4d5b9e;
    cursor: pointer;
    width: 120px;
    height: 35px;
  }

  .display-result {
    display: flex;
    align-items: center;
    justify-content: space-around;

    p {
      font-family: 'Inter', sans-serif;
      color: #293264;
      font-weight: 600;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  padding: 10px 0;
  border-bottom: 1px solid #dbdef0;
  flex-direction: column;
  /* height: 100%; */
  .question {
    margin: 0 0 12px 0;
    font-family: 'Karla', sans-serif;
    font-size: 16px;
    color: #293264;
    font-weight: bold;
    line-height: 19px;
  }
`;
