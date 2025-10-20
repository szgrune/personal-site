//OpenLibrary.js

import React from "react";
import { MuiMarkdown, getOverrides } from 'mui-markdown';

import "../App.css";

const Infotopia = () => {
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
### Infotopia Data Visualization Project

<figure>
    <video src="./herotest4k.mov">
    <figcaption align="center">
        This video depicts the 3D model I built for visualizing the nine online activities as buildings with scales representing population percenttage usage & carbon footprint, as well as surface geometry complexity that visualizes the level of cognitive overload associated with each activity
    </figcaption>
</figure>

#### PROBLEM

Our brains evolved for the natural world, yet we now live in artificial environments that strain the limits of our minds.

What are the impacts of information overload on the individual human, societal, and planetary scales?

Infotopia aims to explore how information overload reshapes human cognition, emotion, and perception in the digital age.

<figure>
    <img src="./Frame.png">
    <figcaption align="center">
        Initial view with percent population usage visualized by building height, carbon footprint by building base dimensions, and cognitive overload shown through facade surface geometry
    </figcaption>
</figure>

City metaphor explained:

1. Commodification: Urban spaces, like our attention online, are commodified – the physical real estate of both worlds seek to monopolize our attention.
1. Natural+Artificial: Cities, like the Internet, are designed constructs that evolve new forms beyond what was planned, shifting with the people who inhabit them.
1. Umwelt: Our users interrogate their own digital Umwelt – the unique world that they inhabit online – through exploring the metaphorical city of Infotopia.

#### IDEATION & PROTOTYPING

Add text here explaining data analysis...

<figure>
    <img src="./x.png">
    <figcaption align="center">
        ______
    </figcaption>
</figure>

Initial prototypes...

<figure>
    <img src="./x.png">
    <figcaption align="center">
        ______
    </figcaption>
</figure>

#### Tech Stack

<figure>
    <img src="./x.png">
    <figcaption align="center">
        ______
    </figcaption>
</figure>

__________

#### Impact & Conclusion

__________

</MuiMarkdown>
  );
};
  
export default OpenLib;
