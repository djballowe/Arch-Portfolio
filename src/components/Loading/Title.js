import React, { useState } from "react";
import logo from "../../Images/logo vector.svg";

const Title = () => {
  const [visible, setVisible] = useState(true);
  const [display, setDisplay] = useState(true);

  const timer = () => {
    setVisible(false);
  };

  const displayTimer = () => {
    setDisplay(false);
  };

  setTimeout(timer, 3500);
  setTimeout(displayTimer, 4500);

  return (
    <div
      className="title-container"
      style={{
        opacity: visible ? "1" : "0",
        display: display ? "flex" : "none",
      }}
    >
      <div className="title-text-container">
        <div className="title-logo">
          <img src={logo} alt="" />
          <p>DAVID</p>
          <p>BALLOWE</p>
        </div>
        <div className="subtitle">
          <p>ARCHITECTURAL PHOTOGRAPHER</p>
        </div>
      </div>
    </div>
  );
};

export default Title;
