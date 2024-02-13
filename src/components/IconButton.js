import React from 'react';


const buttonContainerStyles = {
  width: '44px',
  height: '44px',
  position: 'relative',
  cursor: 'pointer', 
};


const buttonStyles = {
  width: '38px',
  height: '38px',
  left: '3px',
  top: '3px',
  position: 'absolute',
  display: 'flex',
  justifyContent: 'center', 
  alignItems: 'center', 
};


const IconButton = ({ Icon }) => {
  return (
    <div style={buttonContainerStyles}>
      <div style={buttonStyles}>
        <Icon />
      </div>
    </div>
  );
};

export default IconButton;
