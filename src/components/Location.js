import React from "react";
import Nav1 from "../components/Nav1";
import Nav2 from "../components/Nav2";
import Footer from "../components/Footer";
import { Link } from 'react-router-dom';

export default function Location() {
  return (
    <>
      <div>
        <Nav1 />
        <Nav2 />
        <div className="location">
          <div className="where1">
            <p>
              We are a small-locally owned company where our customers are
              top priority. Because of this we only go as far as these locations. 
              If your family is in this area, please contact us for a free quote! 

            </p>
            <div className="bugQuote">
              <Link to='/contact'><p>Get a Free Quote</p></Link>
            </div>
          </div>
          <div className="where">
            <p>Ogden</p>
            <p>Layton</p>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
