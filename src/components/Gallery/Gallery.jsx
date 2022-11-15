import React from "react";
import "./gallery.scss";
import image1 from "../../image/image00001.jpg";
import image2 from "../../image/image00002.jpg";
import image3 from "../../image/image00003.jpg";
import image4 from "../../image/image00004.jpg";
import image5 from "../../image/image00005.jpg";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

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
          <div className="parent">
            <div className="div1">
            <Popup
                trigger={<img src={image1} alt="" />}
                modal
                nested
                position="right center"
              >
                {(close) => (
                  <div className="modal">
                    <button className="close" onClick={close}>
                      &times;
                    </button>
                    <div className="header"> Adam Kowalski </div>
                    <div className="content">
                      {" "}
                      <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Atque, a nostrum. Dolorem, repellat quidem ut, minima sint
                      vel eveniet quibusdam voluptates delectus doloremque,
                      explicabo tempore dicta adipisci fugit amet dignissimos?
                      </p>
                      <img src={image1} alt="" />

                    </div>
                  </div>
                )}
              </Popup>
            </div>
            <div className="div2">
              <Popup
                trigger={<img src={image2} alt="" />}
                modal
                nested
                position="right center"
              >
                {(close) => (
                  <div className="modal">
                    <button className="close" onClick={close}>
                      &times;
                    </button>
                    <div className="header"> Adam Kowalski </div>
                    <div className="content">
                      {" "}
                      <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Atque, a nostrum. Dolorem, repellat quidem ut, minima sint
                      vel eveniet quibusdam voluptates delectus doloremque,
                      explicabo tempore dicta adipisci fugit amet dignissimos?
                      </p>
                      <img src={image2} alt="" />

                    </div>
                  </div>
                )}
              </Popup>
            </div>
            <div className="div3">
            <Popup
                trigger={<img src={image3} alt="" />}
                modal
                nested
                position="right center"
              >
                {(close) => (
                  <div className="modal">
                    <button className="close" onClick={close}>
                      &times;
                    </button>
                    <div className="header"> Adam Kowalski </div>
                    <div className="content">
                      {" "}
                      <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Atque, a nostrum. Dolorem, repellat quidem ut, minima sint
                      vel eveniet quibusdam voluptates delectus doloremque,
                      explicabo tempore dicta adipisci fugit amet dignissimos?
                      </p>
                      <img src={image3} alt="" />

                    </div>
                  </div>
                )}
              </Popup>
            </div>
            <div className="div4">
            <Popup
                trigger={<img src={image4} alt="" />}
                modal
                nested
                position="right center"
              >
                {(close) => (
                  <div className="modal">
                    <button className="close" onClick={close}>
                      &times;
                    </button>
                    <div className="header"> Adam Kowalski </div>
                    <div className="content">
                      {" "}
                      <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Atque, a nostrum. Dolorem, repellat quidem ut, minima sint
                      vel eveniet quibusdam voluptates delectus doloremque,
                      explicabo tempore dicta adipisci fugit amet dignissimos?
                      </p>
                      <img src={image4} alt="" />

                    </div>
                  </div>
                )}
              </Popup>
            </div>
            <div className="div5">
            <Popup
                trigger={<img src={image5} alt="" />}
                modal
                nested
                position="right center"
              >
                {(close) => (
                  <div className="modal">
                    <button className="close" onClick={close}>
                      &times;
                    </button>
                    <div className="header"> Adam Kowalski </div>
                    <div className="content">
                      {" "}
                      <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Atque, a nostrum. Dolorem, repellat quidem ut, minima sint
                      vel eveniet quibusdam voluptates delectus doloremque,
                      explicabo tempore dicta adipisci fugit amet dignissimos?
                      </p>
                      <img src={image5} alt="" />

                    </div>
                  </div>
                )}
              </Popup>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
