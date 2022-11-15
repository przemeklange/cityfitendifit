import React from "react";
import "./slider.scss";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const Slider = () => {
  const slideImages = [
    {
      caption: "Pakiet5",
      paragraph:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      price: "500",
    },
    {
      caption: "Pakiet10",
      paragraph:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      price: "1000",
    },
    {
      caption: "Pakiet15",
      paragraph:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      price: "1500",
    },
    {
      caption: "Pakiet20",
      paragraph:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      price: "2000",
    },
  ];

  return (
    <div className="header-section-slider" id="offers">
      <div className="slide-container">
        <div className="f1">x</div>
        <div className="f2">
          <Slide
            slidesToScroll={1}
            slidesToShow={1}
            autoplay={false}
            responsive={[
              {
                breakpoint: 800,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                },
              },
              {
                breakpoint: 700,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                },
              },
            ]}
            indicators={true}
          >
            {slideImages.map((slideImage, index) => (
              <div className="each-slide" key={index}>
                <div className="sliderStyle">
                  <h3>{slideImage.caption}</h3>
                  <p>{slideImage.paragraph}</p>
                  <p className="price">Cena: {slideImage.price} PLN</p>
                </div>
              </div>
            ))}
          </Slide>
        </div>
      </div>
    </div>
  );
};

export default Slider;
