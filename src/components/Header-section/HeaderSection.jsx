import React from "react";
import "./header-section.scss";
import logo from "../../image/logo-preloader.png";

const HeaderSection = () => {
  return (
    <div className="header-section" id="top">
      <div className="wrapper-section">
        <div className="info">
          <img src={logo} alt="" />
          <p>trener personalny</p>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default HeaderSection;
