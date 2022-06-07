import React, { Dispatch, useRef } from 'react';
import styled from 'styled-components';
import usePaint from './usePaint';
import SVGhandle from '../../../Svg/SVGhandle';

interface ItemProps {
  left: string;
}

interface Props {
  hueX: number;
  offsetLeft: number;
  animate?: any;
  setHueX: (value: number) => void;
  setHue: (value: number) => void;
}

export const ColorBoxWrapper = styled.div`
  width: 200px;
  height: 200px;
  cursor: crosshair;
  border: 1px solid black;
`;

const HandleWrapper = styled.div.attrs<ItemProps>((adProps) => ({
  style: {
    left: adProps.left + 'px',
  },
}))<ItemProps>`
  position: absolute;
  top: 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 200px;
  height: 30px;
  pointer-events: none;
  svg {
    width: 100%;
    height: 100%;
  }
`;

export default function ColorBar({ hueX, offsetLeft, animate, setHueX, setHue }: Props) {
  const canvas = useRef() as React.MutableRefObject<HTMLCanvasElement>;

  usePaint(canvas);

  return (
    <ColorBoxWrapper>
      <canvas ref={canvas} />
      <HandleWrapper left='10'>
        <SVGhandle />
      </HandleWrapper>
    </ColorBoxWrapper>
  );
}
