import React from "react";
import Hero from "./ScrollPages/Hero";
import About from "./ScrollPages/About";
import Contact from "./ScrollPages/Contact";
import Services from "./ScrollPages/Services";
import Features from "./ScrollPages/Features";

const LandingScreen = () => {
  return (
    <div>
      <Hero />
      <About />
      <Contact />
      <Services />
      <Features />
    </div>
  );
};

export default LandingScreen;
