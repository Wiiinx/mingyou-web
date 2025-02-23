import React from "react";
import certificate from "../assets/sample-certificate.png";

const CertificateSection = () => {
  return (
    <section id="certificates" className="py-10 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4 text-center">Certificates & Awards</h2>
        <div className="d-flex overflow-auto py-3" style={{ gap: "20px" }}>
          {[certificate, certificate, certificate,certificate,certificate, certificate].map((src, index) => (
            <div key={index} className="flex-shrink-0" style={{ width: "180px" }}>
              <img src={src} alt={`Certificate ${index + 1}`} className="img-fluid rounded shadow" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificateSection;