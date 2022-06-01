import React from 'react';
import ColorPicker from '../Components/Toolbar/ColorPicker/ColorPicker';
import Toolbar from '../Components/Toolbar/Toolbar';

import classes from './Maker.module.css';

function Maker() {
  return (
    <div>
      <Toolbar />
      <ColorPicker />
    </div>
  );
}

export default Maker;
