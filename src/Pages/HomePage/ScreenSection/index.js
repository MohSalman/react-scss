import React from "react";
import Screens from "./../../../assets/screenSection/screen.png";
import "./index.scss";

const ScreenSection = () => {
  return (
    <div className="screen-section">
      <h2 className="heading">
        Where does it come <span>from?.</span>
      </h2>
      <div className="screens">
        <img src={Screens} alt="tab-mobile" />
      </div>
    </div>
  );
};

export default ScreenSection;
