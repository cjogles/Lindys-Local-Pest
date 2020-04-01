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

      <div className="maincontent2">
        <div className="maincontentFiller2">
        <div className="contactSection2">
            <a href="tel:385-306-0362"><p>Click to Call Us</p></a>
            <a href='mailto:lindyslocalpest@gmail.com?Subject=Hello%20LindyLocal'><p>Click to Email Us</p></a>
          </div>
        </div>
        <div className="why2">
          <p>
            At Lindy's Local Your Family Matters. We Believe In Making A
            Difference By Protecting Your Loved Ones.
          </p>
        </div>
      </div>
        <Footer/>
      </div>
    </>
  );
}