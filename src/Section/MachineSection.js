// src/Section/MachinesSection.js
import React from "react";
import ProductCard from "../components/ProductCard";
import machine1 from "../assets/machines/machine1.png";
import machine2 from "../assets/machines/machine2.png";
import machine3 from "../assets/machines/machine3.png";

const machines = [
  { title: "Laser Cutter", description: "High precision cutting for our products.", image: machine1 },
  { title: "Injection Molder", description: "Ensuring high-quality plastic parts.", image: machine2 },
  { title: "Press Machine", description: "For accurate metal shaping.", image: machine3 }
];

const MachinesSection = () => {
  return (
    <section className="container my-5">
      <h2 className="text-center">Our Machines</h2>
      <div className="row">
        {machines.map((machine, index) => (
          <div className="col-md-4" key={index}>
            <ProductCard title={machine.title} description={machine.description} image={machine.image} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default MachinesSection;
