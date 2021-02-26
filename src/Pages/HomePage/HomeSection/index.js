import React, { useEffect, useState } from "react";
import Button from "../../../Components/Common/Button";
import { ReactComponent as ScrollToSection } from "./../../../assets/icon/down_arrow.svg";
import "./index.scss";
import PopupWrapper from "../../../Components/Common/PopupWrapper/PopupWrapper";
import Input from "../../../Components/Common/Input";

const HomeSection = () => {
  const [popup, setPopup] = useState(false);
  const [popupType, setPopupType] = useState(false);

  // popup registration
  const showFindTruckPopup = (popupType) => {
    setPopupType(popupType);
    setPopup(!popup);
  }

  // switch registration
  const switchPopup = (popupType) => {
    setPopupType(popupType);
  }

  // useEffect(() => {
  //   document.querySelector('#tech').playbackRate = 2;
  // }, [])
  return (
    <div className="home-section">
      <div className="home-content">
        <h2 className="heading">Lorem Ipsum is simply dummy text.</h2>
        <p className="para">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        <div className="btn-wrapper">
          <Button className="btn primary" onClick={() => showFindTruckPopup(true)}>Find Users</Button>
          <Button className="btn secondary" onClick={() => showFindTruckPopup(false)}>Find Partener</Button>
        </div>
      </div>
      <div className="banner-footer">
        <ScrollToSection className="scroll-to-section" />
      </div>
      <PopupWrapper
        popupWrapperClass={`registration ${popupType ? "trucks" : "loads"}`}
        show={popup}
        onClick={showFindTruckPopup}
      >
        <h2 className={`registration-heading ${popupType?"primary-text ":"secondary-text"}`}>{popupType?"User":"Partener"}</h2>
        <div className="d-flex justify-content-center">
          <div className={`switch-to-other ${popupType?"left primary-bg":"right secondary-bg"}`}>
            <Button className={popupType ? 'primary ' : "no-class"} onClick={() => switchPopup(true)}>Find User</Button>
            <Button className={!popupType ? 'primary ' : "no-class"} onClick={() => switchPopup(false)}>Find Partner</Button>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group-custom">
              <select className="form-control input">
                <option valve="" selected="true" disabled="disabled">Type</option>
                <option valve={popupType?"User":"Owner"}>{popupType?"User":"Owner"}</option>
                <option valve="Broker">Broker</option>
                <option valve="Agent">Agent</option>
              </select>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group-custom">
              <Input className="form-control" type="text" placeholder="Company Name" />
            </div>
          </div>
          <div className="col-md-12">
            <div className="form-group-custom">
              <Input className="form-control" type="text" placeholder="Contact Person" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group-custom">
              <Input className="form-control" type="email" placeholder="E-mail Address" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group-custom">
              <Input className="form-control" type="text" placeholder="Phone Number" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group-custom">
              <Input className="form-control" type="password" placeholder="E-mail Address" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group-custom">
              <Input className="form-control" type="password" placeholder="Phone Number" />
            </div>
          </div>

          <div className="col-md-12 text-center">
            <Button className={`${popupType?'primary':"secondary"} popup-btn`}>Register</Button>
          </div>
        </div>
      </PopupWrapper>
    </div>
  );
};

export default HomeSection;
