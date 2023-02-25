import React from "react";

function Mobile({ name }) {
  return (
    <div className={`text-center text-black`}>
      <h1 className={`text-4xl`}>
        You are using <span className={`text-blue-700`}>{name}</span> device.
      </h1>
      <p className={`text-2xl`}>Please Use computer (or) laptop to see this</p>
      <p className={`text-2xl`}>Thanks</p>
    </div>
  );
}

export default Mobile;
