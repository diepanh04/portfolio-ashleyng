import React from 'react';
import { Box } from '@mui/material';

const Circle = ({ size, color, top, left }) => {
  const circleStyle = {
    width: size,
    height: size,
    borderRadius: '50%',
    backgroundColor: color,
    position: 'absolute',
    top: top,
    left: left,
    zIndex: 0,
  };

  return <Box sx={circleStyle} />;
};

export default Circle;
