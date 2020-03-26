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
              <p className="treatnow">We start with our initial service, where we treat inside and all areas outside the home while targeting any pest your currenlty have. By applying these powerful barriers you may notice a slight increase of pest activity due to our flushing treatments. Not to worry that's exactly what we want to see.</p>
            </div>
          </div>

          <div class="treatmentBarCols">
            <div class="images">
              <img src="/images/icon2.png" alt="step two icon" />
            </div>
            <div class="text">
              <p className="treatnow">We come out 30-45 days after the intitial service to break down and treat the egg cycle from the pests on our initial service. This service will treat the second generation pests before they can lay eggs of their own. </p>
            </div>
          </div>

          <div class="treatmentBarCols">
            <div class="images">
              <img src="/images/icon3.png" alt="step three icon" />
            </div>
            <div class="text">
              <p className="treatnow">Lastly, we come every quarter, and treat all areas to renew the 90 day residual protective barriers and to continually consult you on protecting your home. </p>
            </div>
          </div>
        </div>
        <h3>Re-services are completely free. Guaranteed.</h3>
      </div>
    </>
  );
}
