import React from "react";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import Hero from "../components/Home/Hero";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <div style={{ height: 1500 }} />
      <Footer />
    </div>
  );
};

export default Home;
