import React, { useState } from "react";
import '../../Styles/Root.scss'
import Button from '../Buttons/Button';
import ButtonWhite from "../Buttons/ButtonWhite";
import ButtonRed from "../Buttons/ButtonRed";

const Products = ({ url, title, paragraph, buttonText }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isButtonHovered, setIsButtonHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setIsButtonHovered(false);
  };

  const handleButtonMouseEnter = () => {
    setIsButtonHovered(true);
  };

  const handleButtonMouseLeave = () => {
    setIsButtonHovered(false);
  };

  return (
    <div>
      <div
        className={`prod_pluginever ${isHovered ? "hovered" : ""}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <h5 className={`plugin_url ${isHovered ? "white" : ""}`}>{url}</h5>
        <h1 className={`prod_title ${isHovered ? "white" : ""}`}>{title}</h1>
        <p className={`prod_paragraph ${isHovered ? "white" : ""}`}>
          {paragraph}
        </p>
        <div
          className={`prod_button ${isHovered ? "white" : ""}`}
          onMouseEnter={handleButtonMouseEnter}
          onMouseLeave={handleButtonMouseLeave}
        >
          <h4
            className={`button_text ${isHovered ? "white" : ""} ${
              isButtonHovered ? "hovered" : ""
            }`}
          >
            {buttonText}
          </h4>
          {isHovered ? (
            isButtonHovered ? (
              <ButtonRed />
            ) : (
              <ButtonWhite
                onMouseEnter={handleButtonMouseEnter}
                onMouseLeave={handleButtonMouseLeave}
              />
            )
          ) : (
            <Button />
          )}
        </div>
      </div>
    </div>
  );
};

const Product = () => {
  return (
    <div className="prodcontain">
      <p className="pro-dot">Products</p>
      <p className="pro-sol">Our Products</p>
      <Products
        url="www.pluginever.com"
        title="PLUGINEVER"
        paragraph="Discover the easiest way to Grow your business with our free and paid WordPress plugins."
        buttonText="Visit The Site"
      />
      <Products
        url="www.everaccounting.com"
        title="EVERACCOUNTING"
        paragraph="Discover the easiest way to Manage your business finances right from your WordPress dashboard."
        buttonText="Visit The Site"
      />
      <Products
        url="www.wcstudios.com"
        title="WC STUDIO"
        paragraph="Discover the easiest way to Grow your business with our free and paid WordPress plugins."
        buttonText="Visit The Site"
      />
    </div>
  );
};

export default Product;

