import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 80%;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Content = styled.div`
  display: flex;
  padding: 10px 0;
  border-bottom: 1px solid #dbdef0;
  flex-direction: column;
  height: 100%;
  .question {
    margin: 0 0 12px 0;
    font-family: 'Karla', sans-serif;
    font-size: 16px;
    color: #293264;
    font-weight: bold;
    line-height: 19px;
  }
`;
