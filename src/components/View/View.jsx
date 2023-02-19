import React, { Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Home from "../Home/Home";
import Error from "../Error/Error";
import About from "../About/About";
import Project from "../Projects/Project";
import AllProject from "../Projects/AllProjects/AllProjects";
import Loading from "../CustomLoading/CustomLoading";
import Contact from "../Contact/Contact";
import ChatMessenger from "../Projects/ChatMessenger";
import AdminDashboard from "../Projects/AdminDashboard";
import Onbety from "../Projects/Onbety";

function View() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route index exact path="/" element={<Home />} />
        <Route exact path="/about-me" element={<About />} />
        <Route exact path="/projects" element={<Project />}></Route>
        <Route exact path="/projects/all-projects" element={<AllProject />}></Route>
        <Route exact path="/project/chat-messenger" element={<ChatMessenger />}></Route>
        <Route exact path="/project/admin-dashboard" element={<AdminDashboard />}></Route>
        <Route exact path="/project/onbety" element={<Onbety />}></Route>
        <Route exact path="/loading" element={<Loading />}></Route>
        <Route exact path="/contact" element={<Contact />}></Route>

        <Route path="/*" element={<Error />}></Route>
      </Routes>
    </Suspense>
  );
}

export default View;
