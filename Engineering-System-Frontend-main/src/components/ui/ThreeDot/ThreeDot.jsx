import React from 'react';

const ThreeDot = ({ variant, color, size, text, textColor }) => {
  // A simple placeholder for a loading spinner
  const style = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: size === 'small' ? '20px' : '40px',
    color: color || 'black',
    fontWeight: 'bold',
  };

  return (
    <div style={style}>
      {text || 'Loading...'}
    </div>
  );
};

export default ThreeDot;