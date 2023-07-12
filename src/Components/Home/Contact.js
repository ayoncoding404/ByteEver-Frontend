import React from "react";
import '../../Styles/Root.scss'
import Button from "../Buttons/Button";

const Contact = () => {
  return (
    <div className="cont_contaier">
      <p className="cont_dot">Contact</p>
      <p className="cont_sol">Do You Have Any Question?</p>
      <p className="cont_talk">Let's Talk</p>
      <div className="cont_info_title">
        <div>Address:</div>
        <div>Email:</div>
        <div>Phone:</div>
      </div>
      <div className="cont_info_detail">
        <p>
          Byteever office address, street, <br /> house, city postal code
        </p>
        <p>info@byteever.com</p>
        <p>
          +088 01234 567 890 <br />
          +088 01234 567 891
        </p>
      </div>
      <div className="v1"></div>
      <div className="cont_button">
        <h4 className="cont_button_text">Submit Your Message</h4>
        <Button />
      </div>
    </div>
  );
};

export default Contact;
