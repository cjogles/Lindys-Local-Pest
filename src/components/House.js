import React from "react";

export default function House() {
  return (
    <>
      <div className="house">
        <div className="treatbar">
          <p>Lindy's Treatment Program</p>
        </div>

        <div className="treatmentBar">

          <div class="treatmentBarCols">
            <div class="images">
              <img src="/images/icon1.png" alt="step one icon" />
            </div>
            <div class="text">
              <p className="treatnow">TBD via marcus</p>
            </div>
          </div>

          <div class="treatmentBarCols">
            <div class="images">
              <img src="/images/icon2.png" alt="step two icon" />
            </div>
            <div class="text">
              <p className="treatnow">TBD via marcus</p>
            </div>
          </div>

          <div class="treatmentBarCols">
            <div class="images">
              <img src="/images/icon3.png" alt="step three icon" />
            </div>
            <div class="text">
              <p className="treatnow">TBD via marcus</p>
            </div>
          </div>
        </div>
        <h3>Re-services are completely free. Guaranteed.</h3>
      </div>
    </>
  );
}
