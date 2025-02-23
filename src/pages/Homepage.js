import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";
import AboutSection from "../Section/AboutSection";
import ProductSection from "../Section/ProductSection";
import CertificateSection from "../Section/CertificateSection";
import ContactSection from "../Section/ContactSection";
import HeroSection from "../Section/HeroSection";

const HomePage = () => {
  return (
    <div>
      <HeroSection/>
      <AboutSection/>
      <ProductSection/>
      <CertificateSection/>
      <ContactSection/>
    </div>
  );
};

export default HomePage;
