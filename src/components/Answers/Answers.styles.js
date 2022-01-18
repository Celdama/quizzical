import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  /* padding: 8px 0; */

  .green {
    color: green;
  }
`;

export const AnswerContainer = styled.span`
  border: 0.79px solid #4d5b9e;
  font-size: 10px;
  border-radius: 8px;
  padding: 6px 4px;
  margin: 4px 6px;
  font-family: 'Inter', sans-serif;
  color: #293264;

  background-color: ${({ isHeld }) => (isHeld ? 'red' : '')};
`;
