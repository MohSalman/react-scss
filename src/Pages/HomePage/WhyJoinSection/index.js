import React from "react";
import {ReactComponent as Insta} from './../../../assets/whyJoin/insta.svg'
import "./index.scss";

const WhyJoinSection = () => {
  return (
    <div className="why-join-section">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 left-column">
            <div className="text-content">
              <h2 className="heading">
                What is Lorem <br /> Ipsum? <span>Ipsum?</span> <br />
              </h2>
            </div>
          </div>
          <div className="col-md-6 right-column">
            <div className="icon-content">
              <div className="row">
                <div className="col-md-6 text-center">
                  <Insta className="icon"/>
                  <p className="para">What is Lorem Ipsum?</p>
                </div>
                <div className="col-md-6 text-center">
                  <Insta className="icon"/>
                  <p className="para">What is Lorem Ipsum?</p>
                </div>
                <div className="col-md-6 text-center">
                  <Insta className="icon"/>

                  <p className="para">What is Lorem Ipsum?</p>
                </div>
                <div className="col-md-6 text-center">
                  <Insta className="icon"/>

                  <p className="para">What is Lorem Ipsum?</p>
                </div>
                <div className="col-md-6 text-center">
                  <Insta className="icon"/>

                  <p className="para">What is Lorem Ipsum?</p>
                </div>
                <div className="col-md-6 text-center">
                  <Insta className="icon"/>
                  <p className="para">What is Lorem Ipsum?</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyJoinSection;
