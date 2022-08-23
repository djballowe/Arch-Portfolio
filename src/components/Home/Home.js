import React, { useState, useEffect } from "react";
const Images = require("./SlideImages.json").images;

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);

  const handleClick = (e) => {
    const button = e.target.id;
    button === "+"
      ? setCurrentImage(currentImage + 1)
      : setCurrentImage(currentImage - 1);
  };

  return (
    <div>
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
