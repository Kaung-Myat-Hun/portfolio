import React, { useState } from "react";
import style from "./Navbar.module.css";
import { BrowserRouter as Router, NavLink, useLocation } from "react-router-dom";

function Navbar() {
  return (
    <Router>
      <div className={`${style.navbarContainer} flex justify-around items-center bg-slate-300`}>
        <a
          href="/"
          className={`${style.portfolioLogo} text-black text-3xl flex justify-center items-center`}>
          <div className={`p-1 ${style.p1}`}>P</div>
          <div className={`p-1 ${style.p2}`}>o</div>
          <div className={`p-1 ${style.p3}`}>r</div>
          <div className={`p-1 ${style.p4}`}>t</div>
          <div className={`p-1 ${style.p5}`}>f</div>
          <div className={`p-1 ${style.p6}`}>o</div>
          <div className={`p-1 ${style.p7}`}>l</div>
          <div className={`p-1 ${style.p8}`}>i</div>
          <div className={`p-1 ${style.p9}`}>o</div>
        </a>
        <ul className={` flex list-none justify-around items-center `}>
          <li>
            <NavLink
              className={`p-5 ${style.navLink} text-slate-500`}
              onClick={() => window.location.assign("/")}
              to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={`p-5 ${style.navLink} text-slate-500`}
              onClick={() => window.location.assign("/projects")}
              to="/projects">
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              className={`p-5 ${style.navLink} text-slate-500`}
              onClick={() => window.location.assign("/contact")}
              to="/contact">
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </Router>
  );
}

export default Navbar;
