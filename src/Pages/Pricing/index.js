import React, { useEffect } from "react";
import Particles from "react-particles-js";
import Button from "../../Components/Common/Button";
import Input from "../../Components/Common/Input";
import './index.scss';
import Video from './../../assets/video/video.mp4';

const Pricing = () => {
  // useEffect(()=>{
  //   document.querySelector('#priceId').playbackRate = 2;
  // },[])
  return (
    <div className="pricing-page">
      <div className="page-head">
        <h1 className="heading">Pricing</h1>
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
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <video id="priceId" className="video-bg w-100" controls={false} autoPlay muted loop>
              <source
                src={Video}
                type="video/mp4"
              />
            </video>
          </div>
          <div className="col-md-7">
            <div className="form-container">
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group-custom">
                    <Input className="form-control" type="text" placeholder="First Name" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group-custom">
                    <Input className="form-control" type="text" placeholder="Last Name" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-8">
                  <div className="form-group-custom">
                    <select className="form-control input">
                      <option valve="one" selected="true" disabled>Type</option>
                      <option valve="One">One</option>
                      <option valve="Two">Two</option>
                      <option valve="Three">Three</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group-custom">
                    <Input className="form-control" type="date" placeholder="Date" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group-custom">
                    <Input className="form-control" type="phone" placeholder="Phone Number" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group-custom">
                    <Input className="form-control" type="email" placeholder="E-mail Address" />
                  </div>
                </div>
              </div>
              <div className="btn-wrapper text-center mb-5">
                <Button className="primary">Submit</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
