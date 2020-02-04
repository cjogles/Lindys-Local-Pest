import React from 'react';
import Button from '@material-ui/core/Button';

const Project1 = () => {

    return (
      <>
        <div id="firstProject" className="firstProject1">
          <a href="https://blockclubcalendar.now.sh" target="_blank">
            <img 
            src="images/block-club.jpg" 
            alt="screenshot of block-club calendar website home page" 
            />
          </a>
          <div className="proj1Text">
            <h2>Block Club Calendar</h2>
            <p>
              Worked for a Detroit, MI non-profit as a junior react dev to build
              a calendar event web platform. Assisted team in creating functional components,
              dynamic html elements rendered to the DOM via JS array methods,
              and implemented third party libraries to create UI like a date picker and login 
              forms.
            </p>
            <div className="proj1Buttons">
              <div className="proj1Butt">
                <div>
                  <Button variant="contained" color="primary" href="https://blockclubcalendar.now.sh" target="_blank">
                  View Website
                  </Button>
                </div>
                <div>
                  <Button variant="contained" color="primary" href="https://github.com/Build-Week-Block-Club-Calendar/block-club-calendar-FE" target="_blank">
                    View Code
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <img className="hiddenImg"
            src="images/block-club.jpg" 
            alt="screenshot of block-club calendar website home page" 
            />
        </div>
      </>
    )
}

export default Project1;