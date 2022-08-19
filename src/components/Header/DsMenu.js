import React from "react";
import { useNavigate } from "react-router-dom";

export default function DsMenu() {
  let navigate = useNavigate();

  const handleClick = (e) => {
    const menuItems = {
      Home: "/",
      Interiors: "/interiors",
      Exteriors: "/exteriors",
      About: "/about",
      Contact: "/contact",
    };
    navigate(menuItems[e.target.textContent]);
  };

  return (
    <div className="nav-container">
      <ul className="nav">
        <li onClick={handleClick}>Home</li>
        <li onClick={handleClick}>Interiors</li>
        <li onClick={handleClick}>Exteriors</li>
        <li onClick={handleClick}>About</li>
        <li onClick={handleClick}>Contact</li>
        <li>Blog</li>
      </ul>
    </div>
  );
}
