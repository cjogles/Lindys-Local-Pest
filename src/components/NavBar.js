import React from 'react';
import NavBar2 from '../components/NavBar2.js';

export default function NavBar() {

  return (
    <>
      <div className="navBar1">
        <a href="https://lindyslocalpest.now.sh" className='navAnch1'><h1>Lindys Local Pest</h1></a>
        <a href="https://www.salesrabbit.com/" className='navAnch2'>Already a customer? Go to Lindys Local Pest Portal</a>
      </div>
      <NavBar2/>
    </>
  );
}