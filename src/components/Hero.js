import React from 'react';
import NavBar from '../../src/components/NavBar';

export default function Hero() {

  return (
    <>
      <div className="hero">
        <NavBar/>
        <div className="heroTextContainer">
          <div className="box1">
            <div className="heroText">
              <h4>LIVE IN COMFORT</h4>
              <a href="tel:3853140144"><h2>CALL NOW AND SAVE $100</h2></a>
              <h4 className="location">1ST YEAR OF SERVICE NORTHERN SLC AREA</h4>
            </div>
          </div>
          <div className="box2">
          </div>
          <div className="box3">
          </div>
        </div>
      </div>
    </>
  );
}