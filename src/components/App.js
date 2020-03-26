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
import Ants from './bugs/ants';
import BoxElders from './bugs/box-elders';
import Earwigs from './bugs/earwigs';
import Fleas from './bugs/fleas';
import Mosquitos from './bugs/mosquitos';
import Roaches from './bugs/roaches';
import Rodents from './bugs/rodents';
import Spiders from './bugs/spiders';
import Wasps from './bugs/wasps';
import Privacy from './Privacy';
import Already from './Already';
import How from './How';
import '../css/index.css';

function App() {
  return (
    <>
      <div className="app">
        
          <Route path='/' exact>
            <Nav1/>
            <Nav2/>
            <MainContent/>
            <How/>
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
          <Route path='/privacy' exact>
            <Privacy/>
          </Route>
          <Route path='/already' exact>
            <Already/>
          </Route>

          <Route path='/ants' exact>
            <Ants/>
          </Route>
          <Route path='/boxelders' exact>
            <BoxElders/>
          </Route>
          <Route path='/earwigs' exact>
            <Earwigs/>
          </Route>
          <Route path='/mosquitos' exact>
            <Mosquitos/>
          </Route>
          <Route path='/roaches' exact>
            <Roaches/>
          </Route>
          <Route path='/rodents' exact>
            <Rodents/>
          </Route>
          <Route path='/spiders' exact>
            <Spiders/>
          </Route>
          <Route path='/wasps' exact>
            <Wasps/>
          </Route>
          <Route path='/fleas' exact>
            <Fleas/>
          </Route>
      </div>
    </>
  );
}

export default App;
