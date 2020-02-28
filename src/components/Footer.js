import React from "react";

export default function Footer() {
  return (
    <>
      <section className='sectionfooter'>
      <div className='footerSection1'>
          <div className='col1'>
            <h2>Lindys Local</h2>
            <p>Locations</p>
            <p>Customer Portal</p>
            <p>Privacy Policy</p>
          </div>
          <div className='col2'>
            <h2>Mission Statement</h2>
          </div>
          <div className='col3'>
            <h2>Hours</h2>
            <p>Monday - Friday</p>
            <p>7am - 7pm MST</p>
            <p>Saturday</p>
            <p>7am - 4pm MST</p>
            <p>Sunday</p>
            <p>Closed</p>
          </div>
        </div>
        <div className='footerSection2'>
          <p>© Copyright 2020 Lindy's Local. ALL RIGHTS RESERVED.</p>
          <a target="_blank" href="https://icons8.com">
            Icons from Icons8
          </a>
        </div>
      </section>
    </>
  );
}
