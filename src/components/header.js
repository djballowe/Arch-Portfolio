import React from "react";
import logo from "../Images/logo vector.svg";
import Dropdown from "./Dropdown";
import Menu from "@mdi/react";
import { mdiMenu } from "@mdi/js";
import MobileMenu from "./MobileMenu";

const Header = () => {
  return (
    <div>
      <MobileMenu />
      <div className="logo">
        <img src={logo} alt="" />
        <Menu path={mdiMenu} size={1.5} />
        <p>DAVID BALLOWE</p>
      </div>
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
};

export default Header;
