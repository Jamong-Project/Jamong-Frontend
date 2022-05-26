import React from "react";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Detail from "./routers/Detail";
import Home from "./routers/Home";
import Volunteer from "./routers/Volunteer";
import "./App.css";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/" element={<Detail />} />
        <Route path="/list/" element={<Volunteer />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
