import React, { Ref, useEffect } from 'react';
import config from '../../../Constants/config';

const { squareSize, barSize } = config;

const usePaint = (canvas: React.MutableRefObject<HTMLCanvasElement>) => {
  useEffect(() => {
    const context: CanvasRenderingContext2D = canvas.current.getContext(
      '2d'
    ) as CanvasRenderingContext2D;
    if (context !== undefined) {
      context.rect(0, 0, squareSize, barSize);

      const gradient = context?.createLinearGradient(0, 0, squareSize, 0);
      for (let i = 0; i <= 360; i += 12) {
        gradient?.addColorStop(i / 360, `hsl(${i}, 100%, 50%)`);
      }

      context.fillStyle = gradient;
      context?.fill();
    }
  }, [canvas]);
};

export default usePaint;
