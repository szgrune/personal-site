//Kimino.js

import React from "react";
import { MuiMarkdown, getOverrides } from 'mui-markdown';

import "../App.css";

const Kimino = () => {
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
        max-width: 100vw;
        max-height: 50vh;
      }
      figcaption {
        max-width: 90vw;
      }

      @media only screen and (max-width:600px) {
        img {
          max-height: 90vh;
        }
      }
</style>
### Kimino Drinks Website Redesign

<img src="./Collage New.png">

#### ABSTRACT

After a comprehensive site audit, I worked with Kimino team member and co-designer George Platt to overhaul Kimino’s e-commerce with a web redesign and the introduction of Klaviyo email marketing. We used data collected with tools ranging from General Instance to Google Analytics to craft a unique user experience centered around maximizing e-commerce revenues while remaining faithful to Kimino’s elegant identity and emphasis of traditional Japanese farming methods. 

#### ART DIRECTION 

<figure>
    <img src="./Three Panel Kimino.png">
    <figcaption align="center">
        Generational Yuzu farmers on Shikoku in Kochi Prefecture. 
    </figcaption>
</figure>

Working remotely with photo and videography teams on Kimino’s partner farms in Shikoku, we produced content for social and email campaigns. The shoots centered around the daily routines of Yuzu farmers and their relationship to the practice, many of whom inherited the practice from their parents. 

#### WEB DESIGN, E-COMM OPTIMIZATION

<figure>
    <img src="./Screen Shot 2023-04-26 at 5.57.30 PM.png">
    <figcaption align="center">
        The new iterations of the website included marked improvements to accessibility and user flows, including the addition of a centralized, elegant purchase interface.  
    </figcaption>
</figure>

#### EMAIL AUTOMATION

<figure>
    <img src="./Email Wires Trio.png">    
    <figcaption align="center">
        We designed & implemented 4 email series, each with a distinct narrative and flow. These included a welcome series, an abandon browse prompt, an abandon cart prompt and post-purchase check in and replenish flow. 
    </figcaption>
</figure>

#### RESULTS
    
<img src="./Farmer Tools.jpg">
 
Kimino’s Shopify performance metrics uniformly increased in the months after the redesign went live and email flows were introduced: AOV increased  34%, repeat purchase rate for new customers increased by 29% and churn rate decreased by 2%. `
}
</MuiMarkdown>
  );
};
  
export default Kimino;