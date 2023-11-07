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
        max-height: 50vh;
      }
      figcaption {
        margin-top: 2vh;
        max-width: 90vw;
      }

      @media only screen and (max-width:600px) {
        img {
          max-height: 90vh;
        }
      }
</style>
### Urban Cowboy Websites

<figure>
  <img src="./CowboyCreativeHome.gif">
  <figcaption align="center">
    Home page for the work-in-progress Cowboy Creative Studio website, featuring selected projects and dropdown navigation. All content uses placeholders.
  </figcaption>
</figure>
#### ABSTRACT

In my capacity as UX lead and lead developer for my design studio PG Co alongside my partner George Platt, I am designing and developing multiple work-in-progress websites for the Urban Cowboy boutique hotel and creative consulting brand. Currently this includes the Cowboy Creative Studio website and the Porter Katz real estate brokerage team website. 

#### DESIGN & DEVELOPMENT 

We have worked directly with stakeholders to design usable, sleek websites for their brand. Using a mix of templated, CMS websites and custom code injections, we are building updated versions of these websites optimized both for modernity and accessibility and for driving conversions.

<figure>
    <img src="./PorterKatzTeamPageMocks.png">
    <figcaption align="center">
      Figma mockups depicting mobile-first designs for the Porter Katz brokerage team website, another work-in-progress
    </figcaption>
</figure>

For the brokerage team page, we used Squarespace mixed with custom code to create a custom website that would be easy to update using Squarespace's CMS. Working in a hybrid capacity with Urban Cowboy stakeholders, we created custom components and worked together to structure directed brainstorms and affinity diagramming to plan out the website's priorities and identify user experience needs.

We used Webflow for the Cowboy Creative Studio website, which necessitated balancing a higher degree of customizability and unique interactions with the stakeholder requirement of easy asset swapping and content editing.

<figure>
    <img src="./CowboyCreativeSplashPage.png">
    <figcaption align="center">
        The splash page for the Cowboy Creative Studio website features branded video assets, immediately introducing the user to the brand's identity as they are welcomed to the creative consultancy's website
    </figcaption>
</figure>

#### MOBILE FIRST DESIGN

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