import React from 'react';
import Nav1 from './Nav1';
import Nav2 from './Nav2';
import MainContent from './MainContent';
import Bugs from './Bugs';
import House from './House';
import Footer from './Footer';
import '../css/index.css';

function App() {
  return (
    <>
      <div className="app">
        <Nav1/>
        <Nav2/>
        <MainContent/>
        <Bugs/>
        <House/>
        <Footer/>
      </div>
    </>
  );
}

export default App;
