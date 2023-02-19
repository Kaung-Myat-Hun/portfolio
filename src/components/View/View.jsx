import React, { Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Home from "../Home/Home";
import Error from "../Error/Error";
import About from "../About/About";
import Project from "../Projects/Project";
import AllProject from "../Projects/AllProjects/AllProjects";
import Loading from "../CustomLoading/CustomLoading";

function View() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route index exact path="/" element={<Home />} />
        <Route exact path="/about-me" element={<About />} />
        <Route exact path="/projects" element={<Project />}></Route>
        <Route exact path="/projects/all-projects" element={<AllProject />}></Route>
        <Route exact path="/loading" element={<Loading />}></Route>

        <Route path="/*" element={<Error />}></Route>
      </Routes>
    </Suspense>
  );
}

export default View;
