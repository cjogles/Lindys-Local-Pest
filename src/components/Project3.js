import React from 'react';
import Button from '@material-ui/core/Button';

const Project3 = () => {

    return (
      <>
        <div className="firstProject1">
          <a href="https://project-list.now.sh" target="_blank">
            <img 
            src="images/plantScreenShot.jpg" 
            alt="screenshot of plant purpose website home page" 
            />
          </a>
          <div className="proj1Text">
            <h2>Plant Purpose</h2>
            <p>
              Worked with six full stack developers and one UX designer to create plant management service app. 
              Worked primarily on front end and pair programmed with back end devs and developer. Created video presentation of project.
            </p>
            <div className="proj1Buttons">
              <div className="proj1Butt">
                <div>
                  <Button variant="contained" color="primary" href="https://plantpurpose.now.sh" target="_blank">
                  View Website
                  </Button>
                </div>
                <div>
                  <Button variant="contained" color="primary" href="https://github.com/Plant-Purpose" target="_blank">
                    View Code
                  </Button>
                </div>
                <div>
                  <Button variant="contained" color="primary" href="https://www.youtube.com/watch?v=s5Ib7fHBSTQlist=PLTrij8iU8hRrvTLbln5H5umHasxrLZPWc" target="_blank">
                    View Video Presentation
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <img className="hiddenImg"
            src="images/plantScreenShot.jpg" 
            alt="screenshot of plant purpose website home page" 
            />
        </div>
      </>
    )
}

export default Project3;