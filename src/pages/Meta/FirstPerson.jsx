import React from "react";
import Meta from "./Meta";
import firstpersonimage from "../../image/image00001.jpeg";

const FirstPerson = () => {
  return (
    <Meta
      name="Adam"
      info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur obcaecati error reiciendis cum porro"
      image={firstpersonimage}
    />
  );
};

export default FirstPerson;
