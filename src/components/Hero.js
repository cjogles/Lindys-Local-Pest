import React from 'react';
import NavBar from '../../src/components/NavBar';

export default function Hero() {

  return (
    <>
      <div className="hero">
        <NavBar/>
        <div className="heroTextContainer">
          <div className="heroText">
            <h4>LIVE IN COMFORT</h4><br/>
            <h2>CALL NOW AND SAVE $100</h2><br/>
            <h4>1ST YEAR OF SERVICE NORTHERN SLC AREA</h4>
          </div>
        </div>
      </div>
    </>
  );
}