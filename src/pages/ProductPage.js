import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import product1Img from "../assets/product-img/PS-nano.png";
import product2Img from "../assets/product-img/PS-diffuser.png";
import product3Img from "../assets/product-img/Acrylic-light.png";
import product4Img from "../assets/product-img/PS-nano.png";

const ProductPage = () => {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState("");

  const products = [
    { id: "product1", name: t("productsPage.product1"), description: t("productsPage.product1_description"), image: product1Img },
    { id: "product2", name: t("productsPage.product2"), description: t("productsPage.product2_description"), image: product2Img },
    { id: "product3", name: t("productsPage.product3"), description: t("productsPage.product3_description"), image: product3Img },
    { id: "product4", name: t("productsPage.product4"), description: t("productsPage.product4_description"), image: product4Img },
  ];

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container my-5">
      <h2 className="text-center">{t("productsPage.title")}</h2>
      <p className="text-center text-muted">{t("productsPage.description")}</p>

      {/* Search Bar */}
      <div className="mb-4 d-flex justify-content-center">
        <input
          type="text"
          className="form-control w-50"
          placeholder={t("productsPage.searchPlaceholder")}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Product Grid */}
      <div className="row">
        {filteredProducts.map((product) => (
          <div key={product.id} className="col-md-6 mb-4">
            <div className="card">
              <img src={product.image} className="card-img-top" alt={product.name} />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <Link to={`/${product.id}`} className="btn btn-primary">{t("productsPage.learnMore")}</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;