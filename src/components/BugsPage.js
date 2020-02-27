import React from 'react';
import Nav1 from './Nav1';
import Nav2 from './Nav2';
import Bugs from './Bugs';

export default function BugsPage() {

  return (
    <>
      <div className="bugpage">
        <Nav1/>
        <Nav2/>
        <Bugs/>
      </div>
    </>
  );
}