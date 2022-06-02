import React from 'react';

export default function SVGhandle({ ...rest }) {
  return (
    <svg viewBox='0 0 50 50' xmlns='http://www.w3.org/2000/svg' {...rest}>
      <path
        d='M34.736998 0v49.921h-5.578V0zm-16.737 49.921V0h5.578v49.921z'
        fill='#dfdfdf'
      />
      <path
        fill='#363636'
        d='M31.371873.078V50h-2.316V.078zM23.470873 0v49.922h-2.316V0z'
      />{' '}
    </svg>
  );
}
