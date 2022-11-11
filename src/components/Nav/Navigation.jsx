import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./navigation.scss";
import logo from "../../image/logo-preloader.png";
import insta from "../../image/instagram.svg";

const Navigation = () => {
  return (
    <div className="nav">
      <div className="nav__wrapper">
        <div className="nav__logo-wrapper">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="nav__menu">
          <ul>
            <li>
              <NavLink to="/" end>
                Główna
              </NavLink>
            </li>
            <li>
              <NavLink to="/kontakt">Kontakt</NavLink>
            </li>
            <li><a href="https://github.com"><img src={insta} alt="" /></a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
