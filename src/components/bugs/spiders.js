import React from "react";
import Nav1 from "../Nav1";
import Nav2 from "../Nav2";
import {Link} from 'react-router-dom';
import Bugs from '../Bugs';

export default function Spiders() {
  return (
    <>
      <div className="bugpage">
        <Nav1 />
        <Nav2 />

        <section>
          <div className="imgContainer"><img src="/images/spider.jpg" alt="ant eating scraps picture"/></div>
          <div className="section">
            <div className ="bugDescription">
              <h2>Spiders</h2>
              <p>
                At Lindy's Local, our top priority is to keep your unwanted pests
                under control. When you need to get rid of spiders, our highly trained
                and professional specialists will take care of you. Our product is
                completely safe for children and pets. Our treatment leaves no
                lingering odor or any visible residue on your walls, floors or
                baseboards. When our experts start spraying there is no need to vacate
                your home, and you can bet that with our treatment plans in place that
                your spider controls needs will be met and your pests will remain under
                control.
              </p>
            </div>
          <div className="bugQuote">
            <Link to='/contact'><p>Get a Free Quote</p></Link>
          </div>
          </div>
        </section>
        <Bugs/>
      </div>
    </>
  );
}