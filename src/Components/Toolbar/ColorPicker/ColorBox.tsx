import React, { useRef } from 'react';
import styled from 'styled-components';
import usePaint from './usePaint';
import SVGhandle from '../../../Svg/SVGhandle';

export const ColorBoxWrapper = styled.div`
  width: 200px;
  height: 200px;
  cursor: crosshair;
  border: 1px solid black;
`;

function ColorBox() {
  const canvas = useRef() as React.MutableRefObject<HTMLCanvasElement>;

  usePaint(canvas, 200);

  return (
    <ColorBoxWrapper>
      <canvas ref={canvas} />
      <SVGhandle />
    </ColorBoxWrapper>
  );
}

export default ColorBox;
