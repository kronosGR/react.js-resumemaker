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

interface ItemProps {
  top: number;
  left: number;
}

const ColorPickerWrapper = styled.div.attrs<ItemProps>((itemProps) => ({
  style: {
    top: itemProps.top + 'px',
    left: itemProps.left + 'px',
  },
}))<ItemProps>`
  position: absolute;
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
  const [color, setColor] = useState('#000000');
  const [show, setShow] = useState(false);

  const modal = useRef() as React.MutableRefObject<HTMLDivElement>;

  return (
    <ColorPickerWrapper top={top} left={left}>
      <Button onClick={() => setShow(true)}>Show</Button>
      <Modal modal={modal} show={show} onClose={() => setShow(false)}>
        <PickerOuter>
          <PickerInner></PickerInner>
          <ColorBar top={200} left={100} />
        </PickerOuter>
      </Modal>
    </ColorPickerWrapper>
  );
}
