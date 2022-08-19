import React from "react";
import logo from "../../Images/logo vector.svg";
import Menu from "@mdi/react";
import { mdiMenu } from "@mdi/js";
import MobileMenu from "./MobileMenu";

const Header = () => {
  return (
    <div className="header">
      <MobileMenu />
      <div className="logo">
        <img src={logo} alt="" />
        <div className="mobile-menu-container">
          <Menu path={mdiMenu} size={1.5} />
        </div>
        <p>DAVID BALLOWE</p>
      </div>
    </div>
  );
};

export default Header;
