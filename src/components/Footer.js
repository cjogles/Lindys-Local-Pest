import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <section className="sectionfooter">
        <div className="footerSection1">
          <div className="col1">
            <Link to="/">
              <img src="/images/logo.jpg" />
            </Link>
            <Link to="/location">
              <p>Locations</p>
            </Link>
            <Link to="/already">
              <p className="navLinks">Already a Customer?</p>
            </Link>
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
            <p className="bold">Monday - Saturday</p>
            <p>9am - 9pm MST</p>
            <p className="bold">Sunday</p>
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
