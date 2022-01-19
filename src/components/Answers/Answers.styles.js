import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

export const AnswerContainer = styled.span`
  outline: 0.79px solid var(--medBlue);
  font-size: 10px;
  border-radius: 8px;
  padding: 6px 4px;
  margin: 4px 6px;
  font-family: 'Inter', sans-serif;
  color: var(--darkBlue);
  cursor: pointer;
  background-color: ${({ isHeld }) => (isHeld ? 'var(--grayBlue)' : '')};
`;
