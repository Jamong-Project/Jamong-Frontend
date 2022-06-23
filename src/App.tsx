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
import Client from "./utils/client";
import { ACCESS_TOKEN_STORAGE_KEY } from "./constants/string";

const App = () => {
  const { isLoggedIn, setIsLoggedIn, setUser, setIsLoading, isLoading } =
    useLoginStore();

  const loggedInCallback = () => {
    Client.post("/login", {
      token: localStorage.getItem(ACCESS_TOKEN_STORAGE_KEY),
    })
      .then((r) => setUser(r.data))
      .catch(() => {
        alert("로그인 만료");
        setIsLoggedIn(false);
        setUser(undefined);
        localStorage.removeItem(ACCESS_TOKEN_STORAGE_KEY);
      })
      .then(() => {
        if (isLoading) setIsLoading(false);
      });
  };

  const loggedOutCallback = () => {
    const accessToken = localStorage.getItem(ACCESS_TOKEN_STORAGE_KEY);

    if (!accessToken || accessToken === "none") return;

    setIsLoggedIn(true);

    if (isLoading) setIsLoading(false);
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
