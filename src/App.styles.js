import styled from 'styled-components';

export const Wrapper = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--white);
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  height: 860px;

  p {
    font-family: 'Inter', sans-serif;
    color: var(--darkBlue);
    font-weight: 300;
  }
`;

export const TitleApp = styled.h1`
  font-family: 'Karla', sans-serif;
  font-size: 32px;
  line-height: 36px;
  margin-bottom: 0;
  color: var(--darkBlue);
  height: 41px;
  font-weight: bold;
`;

export const StartBtn = styled.button`
  font-family: 'Inter', sans-serif;
  width: 193px;
  height: 52px;
  background-color: var(--medBlue);
  border-radius: 15px;
  border: none;
  cursor: pointer;
  color: var(--medWhite);
  font-size: 16px;
  margin-top: 10px;
`;
