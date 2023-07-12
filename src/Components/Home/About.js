import React from "react";
import '../../Styles/Root.scss'

export const About = () => {
  return (
    <div className="about">
      <div className="about__container">
        <div className="about__v-lines-group">
          <div className="about__v-lines1"></div>
          <div className="about__v-lines2"></div>
          <div className="about__v-lines3"></div>
        </div>
        <p className="about__dot">ABOUT US</p>
        <p className="about__sol">
          We build amazing web solutions <br />
          to make customers' lives easy
        </p>
        <div className="about__v1"></div>
        <p className="about__paragraph">
          Byteever is a team of outstanding web strategists, designers, and
          engineers that together imagine, <br /> build, and grow amazing web
          solutions that our customers and their audience love. <br /> Our team
          of engineers consistently delivers code that is powerful, efficient,
          and secure. We will work <br /> with you on any aspect of WordPress
          development.
        </p>
      </div>
    </div>
  );
};

export default About;