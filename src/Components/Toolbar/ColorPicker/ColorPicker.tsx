import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import ColorBar from './ColorBar';
import Modal from './Modal';

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

export default function ColorPicker({ top, left }: Props) {
  const [color, setColor] = useState('#000000');
  const [show, setShow] = useState(false);

  const modal = useRef() as React.MutableRefObject<HTMLDivElement>;

  return (
    <ColorPickerWrapper top={top} left={left}>
      <div onClick={() => setShow(true)} />
      <Modal modal={modal} show={show} onClose={() => setShow(false)}>
        <ColorBar top={200} left={100} />
      </Modal>
    </ColorPickerWrapper>
  );
}
