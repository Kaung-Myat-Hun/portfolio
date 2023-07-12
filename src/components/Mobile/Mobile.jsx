import React from "react";
import style from "./Mobild.module.css";

function Mobile(props) {
  // console.log(props);
  return (
    <div
      className={`bg-white text-center ${style.mainContainer} display-flex justify-center items-center text-black`}>
      <h1 className={`text-4xl`}>
        You are using <span className={`text-blue-700`}>{props.name.name}</span> device. <br /> And width is <span className={`text-blue-700`}>{props.width}
      </span></h1>
      <p className={`text-2xl`}>Please Use computer (or) laptop to see my portfolio</p>
      <p className={`text-2xl`}>Thanks</p>
    </div>
  );
}

export default Mobile;
