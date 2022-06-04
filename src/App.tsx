import React from "react";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Detail from "./routers/detail";
import Home from "./routers/home";
import Volunteer from "./routers/volunteer";
import "./App.css";
import Login from "./routers/login";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/" element={<Detail />} />
        <Route path="/list/" element={<Volunteer />} />
        <Route path="/login/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
