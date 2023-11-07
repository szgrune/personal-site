//NoraNormile.js

import React from "react";
import { MuiMarkdown, getOverrides } from 'mui-markdown';

import "../App.css";

const NoraNormile = () => {
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
### Nora Normile Artist Website Redesign

<img src="./NoraDesktopNoHover.png">

#### ABSTRACT

In my capacity as UX lead and lead developer for my design studio PG Co alongside my partner George Platt, I worked directly with artist Nora Normile to redesign her artist website. The new website prominently features artwork organized chronologically by gallery show and provides simple, conventional navigation to create an accessible, easily usable user experience.

#### DESIGN & DEVELOPMENT 

<figure>
    <img src="./nora_platform.png">
    <figcaption align="center">
        Normile's _Untitled Platform (Perfect Dirty Carpet)_, one of the works featured prominently in the home page carousels.
    </figcaption>
</figure>

We used Squarespace mixed with custom code to create a custom templated CMS website that would be easy to update with low technical overhead. Working in a hybrid capacity with the artist herself, we created carousels to display each artwork and used custom code injections to create a hover interaction for displaying descriptions of works. 

<figure>
    <img src="./NoraDesktopHover.png">
    <figcaption align="center">
        The new iterations of the website include carousels with a hover interaction on desktop for displaying artwork descriptions. Descriptions are editable from the Squarespace CMS.
    </figcaption>
</figure>

#### MOBILE FIRST DESIGN

<figure>
  <div style="display:flex; flex-direction: row; width: 100vw; justify-content: center">
    <div>
    <img src="./NoraMobile.png" width="100%">  
    </div>
    <div>
    <img src="./NoraMobileMenu.png" width="100%">    
    </div>
  </div>
    <figcaption align="center">
        Using custom code injections and Squarespace templates, we designed & implemented a mobile version where image descriptions appear below carousels and the menu is collapsed into an expandable hamburger menu.
    </figcaption>
</figure>

#### RESULTS
 
Nora's new website launch has proven more accessible and easier to use both from an end-user perspective and from the perspective of the artist herself, who is now able to update image and text content and add new projects to display on her site whenever she wishes. `
}
</MuiMarkdown>
  );
};
  
export default NoraNormile;