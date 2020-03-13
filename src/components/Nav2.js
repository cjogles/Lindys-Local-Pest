import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav2() {

  return (
    <>
      <nav className="nav2 nav2sticky">
        <div className="logo">
          <Link to='/'><img src="/images/logo.jpg"/></Link>
        </div>
        <div className="nav2rightside">
        <div className="pestDropDown">
            <Link to='/about'><p className="navLinks">ABOUT US</p></Link>
          </div>
          <div className="pestDropDown">
            <Link to='/bugs'><p className="navLinks">PEST CONTROL</p></Link>
          </div>
          <div className="FreeQuote">
            <Link to='/contact'><p className="navLinks">GET FREE QUOTE</p></Link>
          </div>
        </div>
      </nav>
    </>
  );
}