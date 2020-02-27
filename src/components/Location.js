import React from 'react';
import Nav1 from '../components/Nav1';
import Nav2 from '../components/Nav2';

export default function Location() {

  return (
    <>
      <div>
        <Nav1/>
        <Nav2/>
        <div className="location">
          <div className="where">
            <p>Ogden</p>
            <p>Salt Lake City</p>
            <p>Layton</p>
          </div>
        </div>
      </div>
    </>
  );
}