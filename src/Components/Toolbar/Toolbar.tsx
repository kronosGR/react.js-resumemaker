import React from 'react';
import Color from './Color';
import Font from './Font';
import FontSize from './FontSize';
import Sections from './Sections';

import styled from 'styled-components';

const ToolbarWrapper = styled.div`
  width: 80%;
  display: flex;
  gap: 1rem;
  margin: 0 auto;
  border: 1px solid black;
  justify-content: center;
  padding: 2rem;
`;

function Toolbar() {
  return (
    <ToolbarWrapper>
      <Sections />
      <Color />
      <Font />
      <FontSize />
    </ToolbarWrapper>
  );
}

export default Toolbar;
