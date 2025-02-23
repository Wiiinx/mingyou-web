import React from "react";
import { useTranslation } from "react-i18next";

const FactoryDescription = () => {
  const { t } = useTranslation();

  return (
    <section className="container my-5">
      <h2 className="text-center">
        {t("factoryDescription.title")}{" "}
        <span style={{ fontStyle: "italic", color: "#d7292b" }}>{t("factoryDescription.since")}</span>
      </h2>
      <p className="text-center text-muted">{t("factoryDescription.paragraph1")}</p>
      <p>{t("factoryDescription.paragraph2")}</p>
    </section>
  );
};

export default FactoryDescription;