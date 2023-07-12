import React from "react";
import {
  SlSocialFacebook,
  SlSocialTwitter,
  SlSocialLinkedin,
} from "react-icons/sl";
import '../../Styles/Root.scss'



export const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__container">
        <div className="hero__main">
          <div className="hero__left-side"></div>
          <div className="hero__right-side"></div>
        </div>
        <div className="hero__text-section">
          <div className="hero__main-text">
            We Are A <br />
            WordPress <br />
            Agency
          </div>
          <div className="hero__social-para">
            <div className="hero__para">
              We specialize in crafting WordPress <br />
              plugins and themes for online businesses.
            </div>
            <div className="hero__socials">
              <SlSocialFacebook color="white" />
              <SlSocialTwitter color="white" />
              <SlSocialLinkedin color="white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
