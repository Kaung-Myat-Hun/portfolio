import React from "react";

function Footer() {
  return (
    <div className={`text-center bg-gray-900 text-white text-2xl p-2`}>
      <p>
        &copy; 2022 Copyright Reserved Design & Developed By{" "}
        <a className={`hover:text-blue-500`} href="https://github.com/Kaung-Myat-Hun">
          Bate Thar
        </a>
      </p>
    </div>
  );
}

export default Footer;
