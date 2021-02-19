import React from "react";
import Button from "../../../Components/Common/Button";
import {ReactComponent as ArrowIcon} from './../../../assets/icon/arrow.svg';
import {ReactComponent as Insta} from './../../../assets/whyJoin/insta.svg'
import "./index.scss";
const GridSection = () => {
  return (
    <div className="grid-section">
      <h2 className="heading">Where can I get some?</h2>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="solution-card">
              <Insta className="icon"/>
              <h3 className="card-hauler-heading">Lorem</h3>
              <p className="para">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <Button className="primary d-flex align-items-center mx-auto">Read More <ArrowIcon className="icon-btn ml-3" /></Button>
            </div>
          </div>
          <div className="col-md-4">
            <div className="solution-card">
              <Insta className="icon"/>
              <h3 className="card-hauler-heading">Ipsum</h3>
              <p className="para">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <Button className="primary d-flex align-items-center mx-auto">Read More <ArrowIcon className="icon-btn ml-3" /></Button>

            </div>
          </div>
          <div className="col-md-4">
            <div className="solution-card">
              <Insta className="icon"/>
              <h3 className="card-hauler-heading">Lorem Ipsum</h3>
              <p className="para">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <Button className="primary d-flex align-items-center mx-auto">Read More <ArrowIcon className="icon-btn ml-3" /></Button>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridSection;
