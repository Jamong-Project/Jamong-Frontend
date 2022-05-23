import React from "react";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Detail from "./routers/Detail";
import Home from "./routers/Home";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
