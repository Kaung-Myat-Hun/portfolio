import React, { useState } from "react";
import style from "./Navbar.module.css";
import { BrowserRouter as Router, NavLink, useLocation } from "react-router-dom";
import Drawer from "./Drawer";

function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
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
        <ul
          className={`${style.navGroup} max-[400px]:hidden flex list-none justify-around items-center `}>
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
        <button
          className="bg-slate-600 min-[400px]:hidden text-white rounded px-4 py-3"
          onClick={() => setIsOpen(true)}>
          <svg
            width="14px"
            height="14px"
            fill="#fff"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512">
            <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
          </svg>
        </button>
        <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
          <ul className={`${style.navGroupM}list-none text-center`}>
            <li>
              <NavLink
                className={` ${style.navLinkM} text-slate-500`}
                onClick={() => window.location.assign("/")}
                to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={` ${style.navLinkM} text-slate-500`}
                onClick={() => window.location.assign("/projects")}
                to="/projects">
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                className={` ${style.navLinkM} text-slate-500`}
                onClick={() => window.location.assign("/contact")}
                to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>
        </Drawer>
      </div>
    </Router>
  );
}

export default Navbar;
