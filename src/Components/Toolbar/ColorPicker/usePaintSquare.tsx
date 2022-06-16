import React, { useEffect } from 'react';
import config from '../../../Constants/config';

const { squareSize } = config;

export default function usePaintSquare(
  canvas: React.MutableRefObject<HTMLCanvasElement>,
  hue: number
) {
  useEffect(() => {
    const context: CanvasRenderingContext2D = canvas.current.getContext(
      '2d'
    ) as CanvasRenderingContext2D;
    if (context !== undefined) {
      context.fillStyle = `hsl(${hue}, 100%, 50%)`;
      context.fillRect(0, 0, squareSize, squareSize);

      const gradientW = context.createLinearGradient(0, 0, squareSize, 0);
      gradientW.addColorStop(0, 'rgba(255,255,255,1');
      gradientW.addColorStop(1, 'rgba(255,255,255,0');
      context.fillStyle = gradientW;
      context.fillRect(0, 0, squareSize, squareSize);

      const gradientB = context.createLinearGradient(0, 0, 0, squareSize);
      gradientB.addColorStop(0, 'rgba(0,0,0,0)');
      gradientB.addColorStop(1, 'rgba(0,0,0,1)');
      context.fillStyle = gradientB;
      context.fillRect(0, 0, squareSize, squareSize);
    }
  }, [canvas, hue]);
}
