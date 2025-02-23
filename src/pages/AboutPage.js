import React from "react";
import { useTranslation } from "react-i18next";
import "../index.css";
import FactoryDescription from "../Section/FactoryDescription";
import FactoryImages from "../Section/FactoryImages";
import MachinesSection from "../Section/MachineSection";
import CertificateSection from "../Section/CertificateSection";
import ContactSection from "../Section/ContactSection";

const AboutPage = () => {
  const { t } = useTranslation();

  return (
    <div>
      <FactoryDescription />
      <FactoryImages />
      <MachinesSection />
      <CertificateSection />
      <ContactSection />
    </div>
  );
};

export default AboutPage;
