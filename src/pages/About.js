//About.js

import React from "react";
import { MuiMarkdown, getOverrides } from 'mui-markdown';

import "../App.css";

function About() {
  return (
    <MuiMarkdown
      overrides={{
        ...getOverrides(), // This will keep the other default overrides.
        p: {
          component: 'p',
          props: {
            style: { margin: '2vh 8vw', textAlign: 'left'}
          },
        },
        ol: {
          component: 'ol',
          props: {
            style: { margin: '4vh 8vw', textAlign: 'left' }
          }
        },
        figure: {
          component: 'figure',
          props: {
            style: { display: 'flex', flexDirection: 'column', margin: '5vh auto', alignItems: 'center' }
          }
        }
      }}
    >{`
<style>
      h3 {
        text-align: left;
        margin: 5vh 5vw !important;
      }
      h4 {
        margin: 5vh 8vw !important;
      }
      img {
        float: left;
        margin: 0vh 5vw;
        object-fit: contain;
        max-width: 100vw;
        max-height: 50vh;
      }
      figcaption {
        margin-top: 2vh;
        max-width: 90vw;
      }
      ul {
        margin: 2vh 5vw;
        text-align: left;
      }

      @media only screen and (max-width:600px) {
        h3 {
          margin: 2vh 5vw !important;
        }
        img {
          margin: 5vh 5vw;
        }
      }
</style>
### About Me


<img src="./headshot.png">

Samuel Grunebaum studied Computer Science and Comparative Literature at Williams College. Since then, he has worked as an educator, developer, and designer for institutions such as Fulbright, the Horace Mann School, and the Internet Archive’s Open Library, as well as numerous private clients. 

Currently, Samuel is focused on learning about, designing, and developing new experiences at the intersection of technology, education, and archival work to build usable, accessible, easily maintainable user-facing solutions. He is also passionate about his commercial design practice and is always open to collaborating with new people.

Check out Sam's: 
  * Personal <a href="https://github.com/szgrune" target="_blank">Github</a>
  * <a href="https://www.linkedin.com/in/samuel-grunebaum-60a591198/" target="_blank">LinkedIn</a>
  * Example Class Curriculum Website: <a href="https://szgrune.github.io/appdev" target="_blank">App Development</a>
     

`}
</MuiMarkdown>
  );
}
  
export default About;