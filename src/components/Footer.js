import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <section className="sectionfooter">
        <div className="footerSection1">
          <div className="col1">
            <Link to="/">
              <h2>Lindys Local</h2>
            </Link>
            <Link to="/locations">
              <p>Locations</p>
            </Link>
            <a
              href="https://salesrabbit.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              <p className="navLinks">Customer Portal</p>
            </a>
            <Link to="/privacy">
              <p>Privacy Policy</p>
            </Link>
          </div>
          <div className="col2">
            <h2>Mission Statement</h2>
            <p>
              We provide a local touch to pest control service by taking care of
              pests so you don't have to.
            </p>
          </div>
          <div className="col3">
            <h2>Hours</h2>
            <p className='bold'>Monday - Friday</p>
            <p>7am - 7pm MST</p>
            <p className='bold'>Saturday</p>
            <p>7am - 4pm MST</p>
            <p className='bold'>Sunday</p>
            <p>Closed</p>
          </div>
        </div>
        <div className="footerSection2">
          <p>© Copyright 2020 Lindy's Local. ALL RIGHTS RESERVED.</p>
          <a target="_blank" href="https://icons8.com">
            Icons from Icons8
          </a>
        </div>
      </section>
    </>
  );
}
