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
            <p>Our Service Works</p>
          </div>
          <div className="aboutChart">
            <div className="chartContainer">
              <h2>Here are a few things to keep in mind.</h2>
              <h3>Re-services are completely free. Guaranteed.</h3>
              <p>
                We rely on you to tell us about unwanted pest activity. If you
                think you need a re-service, please give us a call so we can take
                care of you.
              </p>
              <h3>Upkeep to Pest Barrier is important.</h3>
              <p>
                After applying powerful barrier around and inside your home, you
                may notice an increase in pest activity as pests try to come out
                of hiding. Don't worry, this is exactly what we want to see.
              </p>
              <h3>Some products don't exterminate pests immediately.</h3>
              <p>
                We come back 30-45 days after the initial service to break down
                the egg cycle. This treatment will stop the next generation of
                pests from contining.
              </p>
              <h3>We service every season.</h3>
              <p>
                We will come and service your home every quarter to guarantee
                renewed residual barrier upkeep around your home and provide
                continual consultation of pest control.
              </p>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    </>
  );
}
