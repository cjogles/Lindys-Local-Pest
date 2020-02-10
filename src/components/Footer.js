import React from 'react';
import NavBar from '../../src/components/NavBar';

export default function Footer() {

  return (
    <>
        <div className="footerContainer">
          <div className="box1">
            <h2> Lindys Local Pest</h2>
            <p>©2020 Lindys Local Pest Control, LP. All rights reserved. “Lindy,” “Lindys Local Pest Control,” and the Lindys Local Pest logo are registered trademarks of Lindys Local Pest Control, LP.</p>
          </div>
          <div className="box2">
            <a href="#">Home</a>
            <a href="#">Services</a>
            <a href="#">Locations</a>
          </div>
          <div className="box3">
            <a href="#">About Us</a>
            <a href="mailto: marcuslindmeir718@gmail.com?subject=Interested in Lindys Local Pest Controlbody=Hello Lindys Local Pest Control!%0D%0A %0D%0A I am interested in learning more about your services. %0D%0A %0D%0A Sincerely, %0D%0A %0D%0A <your name and contact information here>">Get In Contact</a> 
            <button><a href="tel:3853140144">Call Now!</a></button>
          </div>
        </div>
        <div className="callNow">
          <button><a href="tel:3853140144">Call Now!</a></button>
        </div>
    </>
  );
}