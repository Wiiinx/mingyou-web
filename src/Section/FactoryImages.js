// src/Section/FactoryImages.js
import React from "react";
import factoryImage from "../assets/factory-image.jpg";

const FactoryImages = () => {
  return (
    <section className="container my-5">
      <h2 className="text-center">Our Factory</h2>
      <img src={factoryImage} alt="Factory" className="img-fluid rounded shadow" />
    </section>
  );
};

export default FactoryImages;