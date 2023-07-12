import React from "react";
import logo from "../../Assets/logo.png";
import '../../Styles/Root.scss'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="mainLogo" />
      </div>
      <div className="nav_menu">
        <a>Home</a>
        <a>Product</a>
        <a>Career</a>
        <a>Blog</a>
        <a>Contact</a>
      </div>
    </div>
  );
};

export default Navbar;
