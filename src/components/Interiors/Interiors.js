import React from "react";

export default function Interiors() {
  return (
    <div className="interiors-grid-container">
      <div className="column">
        <img src={require("../../Images/Interiors/interiors1.JPG")} alt="" />
        <img src={require("../../Images/Interiors/interiors2.JPG")} alt="" />
      </div>
      <div className="column">
        <img src={require("../../Images/Interiors/interiors4.JPG")} alt="" />
        <img src={require("../../Images/Interiors/interiors3.JPG")} alt="" />
      </div>
      <div className="column">
        <img src={require("../../Images/Interiors/interiors5.JPG")} alt="" />
        <img src={require("../../Images/Interiors/interiors6.JPG")} alt="" />
      </div>
      <div className="column">
        <img src={require("../../Images/Interiors/interiors7.JPG")} alt="" />
        <img src={require("../../Images/Interiors/interiors8.JPG")} alt="" />
      </div>
    </div>
  );
}
