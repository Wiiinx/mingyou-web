import React from "react";
import { useTranslation } from "react-i18next";
import PS_Nano from "../assets/product-img/PS-nano.png";

const Product1 = () => {
  const { t } = useTranslation();

  return (
    <div className="container my-5">
      <h2>{t("productsPage.product1")}</h2>
      <img src={PS_Nano} alt={t("productsPage.product1")} className="img-fluid rounded shadow mb-3" />
      <p>{t("productsPage.product1_description")}</p>
    </div>
  );
};

export default Product1;