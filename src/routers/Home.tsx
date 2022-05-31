import React from "react";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import Hero from "../components/Home/Hero";
import LogoSlider from "../components/LogoSlider";

const logoUrls: string[] = [
  "https://via.placeholder.com/300x200",
  "https://via.placeholder.com/300x200",
  "https://via.placeholder.com/300x200",
];
const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <LogoSlider logos={logoUrls} />
      <div style={{ height: 1500 }} />
      <Footer />
    </div>
  );
};

export default Home;
