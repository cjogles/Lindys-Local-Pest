import React from 'react';
import { Route } from 'react-router-dom';
import Nav1 from './Nav1';
import Nav2 from './Nav2';
import MainContent from './MainContent';
import Bugs from './Bugs';
import House from './House';
import Footer from './Footer';
import Location from './Location';
import BugsPage from './BugsPage';
import ContactPage from './ContactPage';
import AboutPage from './AboutPage';
import '../css/index.css';

function App() {
  return (
    <>
      <div className="app">
          <Route path='/' exact>
            <Nav1/>
            <Nav2/>
            <MainContent/>
            <Bugs/>
            <House/>
            <Footer/>
          </Route>
          <Route path='/location' exact>
            <Location/>
          </Route>
          <Route path='/bugs' exact>
            <BugsPage/>
          </Route>
          <Route path='/contact' exact>
            <ContactPage/>
          </Route>
          <Route path='/about' exact>
            <AboutPage/>
          </Route>
      </div>
    </>
  );
}

export default App;
