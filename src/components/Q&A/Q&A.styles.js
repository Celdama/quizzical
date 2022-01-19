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
  border-bottom: 1px solid var(--lightGray);
  margin-bottom: 12px;

  .question {
    margin: 0 0 12px 0;
    font-family: 'Karla', sans-serif;
    font-size: 16px;
    color: var(--darkBlue);
    font-weight: bold;
  }
`;

export const ContentResult = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  p {
    font-family: 'Inter', sans-serif;
    color: var(--darkBlue);
    font-weight: 700;
  }
`;

export const Btn = styled.button`
  align-self: center;
  border: none;
  border-radius: 10px;
  color: var(--white);
  padding: 8px;
  background-color: var(--medBlue);
  cursor: pointer;
  width: 120px;
  height: 35px;
`;
