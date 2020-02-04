import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';

const ContactForm = () => {
  return (
    <>
      <div style={{textAlign: 'center', marginTop:'3rem', marginBottom: '2rem', display:'flex', justifyContent:'center', justifyContent:'space-around'}}>
        <a href="https://www.linkedin.com/in/cjogles/" target="_blank"><LinkedInIcon style={{fontSize: "5rem", color:"#0059b3"}}/></a>
        <a href="https://github.com/cjogles" target="_blank"><GitHubIcon style={{fontSize: "5rem", color:"#0059b3"}}/></a>
        <a href="mailto: jackson.ogles28@gmail.com" target="_blank"><EmailIcon style={{fontSize: "5rem", color:"#0059b3"}}/></a>
      </div>
      <h3 style={{textAlign: "center", marginTop: "2rem", marginBottom: "2rem"}}>Jackson Ogles Ⓒ 2020</h3>
    </>
  )
}

export default ContactForm;