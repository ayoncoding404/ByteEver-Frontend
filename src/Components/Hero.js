import React from "react";
// import '../Style/Hero.css'
import { BiLogoFacebook, BiLogoTwitter, BiLogoLinkedin } from "react-icons/bi";
import "../Styles/Hero.scss";

export const Hero = () => {
  return (
    <div className="container">
      <div className="left-side">
        <h1>We Are A WordPress Agency</h1>
      </div>
      <div className="right-side"> right side</div>
    </div>
  );
};

export default Hero;

/* <div className="box">
      <div className="hero-wrapper">
        <div className="hero">
          <div className="overlap">
            <div className="rectangle" />
            <h1 className="text-wrapper">We Are A WordPress Agency</h1>
            <img className="logo" alt="Logo" src="logo.png" />
            <div className="black-BG" />
            {/* <img className="strock-text" alt="Strock text" src="strock-text.png" /> }
            <div className="description">
              <p className="p">We specialize in crafting WordPress plugins and themes for online businesses.</p>
            </div>
            <div className="social-icon" >
            <BiLogoFacebook />
            <BiLogoTwitter />
            <BiLogoLinkedin />
            </div>
            <div className="menu">
              <div className="div" />
              <div className="rectangle-2" />
              <div className="text-wrapper-2">MENU</div>
            </div>
            <div className="arrow">
              <div className="overlap-group">
                <div className="group">
                  <div className="overlap-group-2">
                    <div className="ellipse" />
                    {/* <img className="vector" alt="Vector" src="vector-3.png" />
                    <img className="img" alt="Vector" src="vector-4.png" /> }
                    <div className="rectangle-3" />
                  </div>
                </div>
                <div className="rectangle-4" />
                <div className="rectangle-5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> */
