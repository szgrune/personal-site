//Contact.js

import React from "react";
import { IconButton } from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';

import { MuiMarkdown } from 'mui-markdown';

import "../App.css";

function Contact() {
  return (
    <div>
    <MuiMarkdown>{`
<style>
      #contact-heading {
        text-align: left;
        margin: 2vh 5vw;
      }
      div {
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
      }

      @media only screen and (max-width:600px) {
        #contact-heading {
          display: none;
        }
        div {
          flex-direction: column;
        }
      }
</style>
<h4 id="contact-heading"> Get in touch:</h4> `}
    </MuiMarkdown>
    
    <div style={{display: "flex"}}>
      <IconButton href="mailto:samzgrunebaum@gmail.com" aria-label="delete" size="large">
      <EmailIcon style={{fontSize: "3em"}} />
      </IconButton>

      <IconButton target="_blank" href="https://www.github.com/szgrune" aria-label="delete" size="large">
      <GitHubIcon style={{fontSize: "3em"}} />
      </IconButton>

      <IconButton target="_blank" href="https://www.linkedin.com/in/samuel-grunebaum-60a591198/" aria-label="delete" size="large">
      <LinkedInIcon style={{fontSize: "3em"}} />
      </IconButton>
    </div>
    </div>
  );
}
  
export default Contact;