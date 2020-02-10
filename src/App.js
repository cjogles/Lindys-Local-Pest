import React from 'react';
import '../src/css/index.css';

import Hero from '../src/components/Hero.js';
import Bugs from '../src/components/Bugs.js';
import Footer from '../src/components/Footer.js';

function App() {
  return (
    <>
      <div className="app">
        <Hero/>
        <Bugs/>
        <Footer/>
      </div>
    </>
  );
}

export default App;
