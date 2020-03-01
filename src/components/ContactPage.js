import React from 'react';
import Nav1 from '../components/Nav1';
import Nav2 from '../components/Nav2';
import Footer from '../components/Footer';

export default function ContactPage() {

  return (
    <>
      <div>
        <Nav1/>
        <Nav2/>
        <div className="contact">
          <div className="contactSection1">
            <a href="tel:1-562-867-5309"><p className='tele'>Click to Call Us</p></a>
            <a href='mailto:someone@example.com?Subject=Hello%20LindyLocal'><p className>Click to Email Us</p></a>
          </div>
        </div>
        <Footer/>
      </div>
    </>
  );
}