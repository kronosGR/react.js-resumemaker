import React from 'react';
import ColorPicker from '../Components/Toolbar/ColorPicker/ColorPicker';
import Toolbar from '../Components/Toolbar/Toolbar';

import classes from './Maker.module.css';

function Maker() {
  return (
    <div>
      <Toolbar />
      <ColorPicker top={200} left={100} />
    </div>
  );
}

export default Maker;
