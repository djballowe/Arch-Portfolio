import React from "react";

export default function Home() {
  return (
    <div>
      <div className="slide-container">
        <img src={require("../../Images/SlideShow/slide3.JPG")} alt="" />
      </div>
      <div className="slide-controls">
        <p>Prev</p>
        <p>/</p>
        <p>Next</p>
      </div>
    </div>
  );
}
