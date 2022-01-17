import React from 'react';
import { Wrapper, YellowBlob, BlueBlob } from './Blob.styles';

const Blob = ({ children, blueRight, blueTop, yellowRight, yellowTop }) => {
  return (
    <Wrapper>
      <YellowBlob yellowTop={yellowTop} yellowRight={yellowRight} />
      <BlueBlob blueTop={blueTop} blueRight={blueRight} />
      {children}
    </Wrapper>
  );
};

export default Blob;
