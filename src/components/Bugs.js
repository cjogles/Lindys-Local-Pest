import React from 'react';
import {Link} from 'react-router-dom';

export default function Bugs() {

  return (
    <>
      <div className="bugs">
        <div className="bugsbar">
          <p>What do you need help with?</p>
        </div>
        <div className='bugChart'>
          <div className='explainbugs'>
            <p>Click on a Bug's Name to Learn More About Each Pest</p>
            <img className='arrow' src='/images/arrow.png' alt='arrow'/>
            <img className='downarrow' src='/images/downarrow.png' alt='down arrow'/>
          </div>
          <div className='bugrow1 bugrow'>
            <Link to="/ants" ><p>Ants</p></Link>
            <Link to="/spiders" ><p>Spiders</p></Link>
            <Link to="/wasps" ><p>Wasps</p></Link>
          </div>
          <div className='bugrow2 bugrow'>
            <Link to="/rodents" ><p>Rodents</p></Link>
            <Link to="/mosquitos" ><p>Mosquitos</p></Link>
            <Link to="/fleas" ><p>Fleas</p></Link>
          </div>
          <div className='bugrow3 bugrow'>
            <Link to="/boxelders" ><p>Box Elder Bugs</p></Link>
            <Link to="/roaches" ><p>Roaches</p></Link>
            <Link to="/earwigs" ><p>Ear Wigs</p></Link>
          </div>
        </div>

      </div>
    </>
  );
}
