import React from "react";
import "./meta.scss";
import { HashLink as Link } from 'react-router-hash-link';

const Meta = (props) => {
  return (
    <div className="header-section-gallery-index">
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
            <div className="info-text">
                <h1>{props.name}</h1>
                <p>{props.info}</p>
                <Link to='/#gallery'>Powrót do strony głównej</Link>
            </div>
            <div className="info-image">
                <img src={props.image} alt="" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Meta;
