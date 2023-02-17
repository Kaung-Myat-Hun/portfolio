import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Home from "../Home/Home";
import Error from "../Error/Error";
import About from "../About/About";
function View() {
  const location = useLocation();
  return (
    <Routes>
      <Route index exact path="/" element={<Home />} />
      <Route exact path="/about-me" element={<About />} />

      <Route path="/*" element={<Error />}></Route>
    </Routes>
  );
}

export default View;
