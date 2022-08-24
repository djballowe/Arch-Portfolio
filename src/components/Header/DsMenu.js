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
      "/interiors": "35%",
      "/exteriors": "70%",
      "/about": "107%",
      "/contact": "142%",
    };
    const navigator = document.getElementById("line-hover");
    navigator.style.top = menuKey[location.pathname];
  });

  if (window.location.pathname === "/slide") {
    return null;
  } else {
    return (
      <div className="nav-container">
        <ul className="nav">
          <div className="track">
            <div className="line-hover" id="line-hover"></div>
          </div>
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
}
