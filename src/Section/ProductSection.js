import React from "react";
import ProductCard from "../components/ProductCard";

import PSNanoImg from "../assets/product-img/PS-nano.png";
import PSDiffuserImg from "../assets/product-img/PS-diffuser.png";
import AcrylicLightImg from "../assets/product-img/Acrylic-light.png";

const products = [
  {
    image: PSNanoImg,
    title: "PS Nano Plate",
    description: "1. Ultra-thin Design: Meets various spatial and environmental requirements, suitable for different usage scenarios.\n" +
        "2. Soft and Uniform Light: Prevents glare and discomfort, reducing eye fatigue during prolonged use.\n" +
        "3. Energy-Efficient and Environmentally Friendly: Low light decay, long service life, and non-polluting."
  },
  {
    image: PSDiffuserImg,
    title: "PS Diffuser Plate",
    description: "Manufactured under strict quality control, the PS diffuser plate achieves a light transmittance of 35%-80% to meet diverse customer needs."
  },
  {
    image: AcrylicLightImg,
    title: "Acrylic Light Guide Plate",
    description: "Made from polymethyl methacrylate (PMMA) through extrusion, this material offers excellent weather and heat resistance, high transparency, and gloss. It also possesses stable physical, chemical, optical, and electrical properties."
  }
];

const ProductSection = () => {
  return (
    <section id="products" className="py-10 bg-light">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Our Products</h2>
        <div className="row">
          {products.map((product, index) => (
            <div key={index} className="col-md-4 mb-4">
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
