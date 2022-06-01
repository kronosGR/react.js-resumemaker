import React, { useRef } from 'react';
import styled from 'styled-components';

export const ColorBoxWrapper = styled.div`
  width: 200px;
  height: 200px;
  cursor: crosshair;
  border: 1px solid black;
`;

function ColorBox() {
  const canvas = useRef(null);

  return (
    <ColorBoxWrapper>
      <canvas ref={canvas} />
    </ColorBoxWrapper>
  );
}

export default ColorBox;
