import {WebGL} from '@/Component';
import {WindowSizes} from '@/Hook';
import React from 'react';
import Grove from './Grove';

const Background = () => {
  const {
    sizes: {height, width}
  } = WindowSizes();
  
  return (
    <WebGL
      height={height}
      width={width}
    >
      <Grove />
    </WebGL>
  );
};

export default Background;
