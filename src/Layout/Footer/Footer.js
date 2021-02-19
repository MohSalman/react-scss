import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "./../../assets/logo/nagoya-metro-logo.svg";
import { ReactComponent as TwitterIcon } from "./../../assets/footer/twitter.svg";
import { ReactComponent as FacebookIon } from "./../../assets/footer/facebook.svg";
import { ReactComponent as LinkedInIcon } from "./../../assets/footer/linkedin.svg";
import { ReactComponent as YoutubeIcon } from "./../../assets/footer/youtube.svg";
import './index.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <Logo className="logo-footer"/>
            <p className="para">
              Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit
            </p>
          </div>
          <div className="col-md-7">
            <div className="row">
              <div className="col-md-4">
                <h3 className="heading">Social Media</h3>
                <TwitterIcon className="social-icon mr-2" />
                {/* <InstaGramIcon className="social-icon"/> */}
                <FacebookIon className="social-icon mr-2" />
                <LinkedInIcon className="social-icon mr-2" />
                <YoutubeIcon className="social-icon mr-2" />
              </div>
              <div className="col-md-4">
                <h3 className="heading">Social Media</h3>
                <ul className="list-unstyled">
                  <li>
                    <Link to="">About Us</Link>
                  </li>
                  <li>
                    <Link to="">Pricing</Link>
                  </li>
                  <li>
                    <Link to="">Careers</Link>
                  </li>
                  <li>
                    <Link to="">Contact Us</Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-4">
                <h3 className="heading">Company</h3>
                <ul className="list-unstyled">
                  <li>
                    <Link to="">Disclaimer</Link>
                    <ul>
                      <li>sadhgsafhd</li>
                    </ul>
                  </li>
                  <li>
                    <Link to="">Quality Policy</Link>
                  </li>
                  <li>
                    <Link to="">HSE Policy</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
