import React from 'react';

export default function Nav2() {

  return (
    <>
      <nav className="nav2">
        <div className="logo">
          <a><h1>LINDYS LOCAL</h1></a>
        </div>
        <div className="nav2filler"/>
        <div className="nav2rightside">
          <div className="pestDropDown">
            <a><p>PEST CONTROL</p></a>
          </div>
          <div className="FreeQuote">
            <a><p>GET FREE QUOTE</p></a>
          </div>
        </div>
      </nav>
    </>
  );
}