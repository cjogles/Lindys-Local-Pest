import React from 'react';
import Button from '@material-ui/core/Button';

const Buttons = () => {

  const divStyle = {
    display: 'flex',
    justifyContent: 'space-evenly',
    marginBottom: '3rem',
  };

  const buttStyle = {
    marginRight: '.5rem',
    marginLeft: '.5rem',
  };
  return (
    <>
      <div style={divStyle}>
        <Button style={buttStyle} variant="contained" color="primary" href="https://sourcerer.io/cjogles" target="_blank">
          View Github Stats
        </Button>
        <Button style={buttStyle} variant="contained" color="primary" href="#firstProject">
          View Projects
        </Button>
        <Button style={buttStyle} variant="contained" color="primary" href="/Jackson_Ogles_Resume.pdf" target="_blank">
          View Resume
        </Button>
      </div>
    </>
  )
}

export default Buttons;