import React, { Dispatch, useEffect, useRef } from 'react';
import styled from 'styled-components';
import usePaint from './usePaint';
import SVGhandle from '../../../Svg/SVGhandle';
import config from '../../../Constants/config';
import { throttle } from 'lodash';

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
  const bar = useRef() as React.MutableRefObject<HTMLDivElement>;

  usePaint(canvas);

  useEffect(() => {
    const computePosition = (e) => {
      return Math.max(
        barSize / -2,
        Math.min(
          e.clientX,
          offsetLeft + squareSize / 2 - barSize / 2,
          squareSize - barSize / 2
        )
      );
    };

    const computeHue = (x) => {
      return Math.round((x + barSize / 2) * (360 / squareSize));
    };

    const onMouseMove = throttle((e) => {
      const x = computePosition(e);
      const hue = computeHue(x);

      setHue(hue);
      setHueX(x);
    }, delay);

    const onMouseUp = (e) => {
      const x = computePosition(e);
      const hue = computeHue(x);
      setHueX(x);
      setHue(hue);
      document.body.removeEventListener('mousemove', onMouseMove);
      document.body.removeEventListener('mouseup', onMouseUp);
    };

    const onMouseDown = (e) => {
      document.body.removeEventListener('mousemove', onMouseMove);
      document.body.removeEventListener('mouseup', onMouseUp);
    };

    const barRef = bar.current;
    barRef.addEventListener('mousedown', onMouseDown);

    return () => {
      barRef.removeEventListener('mousedown', onMouseDown);
      document.body.removeEventListener('mousemove', onMouseMove);
      document.body.removeEventListener('mouseup', onMouseUp);
    };
  }, [offsetLeft, setHue, setHueX]);

  return (
    <ColorBoxWrapper ref={bar}>
      <HandleWrapper left={hueX} animate={animate}>
        <SVGhandle />
      </HandleWrapper>
      <Canvas ref={canvas} />
    </ColorBoxWrapper>
  );
}
