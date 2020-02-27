import React from 'react';

export default function Bugs() {

  return (
    <>
      <div className="bugs">
        <div className="bugsbar">
          <p>What do you need help with?</p>
        </div>
        <div className='bugChart'>
          <div className='bugrow1 bugrow'>
            <p>Ants</p>
            <p>Spiders</p>
            <p>Wasps</p>
          </div>
          <div className='bugrow2 bugrow'>
            <p>Rodents</p>
            <p>Mosquitos</p>
            <p>Fleas</p>
          </div>
          <div className='bugrow3 bugrow'>
            <p>Box Elder Bugs</p>
            <p>Roaches</p>
            <p>Ear Wigs</p>
          </div>
        </div>
      </div>
    </>
  );
}
