// Home.js – homepage

import React from "react";

import FreeformGallery from "../components/FreeformGallery.js";
import infotopiaVideo from "../img/Infotopia_demo.mov";
import willaGif from "../img/willa_gif.gif";
import wcmaImage from "../img/Fulbright Classroom Shot.jpg";
const fulbrightImage = wcmaImage; // placeholder until "Fulbright Classroom Shot.jpg" is added to src/img

export default function Home() {
  return (
    <div>
      <FreeformGallery
        videoSrc={infotopiaVideo}
        gifSrc={willaGif}
        imageSrc={fulbrightImage}
      />
    </div>
  );
}
