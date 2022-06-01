import React, { Ref, useEffect } from 'react';

export interface ICanvas {
  canvas: Ref<HTMLCanvasElement>;
}

const usePaint = (canvas: ICanvas, size: number) => {
  useEffect(() => {
    const context = canvas.current.context('2d');
    context.rext(0, 0, size, size);

    const gradient = context.createLinearGradient(0, 0, size, 0);
    for (let i = 0; i <= 360; i += 12) {
      gradient.addColorStop(i / 360, `hsl(${i}, 100%, 50%)`);
    }

    context.fillStyle = gradient;
    context.fill();
  }, [canvas]);
};

export default usePaint;
