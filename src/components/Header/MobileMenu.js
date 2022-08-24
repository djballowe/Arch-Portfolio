import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function MobileMenu(props) {
  let navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState();

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

  const menuClick = () => {
    mobileMenuOpen ? setMobileMenuOpen(false) : setMobileMenuOpen(true);
    props.handle();
  };

  useEffect(() => {
    setMobileMenuOpen(props.open);
  }, [props.open]);

  return (
    <div
      className="menu-container"
      onClick={menuClick}
      style={{
        display: mobileMenuOpen ? "block" : "none",
      }}
    >
      <ul className="mobile-menu">
        <li onClick={handleClick}>Home</li>
        <li onClick={handleClick}>Interiors</li>
        <li onClick={handleClick}>Exteriors</li>
        <li onClick={handleClick}>About</li>
        <li onClick={handleClick}>Contact</li>
      </ul>
    </div>
  );
}
