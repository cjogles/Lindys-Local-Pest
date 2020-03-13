import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav1() {

  return (
    <>
      <nav className="nav1">
        <div>
          <Link to='/location'><p className="navLinks">LOCATIONS</p></Link>
        </div>
        <div>
        <Link to="/already">
          <p className="navLinks">ALREADY A CUSTOMER?</p>
        </Link>
        </div>
        
        <div>
          <Link to='/contact'><p className="navLinks">CONTACT US</p></Link>
        </div>
      </nav>
    </>
  );
}