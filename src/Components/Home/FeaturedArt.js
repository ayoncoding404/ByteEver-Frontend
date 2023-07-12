import React from "react";
import '../../Styles/Root.scss'
import Button  from "../Buttons/Button";

const FeaturedArt = () => {
  return (
    <div className="feat_container">
      <p className="feat_dot">News</p>
      <p className="feat_sol">Our Featured Articles</p>
      <div className="date_writer">
        <div className="date">26 JANUARY 2023</div>
        <div className="writer">By: Jonathon Doe</div>
      </div>
      <p className="feat_para_black">
        Top 7 Free Minimum Maximum Quantity and Step Control <br /> Plugin for
        WooCommerce
      </p>
      <p className="feat_para_gray">
        Byteever is a team of outstanding web strategists, designers, and
        engineers that <br /> together imagine, build, and grow amazing web
        solutions that our customers and their <br /> audience love...
      </p>
      <div className="feat_button">
        <h4 className="feat_button_text">View More Articles</h4>
        <Button />
      </div>
    </div>
  );
};

export default FeaturedArt;
