import React from "react";
import logo from "../../Images/logo vector.svg";
import Menu from "@mdi/react";
import { mdiMenu } from "@mdi/js";
import { useNavigate } from "react-router-dom";

const Header = (props) => {
  let navigate = useNavigate();

  const handleClick = () => {
    props.open();
  };

  if (window.location.pathname === "/interiors/interiors-slide") {
    return null;
  } else {
    return (
      <div className="header">
        <div className="logo">
          <img
            src={logo}
            alt=""
            onClick={() => {
              navigate("/");
            }}
          />
          <div className="mobile-menu-container">
            <Menu path={mdiMenu} size={1.5} onClick={handleClick} />
          </div>
          <p
            onClick={() => {
              navigate("/");
            }}
          >
            DAVID BALLOWE
          </p>
        </div>
      </div>
    );
  }
};

export default Header;
