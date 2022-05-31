import React from "react";
import Footer from "../components/common/footer";
import Header from "../components/common/header";
import Hero from "../components/home/hero";
import UnivLogoSlide from "../components/home/univ-logo-slide";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <UnivLogoSlide />
      <div style={{ height: 1500 }} />
      <Footer />
    </div>
  );
};

export default Home;
