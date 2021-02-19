import React from "react";
import Particles from "react-particles-js";
import "./index.scss";
import {ReactComponent as ArrowIcon} from './../../../assets/icon/arrow.svg';
import { Link } from "react-router-dom";
import Path from "../../../Constant/RouterConstant";


const PricingSection = () => {
  return (
    <div className="pricing-section">
      <div className="inner-wrapper container">
        <div className="row">
          <div className="col-md-7 d-flex justify-content-center flex-column">
            <div className="circle"></div>
            <div className="circle2"></div>
            <h2 className="heading">
              Tillie Lyons
            </h2>
            <p className="para">
              <span>Landon ScottHaulify </span>
              magnet look studying map lamp do pleasure soap theory entirely per snake balance lungs managed each palace harbor pitch indicate water own steep speed
              <br />
            </p>
          </div>
          <div className="col-md-5 d-flex align-items-center justify-content-end">
            <Link className="btn secondary d-flex align-items-center" to={Path.pricing}>Read More <ArrowIcon className="icon-btn ml-3" /></Link>
          </div>
        </div>
        <Particles className="particle-style" 
          params={{
            "particles": {
                "number": {
                    "value": 30
                },
                "size": {
                    "value": 10
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
      </div>
    </div>
  );
};

export default PricingSection;
