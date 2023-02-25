import React from "react";

function Mobile(props) {
  // console.log(props);
  return (
    <div className={`bg-white text-center text-black`}>
      <h1 className={`text-4xl`}>
        You are using <span className={`text-blue-700`}>{props.name.name}</span> device.
      </h1>
      <p className={`text-2xl`}>Please Use computer (or) laptop to see my portfolio</p>
      <p className={`text-2xl`}>Thanks</p>
    </div>
  );
}

export default Mobile;
