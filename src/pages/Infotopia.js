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
            style: { display: 'flex', flexDirection: 'column', margin: '5vh auto', alignItems: 'center', maxWidth: '100vw' }
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
      video {
        object-fit: contain;
        max-width: 100vw;
        max-height: 76vh;
      }
      img {
        object-fit: contain;
        max-height: 50vh;
        min-width: 0;
        min-height: 0;
        flex-shrink: 1;
      }
      figcaption {
        margin-top: 2vh;
        max-width: 90vw;
      }
      .wide {
        width: 100%;
        max-height: 75vh; 
      }
      @media only screen and (max-width:600px) {
        img {
          max-height: 90vh;
        }
      }
</style>
### Infotopia Data Visualization Project
##### A metaphorical city visualizing impacts of online activity in the European Union: 
##### Nine buildings representing nine of the most popular online activities are shown with heights scaled to usage, widths scaled to ecological impact, and surface geometry with gaps representing the level of cognitive load and stress associated with each activity.
<figure>
    <video autoplay loop muted>
      <source src="./herotest4k.mov" type="video/mp4"/>
    </video>
    <figcaption align="center">
        This video depicts the 3D model we built for visualizing the nine online activities as buildings with scales representing population percenttage usage & carbon footprint, as well as surface geometry complexity that visualizes the level of cognitive overload associated with each activity
    </figcaption>
</figure>

#### PROBLEM

Our brains evolved for the natural world, yet we now live in artificial environments that strain the limits of our minds. What are the impacts of information overload on the individual human, societal, and planetary scales? Infotopia aims to explore how information overload reshapes human cognition, emotion, and perception in the digital age.

For nine of the most popular online activities, we visualized the level of usage within the EU population, cognitive load, and carbon footprint as buildings with an emergent, data-driven architecture.

<figure>
    <img class="wide" src="./Infotopia Dashboard.png">
    <figcaption align="center">
        Initial view with percent population usage visualized by building height, carbon footprint by building base dimensions, and cognitive overload shown through facade surface geometry
    </figcaption>
</figure>

City metaphor explained:

1. Commodification: Urban spaces, like our attention online, are commodified – the physical real estate of both worlds seek to monopolize our attention.
1. Natural+Artificial: Cities, like the Internet, are designed constructs that evolve new forms beyond what was planned, shifting with the people who inhabit them.
1. Umwelt: Our users interrogate their own digital Umwelt – the unique world that they inhabit online – through exploring the metaphorical city of Infotopia.

#### Video Walkthrough

<figure>
    <video controls>
      <source src="./Infotopia.MOV" type="video/mp4"/>
    </video>
</figure>

#### DATASETS, IDEATION, & PROTOTYPING

For the skeletal structure of our city visualization, we used Eurostat data on EU usage of our nine online activity categories. 

We also used Our World of Data’s EU Carbon Intensity of Electricity for annual CO2/kWh metrics.

<figure>
    <div style="display: flex; flex-direction: row; gap: 16px; padding: 32px; max-width: 100vw; min-width: 0">
      <img src="./Eurostat Online Activity Usage Data.png">
      <img src="./Carbon Intensity of Electricity Generation EU 2024.png">
    </div>
    <figcaption align="center">
        Datasets for European Union population usage of our nine online activities & carbon intensity of electricity in EU, used to calculate activity carbon footprint
    </figcaption>
</figure>

Pictured below are two early stage prototypes and our final 3D building model, generated using Grasshopper and imported into Three.js where we manipulated the heights and footprint sizes for each year of data.

<figure>
    <img src="./infotopia_prototype1.png">
    <figcaption align="center">
        Our initial sketch aimed to capture the overwhelming nature of a city as a metaphor for the cognitive overload associated with online activity.
    </figcaption>
</figure>

<figure>
    <img src="./Shorter Pecha Kucha GIF.gif">
    <figcaption align="center">
        This prototype generated buildings with each level of a building representing a different year.
    </figcaption>
</figure>

<figure>
    <img src="./infotopia_buildingmodel.png">
    <figcaption align="center">
        This figure shows our 3D Infotopia city model, generated in using Grasshopper to represent the cognitive load associated with different activities by removing pieces of each building's surface geometry. More pieces removed from an activity building signifies a higher level of observed cognitive load from our ethnographies and lit review.
    </figcaption>
</figure>

#### Technical Stack and Implementation

<figure>
    <img src="./infotopia_techstack.png">
    <figcaption align="center">
        Infotopia combines a robust data processing pipeline with a dynamic 3D web visualization built using Grasshopper and Three.js. Our video prototype was built on top of our Three.js interface using assets generated in Adobe Creative Suite and Figma.
    </figcaption>
</figure>

#### Impact & Conclusion

We reframe the issue of information overload with an interactive and novel visual approach.

Our objective extends beyond the city limits of Infotopia. We envision a global community participating in the city of Infotopia by adding their own building data, their own ethnography observations or insights, and perhaps using this framework to create new neighboring cities representing adjacent issues to the problem of information overload.

`}

</MuiMarkdown>
  );
};
  
export default Infotopia;
