import React from "react";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Home from "./routers/home";
import Volunteer from "./routers/volunteer/[id]";
import Volunteers from "./routers/volunteer";
import VolunteerPost from "./routers/volunteer/create";
import Login from "./routers/login";
import useLoginStore from "./stores/login-store";
import NaverAuth from "./routers/login/naver-auth";
import "./App.css";
import useLoginCheck from "./hooks/use-login-check";

const App = () => {
  const { isLoggedIn, setIsLoggedIn, setUser } = useLoginStore();

  const loggedInCallback = () => {
    setUser({
      name: "Hello",
      profileImage: "World",
      role: "No",
      email: "email@email.com",
    });
  };

  const loggedOutCallback = () => {
    const accessToken = localStorage.getItem("com.naver.nid.access_token");

    if (!accessToken) return;

    setIsLoggedIn(true);
  };

  useLoginCheck(isLoggedIn, {
    loggedInCallback,
    loggedOutCallback,
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/volunteer/" element={<Volunteers />} />
        <Route path="/volunteer/:id" element={<Volunteer />} />
        <Route path="/volunteer/create" element={<VolunteerPost />} />
        <Route path="/login/" element={<Login />} />
        <Route path="/login/naver-auth/" element={<NaverAuth />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
