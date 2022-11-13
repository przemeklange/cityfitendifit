import React from "react";
import "./aboutme.scss";
import "react-slideshow-image/dist/styles.css";

const AboutMe = (props) => {
  return (
    <div className="header-section-about" id="aboutme">
      <div className="wrapper-section">
        <hr />
        <div className="text-info">
          <h2>{props.h2}</h2>
          <p>{props.about}</p>
          <p>{props.orange}</p>
          <div className="text-infor-wrapper">
            <div className="section">
              <p>{props.years}</p>
              <p>{props.yearstext}</p>
            </div>
            <div className="section">
              <p> {props.cetyficated}</p>
              <p>{props.cetyficatedtrainer}</p>
            </div>
            <div className="section">
              <p>{props.percent}</p>
              <p>{props.percenttext}</p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="slider-about">
        <Slide slidesToScroll={1} slidesToShow={1} autoplay={false}>
          {slideImages.map((slideImage, index) => (
            <div className="each-slide" key={index}>
              <div className="sliderStyle">
                <img src={slideImage.img} alt="" />
              </div>
            </div>
          ))}
        </Slide>
      </div> */}
    </div>
  );
};

export default AboutMe;
