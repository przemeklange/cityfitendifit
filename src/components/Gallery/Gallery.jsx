import React from "react";
import "./gallery.scss";
import { Link } from "react-router-dom";
import image1 from "../../image/image00001.jpeg";
import image2 from "../../image/image00002.jpeg";
import image3 from "../../image/image00003.jpeg";
import image4 from "../../image/image00004.jpeg";
import image5 from "../../image/image00005.jpeg";

const Gallery = () => {
  return (
    <div id="gallery" className="header-section-gallery">
      <div className="wrapper-section">
        <div className="f1">
          <h1>Metamorfozy</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            obcaecati error reiciendis cum porro beatae nemo quibusdam eligendi
            sequi velit modi et repellendus veniam quisquam iste, facere
            mollitia pariatur delectus.
          </p>
        </div>
        <div className="f2">
          <div class="parent">
            <div class="div1"> <Link to="adamkowalski"><img src={image1} alt="" /></Link></div>
            <div class="div2"> <Link to="adamkowalski"><img src={image2} alt="" /></Link></div>
            <div class="div3"> <img src={image3} alt="" /></div>
            <div class="div4"> <img src={image4} alt="" /></div>
            <div class="div5"> <img src={image5} alt="" /></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
