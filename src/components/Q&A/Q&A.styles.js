import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 80%;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Content = styled.div`
  .question {
    margin: 0 0 12px 0;
    font-family: 'Karla', sans-serif;
    font-size: 16px;
    color: #293264;
    font-weight: bold;
    line-height: 19px;
  }

  hr {
    height: 0;
    margin: 10px 0;
    width: 100%;
    border: 0.79px solid #dbeef0;
  }
`;
