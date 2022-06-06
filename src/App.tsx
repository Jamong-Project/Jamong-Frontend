import React from "react";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Detail from "./routers/detail";
import Home from "./routers/home";
import Volunteer from "./routers/volunteer";
import "./App.css";
import Login from "./routers/login";
import NaverLogin from "./routers/naver-login";
import VolunteerPost from "./routers/volunteer-post";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/volunteer/" element={<Volunteer />} />
        <Route path="/volunteer/:id" element={<Detail />} />
        <Route path="/volunteer/create" element={<VolunteerPost />} />
        <Route path="/login/" element={<Login />} />
        <Route path="/naver-auth/" element={<NaverLogin />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
