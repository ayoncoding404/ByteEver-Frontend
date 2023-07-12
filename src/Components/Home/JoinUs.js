import React from "react";
import '../../Styles/Root.scss'
import team from "../../Assets/Team Members & You.png";
import Button from "../Buttons/Button";

const JoinUs = () => {
  return (
    <div className="join">
    <div className="join__container">
      <hr className="join__horizontal-line" />
      <p className="join__dot">Career</p>
      <img className="join__team" src={team} alt="Team Members & You" />
      <p className="join__paragraph">
        Want to serve the world and take <br /> your career to the next level?
      </p>
      <div className="join__button-red">
        <h4 className="join__button-text-red">Check Our Open Position</h4>
        <Button />
      </div>
      </div>
    </div>
  );
};

export default JoinUs;
