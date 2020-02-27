import React from 'react';
import Nav1 from '../components/Nav1';
import Nav2 from '../components/Nav2';

export default function AboutPage() {

  return (
    <>
      <div>
        <Nav1/>
        <Nav2/>
        <div className="contact">
          <div className="contactSection1">
            <p>Call Us: 801-491-4213</p>
            <p>Email Us: llpc@gmail.com</p>
          </div>
        </div>
      </div>
    </>
  );
}