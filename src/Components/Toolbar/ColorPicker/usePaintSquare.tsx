import React, { useEffect } from 'react';
import config from '../../../Constants/config';

const { squareSize } = config;

export default function usePaintSquare(
  canvas: React.MutableRefObject<HTMLCanvasElement>,
  hue: number
) {
  useEffect(() => {}, [canvas, hue]);
}
