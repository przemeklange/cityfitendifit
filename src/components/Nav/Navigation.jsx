import React, {useState} from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import "./navigation.scss";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import logo from "../../image/logo-preloader.png";
import insta from "../../image/instagram.svg";

const Navigation = () => {
  const [openNav, setOpenNav] = useState(false);

  const opencloseNavigation = () => {
    setOpenNav(!openNav)
  }

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div className="nav">
      <div className="nav__wrapper">
        <div className="nav__logo-wrapper">
          <img src={logo} alt="" onClick={scrollToTop} />
        </div>
        <div className="nav__menu">
          <ul>
            <li>
              <Link
                activeClass="active"
                to="top"
                spy={true}
                smooth={true}
                duration={2000}
                offset={-100}
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
                offset={-100}
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
                offset={-100}
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
                offset={-100}
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
        <div className="menu-bobile-button" onClick={opencloseNavigation}><AiOutlineMenu/></div>
      </div>
      <div className="nav-menu__mobile" style={{display: `${openNav ? "flex" : "none"}`}}>
        <button onClick={opencloseNavigation} id="close"><AiOutlineClose/></button>
        {" "}
        <ul>
          <li>
            <Link
              activeClass="active"
              to="top"
              spy={true}
              smooth={true}
              duration={2000}
              offset={-50}
              onClick={opencloseNavigation}
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
              offset={-50}
              onClick={opencloseNavigation}
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
              offset={-50}
              onClick={opencloseNavigation}
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
              offset={-50}
              onClick={opencloseNavigation}
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
              onClick={opencloseNavigation}
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
    </div>
  );
};

export default Navigation;
