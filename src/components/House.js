import React from 'react';

export default function House() {

  return (
    <>
      <div className="house">
        <div className="treatbar">
          <p>Our Treatment Plan</p>
        </div>
        <div className='treatmentBar'>
          <div className='treatrow1 treatrow'>
            <img src="/images/icon1.png" alt="step one icon"/>
            <p>Sweep and Clean the Eaves</p>
            <p>Deweb and Clean the Windows</p>
          </div>
          <div className='treatrow2 treatrow'>
          <img src="/images/icon2.png" alt="step two icon"/>
            <p>Spot Treat the Yard</p>
            <p>Create 3-8 Foot Barrier Around Home</p>
          </div>
          <div className='treatrow3 treatrow'>
          <img src="/images/icon3.png" alt="step three icon"/>
            <p>Treat Garage</p>
            <p>Treat Inside of Home</p>
          </div>
        </div>
      </div>
    </>
  );
}