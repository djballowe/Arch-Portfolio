import React from "react";
import logo from "../Images/logo vector.svg";

const Header = () => {
  return (
    <div>
      <div className="logo">
        <img src={logo} alt="" />
        <p>DAVID BALLOWE</p>
      </div>
      <ul className="nav">
        <li>Home</li>
        <li>Portfolio</li>
        <li>About</li>
        <li>Contact</li>
        <li>Blog</li>
      </ul>
    </div>
  );
};

export default Header;
