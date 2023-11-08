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
        max-width: 80vw;
      }
      iframe {
        height: 600px
      }

      @media only screen and (max-width:600px) {
        img {
          max-height: 90vh;
        }
        iframe {
          height: 500px;
        }
      }
</style>
### WCMA Visitor Engagement Collaboration and Wayfinding UX Design Project

As an undergraduate at Williams College, 

<figure>
<iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="80%" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FCst4KQb6Bpi7L4J13tx716%2FNXE-Wireframes%3Ftype%3Ddesign%26node-id%3D65-3141%26t%3D32CIjM8GaecZYRqn-1%26scaling%3Dcontain%26page-id%3D65%253A2986%26starting-point-node-id%3D65%253A3141%26mode%3Ddesign" allowfullscreen></iframe>
  <figcaption align="center">
    Mobile-first Figma prototype for Nan Xiang Express redesigned mobile interface
  </figcaption>
</figure>
#### ABSTRACT

In my capacity as UX lead for the initial information hierarchies and low fidelity prototypes of the Nan Xiang Express website redesign, I supported the Meanwhile Partners studio team in collaborating with Nan Xiang Express stakeholders to create Figma prototypes for a redesign of their restaurant website, starting with low fidelity and overseeing the process of bringing them to high fidelity.

#### UX DESIGN & PROTOTYPES

The Meanwhile Partners team and I have worked directly with stakeholders to design usable, sleek interface for multiple websites for two different brands: Nan Xiang Express restaurant and the ABC Point of Sale back-end marketing experience.

In addition to the mobile-first high fidelity prototypes we made for Nan Xiang Express, shown at the top of the page, we also created desktop flows for a few Nan Xiang Express pages:

<figure>
  <iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="80%" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FCst4KQb6Bpi7L4J13tx716%2FNXE-Wireframes%3Ftype%3Ddesign%26node-id%3D541-1531%26t%3DdBKLgTYwFWdDcwD9-1%26scaling%3Dscale-down%26page-id%3D539%253A894%26starting-point-node-id%3D541%253A1531%26mode%3Ddesign" allowfullscreen></iframe>
    <figcaption align="center">
      Desktop prototype for the Nan Xiang Express landing page
    </figcaption>
</figure>

For the ABC POS marketing back-end, we developed low fidelity prototypes for crucial pages to present a direction for restructuring the marketing portal for users of the POS software.

We used Figma to create modular components and structure a marketing back-end landing page, as well as sub-pages including a campaign template editor, both of which are shown below.

<figure>
    <img src="./ABCMarketingDashboard.png">
    <figcaption align="center">
      The ABC Marketing dashboard includes dropdown tabs for each section of a user's campaigns and promotions, as well as links to sub-pages. There are calls to action for creating new campaigns and promotions, as well as for editing existing ones
    </figcaption>
</figure>

<figure>
  <img src="./ABCNewCampaign.png">
  <figcaption align="center">
      The New Campaign editor includes options for editing mobile and desktop views of a campaign, as well as campaign style settings and options for changing the promotions included and the template used
  </figcaption>
</figure>

#### CONCLUSION

The new designs for Nan Xiang Express have already been handed off for development and will soon be live, creating a more current and modern, conventionally usable approach to restaurant e-commerce website design for this growing restaurant brand. `
    }
    </MuiMarkdown>
      );
  }
  
export default WCMA;