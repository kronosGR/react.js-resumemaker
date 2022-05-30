import React from 'react';
import Color from './Color';
import Font from './Font';
import FontSize from './FontSize';
import Sections from './Sections';

import classes from './Toolbar.module.css';
function Toolbar() {
  return (
    <div className={classes.container}>
      <Sections />
      <Color />
      <Font />
      <FontSize />
    </div>
  );
}

export default Toolbar;
