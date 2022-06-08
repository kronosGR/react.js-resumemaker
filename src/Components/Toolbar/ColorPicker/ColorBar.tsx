import React, { Dispatch, useRef } from 'react';
import styled from 'styled-components';
import usePaint from './usePaint';
import SVGhandle from '../../../Svg/SVGhandle';
import config from '../../../Constants/config';

const { squareSize, barSize, delay } = config;
interface ItemProps {
  left: number;
  animate: any;
}

interface Props {
  hueX: number;
  offsetLeft: number;
  animate?: any;
  setHueX: (value: number) => void;
  setHue: (value: number) => void;
}

export const Canvas = styled.canvas.attrs((p) => ({
  width: squareSize,
  height: barSize,
}))``;

export const ColorBoxWrapper = styled.div`
  position: relative;
  width: ${squareSize + 'px'};
  height: ${barSize + 'px'};
  cursor: ew-resize;
`;

const HandleWrapper = styled.div.attrs<ItemProps>((adProps) => ({
  style: {
    left: adProps.left + 'px',
    transition: adProps.animate ? 'left .25s ease-out' : '0s',
  },
}))<ItemProps>`
  position: absolute;
  top: 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: ${barSize}px;
  height: ${barSize}px;
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
      <HandleWrapper left={hueX} animate={animate}>
        <SVGhandle />
      </HandleWrapper>
      <Canvas ref={canvas} />
    </ColorBoxWrapper>
  );
}
