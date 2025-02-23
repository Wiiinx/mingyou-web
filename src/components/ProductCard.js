import React from "react";

const ProductCard = ({ image, title, description }) => {
  return (
    <div className="card shadow-sm rounded-lg overflow-hidden">
      <img src={image} className="card-img-top" alt={title} />
      <div className="card-body text-center">
        <h5 className="card-title font-bold">{title}</h5>
        <p className="card-text text-gray-600">{description}</p>
        <a href="#" className="btn btn-primary">Read More</a>
      </div>
    </div>
  );
};

export default ProductCard;