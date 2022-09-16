import React from "react";
import "../../App.css";
import Cards from "../Cards";
import HeroSection from "../HeroSection";
import Navbar from "../Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Cards />
    </div>
  );
};

export default Home;
