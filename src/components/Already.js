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
            <p>Thank you for choosing Lindy's Local Pest Control Company!</p>
          </div>
          <div className="aboutChart">
            <div className="chartContainer">
              <h2>Remember to check your E-Mail</h2>
              <h3>Lindy's Local Pest will send you all the information you need via email.</h3>
              <p id="already">
                Recieve invoices, next payment due dates, as well as when to expect a technician next 
                from our E-Mail service. Just look out for Lindy's Local Pest Control E-Mails. 
              </p>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    </>
  );
}
