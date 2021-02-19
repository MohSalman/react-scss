import React from "react";
import Button from "../../../Components/Common/Button";
import Input from "../../../Components/Common/Input";
import TextArea from "../../../Components/Common/TextArea/TextArea";
import "./index.scss";

const ContactSection = () => {
  return (
    <div className="contact-section">
      <div className="contact-inner container">
        <h2 className="heading">Contact Us</h2>
        <div className="form-wrapper">
          <div className="row form-field">
            <div className="col-md-6 pr-4">
              <Input type="text" placeholder="Your Name" />
            </div>
            <div className="col-md-6 pl-4">
              <Input type="text" placeholder="Phone Number" />
            </div>
          </div>
          <div className="form-field">
            <Input type="text" placeholder="E-mail Address" />
          </div>
          <div className="form-field">
            <TextArea placeholder="Message/Concern" />
          </div>
          <div className="btn-wrapper text-center">
            <Button className="secondary">Sumbit</Button>
          </div>
          <h3 className="heading-sub">Office Address</h3>
          <p className="para">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
