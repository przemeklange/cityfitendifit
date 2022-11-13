import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
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
              <Link
                activeClass="active"
                to="top"
                spy={true}
                smooth={true}
                offset={-70}
                duration={2000}
              >
                Główna
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="aboutme"
                spy={true}
                smooth={true}
                duration={2000}
              >
                O mnie
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="offers"
                spy={true}
                smooth={true}
                duration={2000}
              >
                Pakiety
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="gallery"
                spy={true}
                smooth={true}
                duration={2000}
              >
                Galeria
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                duration={2000}
              >
                Kontakt
              </Link>
            </li>
            <li>
              <a href="https://github.com">
                <img src={insta} alt="" />
              </a>
            </li>
          </ul>
        </div>
        <div className="nav__menu-mobile">
          <ul>
            <li>
              <Link to="/" end>
                Główna
              </Link>
            </li>
            <li>
              <Link to="/kontakt">Kontakt</Link>
            </li>
            <li>
              <a href="https://github.com">
                <img src={insta} alt="" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
