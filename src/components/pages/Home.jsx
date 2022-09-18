import React from "react";
import "../../App.css";
import Cards from "../Cards";
import Footer from "../Footer";
import HeroSection from "../HeroSection";
import Navbar from "../Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Cards />
      <Footer />
    </div>
  );
};

export default Home;
