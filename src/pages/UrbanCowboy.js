//UrbanCowboy.js

import React from "react";
import { MuiMarkdown, getOverrides } from 'mui-markdown';

import "../App.css";

const UrbanCowboy = () => {
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
        max-width: 75vw;
      }

      @media only screen and (max-width:600px) {
        img {
          max-height: 90vh;
        }
      }
</style>
### Urban Cowboy Websites

<figure>
  <img src="./cowboycreative_index.png">
  <figcaption align="center">
    Home page for the recently launched Cowboy Creative Studio website, featuring hero video and copy. This responsive landing page was designed using Figma and implemented with Webflow and custom code.
  </figcaption>
</figure>
#### ABSTRACT

In my capacity as UX lead and lead developer for my UX design and front end development consulting practice alongside my partner George Platt, we have designed and shipped the Urban Cowboy Hotels Creative Studio website, as well as continuing work on additional work-in-progress websites for the brand. 

#### DESIGN & DEVELOPMENT 

We have worked directly with stakeholders to design usable, sleek websites for their brand. Using a mix of templated CMS websites and custom code injections, we are building updated versions of these websites optimized both for modern responsiveness and accessibility.

<figure>
    <img src="./PorterKatzTeamPageMocks.png">
    <figcaption align="center">
      Figma mockups depicting mobile-first designs for the Porter Katz brokerage team website, another work-in-progress
    </figcaption>
</figure>

For the brokerage team page, we used Squarespace mixed with custom code to create a custom website that would be easy to update using Squarespace's CMS. Working in a hybrid capacity with Urban Cowboy stakeholders, we created custom components and worked together to structure directed brainstorms and affinity diagramming to plan out the website's priorities and identify user experience needs.

We used Webflow for the Cowboy Creative Studio website, which necessitated balancing a higher degree of customizability and unique interactions with the stakeholder requirement of easy asset swapping and content editing.

<figure>
    <img src="./cowboycreative_pressslider.png">
    <figcaption align="center">
        The press slider was a custom code injection Webflow component we created specifically for this project. Urban Cowboy/Cowboy Creative Studio has received a lot of press, necessitating a convenient way to showcase the articles without occupying too much real estate. The solution was to create a custom coded infinite marquee carousel with press logos and links to articles.
    </figcaption>
</figure>

#### MOBILE FIRST DESIGN

Research indicates that the majority of Internet users at a given moment are accessing the web through mobile devices. We used a mobile-first approach to this design, creating interactive Figma mockups before moving onto Squarespace.

<figure>
  <iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="80%" height="600" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F9hS94p6u0k6dSRCL3Bsc0S%2FPorter-Katz-Wires%3Ftype%3Ddesign%26node-id%3D1-2%26t%3DuHMZ7xR8TAv1pGD8-1%26scaling%3Dscale-down%26page-id%3D0%253A1%26starting-point-node-id%3D1%253A2%26mode%3Ddesign" allowfullscreen></iframe>
    <figcaption align="center">
        Interactive Figma mockup of the Porter Katz team website illustrating overall sitemap and user experience on mobile
    </figcaption>
</figure>

#### CONCLUSION
 
The design and development process so far has been an incredibly smooth collaboration between our two teams. We are looking forward to continuing building out the Creative Cowboy Studio website and Porter Katz brokerage team page, as we plan to launch before the new year. 

We are excited about our ongoing collaboration with this brand as we continue to overall their digital presence by bringing it into the 2020s, focusing on accessibility, mobile-first, and a more modern, youthful aesthetic sensibility. `
}
</MuiMarkdown>
  );
};
  
export default UrbanCowboy;