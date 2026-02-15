//WCMA.js

import React from "react";
import { MuiMarkdown, getOverrides } from 'mui-markdown';

import "../App.css";

function WCMA() {
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
            style: { display: 'flex', flexDirection: 'column', maxWidth: "100vw", margin: '5vh auto', alignItems: 'center' }
          }
        }
      }}
    >{`
<style>
      h3 {
        margin: 5vh 5vw !important;
      }
      h4 {
        margin: 5vh 8vw !important;
      }
      img {
        object-fit: contain;
        max-width: 100vw;
        max-height: 70vh;
      }
      figcaption {
        margin-top: 2vh;
        max-width: 60vw;
      }

      @media only screen and (max-width:600px) {
        img {
          max-height: 90vh;
        }
      }
</style>
### WCMA Visitor Engagement Collaboration and Wayfinding UX Design Project

As an undergraduate at Williams College, I participated in the Williams College Museum of Art (WCMA) 2018-19 Agents for Creative Action program. Concurrently with my participation in Agents for Creative Action, I developed a group UX research project and accompanying prototypes for a wayfinding solution at WCMA as part of a Williams College Human Computer Interaction course.

You can read more about my work as an Agent for Creative Action at WCMA <a href="https://www.berkshireeagle.com/news/local/agents-for-creative-change-williams-students-serve-art-and-brunch-in-24-hour-challenge/article_8f2abe67-ce4c-54ea-a48a-bad3868982bf.html" target="_blank">here</a>. For a more in depth showcase of my group project on wayfinding at WCMA, check out our project overview <a href="https://cmpelz.github.io/" target="_blank">website</a>.

View our low fidelity interactive digital prototype for the WCMA wayfinding human computer interaction project here:

<figure>
<iframe width="442" height="935" src="//invis.io/7JPHXXAN3VA" frameborder="0" allowfullscreen=""></iframe>
  <figcaption align="center">
    Mobile-first inDesign prototype for SWCMA (Search WCMA), the wayfinding app solution my group created for our 2018 Human Computer Interaction semester project
  </figcaption>
</figure>

#### SWCMA WAYFINDING SOLUTION DESIGN PROCESS OVERVIEW

<figure>
  <img src="./SWCMA_process_homepage.png">
  <figcaption align="center">
    Our process, outlined here, started with UX research and then built solutions and iterative prototypes on that foundation
  </figcaption>
</figure>

Our process for the SWCMA wayfinding solution project started with problem definition, followed by contextual inquiries and structured interviews with museum visitors and stakeholders. 

After our UX research, we created affinity diagrams to identify themes in our qualitative research and then began storyboarding possible solutions using user personas we developed. We then went from storyboards to paper prototypes, which we used for usability testing. From there, we created our digital prototype and video prototype demo. Each step of our design process for SWCMA is outlined in the <a href="https://cmpelz.github.io/appendix/" target="_blank">appendix</a> of our project overview website.

You can also check out our video prototype demo:

<iframe width="640" height="360" style="max-width: 100vw" src="https://www.youtube.com/embed/Ge0hL6zgZx0" title="SWCMA Prototype Final" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> 

#### AGENT FOR CREATIVE ACTION

As a WCMA Agent for Creative Action, my cohort and I had numerous roles pertaining to visitor engagement at the museum. Or job was to plan museum programming for the community, create public facing communications materials for said programming, and also to function as a sort of focus group of students for the museum. 

We learned about everything from how to draft press releases to fine art conservation techniques. Our programs included a series of winter latenight snack events at the museum with live performances, as well as a sound/food installation with locally baked bread in the museum's rotunda. The flyer for the latter event can be found <a href="https://artmuseum.williams.edu/event/experiments-with-art-and-brunch/" target="_blank">here</a>. You can also read more about the event in this Berkshire Eagle <a href="https://www.berkshireeagle.com/news/local/agents-for-creative-change-williams-students-serve-art-and-brunch-in-24-hour-challenge/article_8f2abe67-ce4c-54ea-a48a-bad3868982bf.html" target="_blank">article</a>.

#### CONCLUSION

My undegraduate work with WCMA, both as a Human Computer Interaction student designer and as a WCMA Agent for Creative Action, introduced me to the world of user-centered design. Through the support of my professor, Iris Howley, and the museum office of Academic and Public Engagement, led by Nina Pelaez, I learned about how important it is to involve end users in the process of designing meaningful, effective, useful new experiences, whether digital solutions or in-person events and programming. I also learned how fun the design process can be! `
    }
    </MuiMarkdown>
      );
  }
  
export default WCMA;