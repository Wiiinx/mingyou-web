import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <header className="hero-section d-flex align-items-center text-white" style={{
      backgroundImage: "url('/factory-background.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "100vh",
      position: "relative"
    }}>
      <div className="container text-center">
        <h1 className="display-3 fw-bold">Welcome to Our Industry</h1>
        <p className="lead">High-quality PS nano plates and diffuser plates for industrial applications</p>
        <Link to="/products" className="btn btn-primary btn-lg mt-3">Explore Products</Link>
      </div>
    </header>
  );
};

export default HeroSection;
