import React from 'react';
import Button from '@material-ui/core/Button';

const Project2 = () => {

  const butt = {
    width: '50%',
    display: 'flex',
    margin: 'auto',
    marginBottom: '0.5rem',
    marginTop: '1rem',
  }

    return (
      <>
        <div className="firstProject2">
          <div className="proj2Text">
            <h2>Second Chance</h2>
            <p>
              Worked on a Lambda School Development Team as a Senior React Developer
              to build a web platform where employers can view prison inmate credentials
              for hiring purposes, and prison admin can add thier prison and post their
              inmates for viewing. Created CRUD functionality to work with back end sqlite
              server and database.
            </p>
            <div className="proj2Buttons">
              <div className="proj2Butt">
                <div>
                  <Button style={butt} variant="contained" color="primary" href="https://second-chance.now.sh/" target="_blank">
                  View Website
                  </Button>
                </div>
                <div>
                  <Button style={butt} variant="contained" color="primary" href="https://github.com/Build-WeekFT-PrisonerSkills/PS-Frontend" target="_blank">
                    View Code
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <a href="https://second-chance.now.sh/" target="_blank">
              <img 
              src="images/second-chance.jpg" 
              alt="screenshot of second-chance prisoner website home page" 
              />
            </a>
          </div>
        </div>
      </>
    )
}

export default Project2;