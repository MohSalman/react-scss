import React from "react";
import Button from "../../../Components/Common/Button";
import "./index.scss";
import {ReactComponent as ArrowIcon} from './../../../assets/icon/arrow.svg';

const CareerSection = () => {
  return (
    <div className="career-section ">
      <div className="container">
        <h2 className="heading">Careers</h2>
        <p className="para">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <Button className="secondary d-flex align-items-center ">See Open Positions <ArrowIcon className="icon-btn ml-3" /></Button>
      </div>
    </div>
  );
};

export default CareerSection;
