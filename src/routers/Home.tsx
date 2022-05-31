import React from "react";
import Footer from "../components/common/footer";
import Header from "../components/common/header";
import Hero from "../components/home/hero";
import LogoSlider from "../components/logo-slider";

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
