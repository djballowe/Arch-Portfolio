import React, { useState, useEffect } from "react";
import logo from "../../Images/logo vector.svg";
import Menu from "@mdi/react";
import { mdiMenu } from "@mdi/js";
import MobileMenu from "./MobileMenu";

const Header = (props) => {
  const handleClick = () => {
    props.open();
  };

  return (
    <div className="header">
      <div className="logo">
        <img src={logo} alt="" />
        <div className="mobile-menu-container">
          <Menu path={mdiMenu} size={1.5} onClick={handleClick} />
        </div>
        <p>DAVID BALLOWE</p>
      </div>
    </div>
  );
};

export default Header;
