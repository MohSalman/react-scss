import React, { useEffect, useState } from "react";
import { Link, NavLink, useHistory, useLocation } from "react-router-dom";
import Path from "../../Constant/RouterConstant";
import { ReactComponent as HamBurger } from "./../../assets/icon/hamburger.svg";
import { ReactComponent as LogoHeader } from "./../../assets/logo/nagoya-metro-logo.svg";
import { ReactComponent as LogoHeaderColor } from "./../../assets/logo/nagoya-metro-logo.svg";
import "./index.scss";

const Header = () => {
  const [headerScroll, setHeaderSaroll] = useState(false);

  const history = useHistory();
  const pathname = history.location.pathname;
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setHeaderSaroll(window.scrollY > 50);
    });
  }, []);

  const location = useLocation();
  useEffect(() => {}, [location.pathname]);

  let isHomePage = /^\/$/.test(pathname) || pathname === "";

  return (
    <header className={`header ${(headerScroll && isHomePage) || !isHomePage ? "bg-white" : ""}`}>
      <div className="container">
        <div className="inner-wrapper">
          {
            (headerScroll && isHomePage) || !isHomePage ? <LogoHeaderColor className="logo" /> : <LogoHeader className="logo" />
          }
          
          <HamBurger className="hamburger d-md-none d-block"></HamBurger>
          <ul className="list-unstyled menu-items">
            <li className="menu-item">
              <NavLink className="item" to={Path.about}>
                About
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink className="item" to={Path.pricing}>
                Pricing
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink className="item" to={Path.career}>
                Career
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink className="item" to={Path.contact}>
                Contact Us
              </NavLink>
            </li>
            <li className="menu-item">
              <Link className="item btn button-auth py-3" to={Path.Login}>
                Log In
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
