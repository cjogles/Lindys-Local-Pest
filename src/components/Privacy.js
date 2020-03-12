import React from "react";
import Nav1 from "../components/Nav1";
import Nav2 from "../components/Nav2";
import Footer from '../components/Footer';

export default function AboutPage() {
  return (
    <>
      <div className="bugpage">
        <Nav1 />
        <Nav2 />
        <div className="about">
          <div className="aboutbar">
            <p>Your Privacy Matters</p>
          </div>
          <div className="aboutChart">
            <div className="chartContainer">
              <h2>Here are a few things to keep in mind.</h2>
              <h3>We don't sell customer information.</h3>
              <p>
                We treat our customers like family. Your information is confidential and will not be 
                sold to third parties for any reason.
              </p>
              <h3>Your information is safe.</h3>
              <p>
                We use a third party for all payment information. And we pay good money 
                to make sure your information is kept secret and safe. We make sure all
                payments are sent of secure https protocol and ssh. 
              </p>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    </>
  );
}
