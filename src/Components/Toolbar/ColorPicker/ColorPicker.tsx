import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import config from '../../../Constants/config';
import ColorBar from './ColorBar';
import Modal from './Modal';

const { squareSize, barSize } = config;
interface Props {
  top: number;
  left: number;
}

export const ColorPickerWrapper = styled.div`
  user-select: none;
  .swatch {
    width: 100px;
    height: 50px;
    background: ${(p) => p.color};
  }
`;

export const PickerOuter = styled.div`
  width: ${squareSize + 20}px;
  display: grid;
  border-radius: 2px;
  background: white;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.3);
`;

export const PickerInner = styled.div`
  display: grid;
  grid-template-rows: ${squareSize + 20}px 20px 1fr;
  align-items: center;
  justify-items: center;
`;

const Button = styled.div`
  padding: 1rem;
  border: 1px solid black;
`;

export default function ColorPicker({ top, left }: Props) {
  const [color, setColor] = useState(`hsla(180, 100%, 50%, 1)`);
  const [show, setShow] = useState(false);
  const [offsetTop, setOffsetTop] = useState(0);
  const [offsetLeft, setOffsetLeft] = useState(0);
  const [hue, setHue] = useState(180);
  const [hueX, setHueX] = useState(() => squareSize / 2 - barSize / 2);

  const modal = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    function setOffsets() {
      setOffsetTop(modal.current.offsetTop);
      setOffsetLeft(modal.current.offsetLeft);
    }

    if (show) {
      setOffsets();
      window.addEventListener('resize', setOffsets);
    } else {
      window.removeEventListener('resize', setOffsets);
    }

    // cleanup
    return () => {
      window.removeEventListener('resize', setOffsets);
    };
  }, [show]);

  useEffect(() => {
    setColor(`hsla(${hue}, 100%, 50%. 1)`);
  });

  return (
    <ColorPickerWrapper color={color}>
      <Button onClick={() => setShow(true)}>Show</Button>
      <Modal modal={modal} show={show} onClose={() => setShow(false)}>
        <PickerOuter>
          <PickerInner></PickerInner>
          <ColorBar
            hueX={hueX}
            offsetLeft={offsetLeft}
            setHueX={setHueX}
            setHue={setHue}
          />
        </PickerOuter>
      </Modal>
    </ColorPickerWrapper>
  );
}
