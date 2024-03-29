/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
const Images = require("./SlideImages.json").images;

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);

  const handleClick = (e) => {
    const button = e.target.id;
    if (button === "+") {
      currentImage === Images.length - 1
        ? setCurrentImage(0)
        : setCurrentImage(currentImage + 1);
    } else {
      currentImage === 0
        ? setCurrentImage(Images.length - 1)
        : setCurrentImage(currentImage - 1);
    }
  };

  return (
    <div className="slide-container-animation">
      <div className="slide-container" onClick={handleClick} id="+">
        <img
          onClick={handleClick}
          id="+"
          src={require(`../../Images/SlideShow/${Images[currentImage].src}`)}
        />
      </div>
      <div className="slide-controls">
        <p onClick={handleClick} id="-">
          Prev
        </p>
        <p>/</p>
        <p onClick={handleClick} id="+">
          Next
        </p>
      </div>
    </div>
  );
}
