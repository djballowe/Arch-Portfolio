import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function DsMenu() {
  let location = useLocation();
  let navigate = useNavigate();
  const menuItems = {
    Home: "/",
    Interiors: "/interiors",
    Exteriors: "/exteriors",
    About: "/about",
    Contact: "/contact",
  };

  const handleClick = (e) => {
    navigate(menuItems[e.target.textContent]);
  };

  useEffect(() => {
    const menuKey = {
      "/": "0%",
      "/interiors": "17%",
      "/exteriors": "34.5%",
      "/about": "52.5%",
      "/contact": "69.5%",
    };
    const navigator = document.getElementById("line-hover");
    navigator.style.top = menuKey[location.pathname];
  });

  return (
    <div className="nav-container">
      <ul className="nav">
        <div className="line-hover" id="line-hover"></div>
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
