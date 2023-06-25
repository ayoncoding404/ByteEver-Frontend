import React from "react";
import "../Styles/Navbar.scss";
import logo from "../Assets/logo.png";

const Header = () => {
  return (
    <div className="container">
      <div className="logo">
        <img src={logo} alt="mainLogo" />
      </div>
      <div className="menu">
        <div className="menu">MENU</div>
        <div className="drop">
            <div className="long">l</div>
            <div className="small">s</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
