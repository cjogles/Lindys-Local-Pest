import React from 'react';
import '../src/css/index.css';

import Hero from '../src/components/Hero.js';
import Bugs from '../src/components/Bugs.js';

function App() {
  return (
    <>
      <div className="app">
        <Hero/>
        <Bugs/>
      </div>
    </>
  );
}

export default App;
