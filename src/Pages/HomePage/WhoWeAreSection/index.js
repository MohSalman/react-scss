import React from "react";
import Particles from "react-particles-js";
import Button from "../../../Components/Common/Button";
import "./index.scss";
import { ReactComponent as ArrowIcon } from './../../../assets/icon/arrow-theme.svg';

const WhoWeAreSection = () => {
  return (
    <div className="who-we-are-section">
      <Particles className="particle-style"
        params={{
          "particles": {
            "number": {
              "value": 100
            },
            "size": {
              "value": 3
            }
          },
          "interactivity": {
            "events": {
              "onhover": {
                "enable": true,
                "mode": "repulse"
              }
            }
          }
        }}
      />
      <div className="container">
        <div className="inner-section">
          <h2 className="heading">What is Lorem Ipsum?</h2>
          <p className="para">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
          </p>
          <p className="para">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
          </p>
          <Button className="white d-flex align-items-center ">Read More <ArrowIcon className="icon-btn ml-3" /></Button>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAreSection;
