import styled from 'styled-components';

export const Wrapper = styled.div`
  overflow: hidden;
  position: relative;
  width: 560px;
  height: 860px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const YellowBlob = styled.div`
  position: absolute;
  height: 235px;
  width: 297px;
  background-color: red;
  right: ${({ yellowRight }) => `${yellowRight}%`};
  top: ${({ yellowTop }) => `${yellowTop}%`};
  border-radius: 40px 35px 34px 56px;
  background-color: #fffad1;
  transform: rotate(-128deg);
`;

export const BlueBlob = styled.div`
  position: absolute;
  height: 235px;
  width: 297px;
  background-color: red;
  right: ${({ blueRight }) => `${blueRight}%`};
  top: ${({ blueTop }) => `${blueTop}%`};
  border-radius: 96px;
  background-color: #deebf8;
`;
