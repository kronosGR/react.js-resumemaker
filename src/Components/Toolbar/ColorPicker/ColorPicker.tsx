import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ColorBar from './ColorBar';

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
  const [topC, setTopC] = useState(top);
  const [leftC, setLeftC] = useState(left);

  return (
    <ColorPickerWrapper top={top} left={left}>
      <ColorBar top={200} left={100} />
    </ColorPickerWrapper>
  );
}
