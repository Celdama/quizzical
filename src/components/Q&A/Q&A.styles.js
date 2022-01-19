import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 90%;
  width: 80%;
`;

export const Content = styled.div`
  display: flex;
  padding: 12px 0;
  flex-direction: column;
  border-bottom: 1px solid #dbdef0;
  margin-bottom: 12px;

  .question {
    margin: 0 0 12px 0;
    font-family: 'Karla', sans-serif;
    font-size: 16px;
    color: #293264;
    font-weight: bold;
    line-height: 19px;
  }
`;

export const ContentResult = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  p {
    font-family: 'Inter', sans-serif;
    color: #293264;
    font-weight: 600;
  }
`;

export const Btn = styled.button`
  align-self: center;
  border: none;
  border-radius: 10px;
  color: #fff;
  padding: 8px;
  background-color: #4d5b9e;
  cursor: pointer;
  width: 120px;
  height: 35px;
`;
