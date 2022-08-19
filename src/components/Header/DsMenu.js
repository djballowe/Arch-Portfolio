import React from "react";
import Dropdown from "./Dropdown";

export default function DsMenu() {
  return (
    <div className="nav-container">
      <ul className="nav">
        <li>Home</li>
        <li>Portfolio</li>
        <Dropdown />
        <li>About</li>
        <li>Contact</li>
        <li>Blog</li>
      </ul>
    </div>
  );
}
