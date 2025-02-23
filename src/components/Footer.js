import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear(); // Get current year

  return (
    <footer style={{ backgroundColor: "#87181a", color: "white" }} className="py-5">
      <div className="container">
        <div className="row">

          {/* Contact Information */}
          <div className="col-md-4">
            <h5>{t("footer.contact")}</h5>
            <p><strong>{t("footer.phone")}:</strong> {t("contactPage.phone")}</p>
            <p><strong>{t("footer.email")}:</strong> {t("contactPage.email")}</p>
            <p><strong>{t("footer.address")}:</strong> {t("contactPage.address")}</p>
          </div>

          {/* Quick Links */}
          <div className="col-md-2">
            <h5>{t("footer.quickLinks")}</h5>
            <ul className="list-unstyled">
              <li><Link className="text-white text-decoration-none" to="/products">{t("navbar.products")}</Link></li>
              <li><Link className="text-white text-decoration-none" to="/faq">{t("navbar.faq")}</Link></li>
              <li><Link className="text-white text-decoration-none" to="/contact">{t("navbar.contact")}</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div className="col-md-3">
            <h5>{t("footer.products")}</h5>
            <ul className="list-unstyled">
              <li><Link className="text-white text-decoration-none" to="/product1">{t("productsPage.product1")}</Link></li>
              <li><Link className="text-white text-decoration-none" to="/product2">{t("productsPage.product2")}</Link></li>
              <li><Link className="text-white text-decoration-none" to="/product3">{t("productsPage.product3")}</Link></li>
              <li><Link className="text-white text-decoration-none" to="/product4">{t("productsPage.product4")}</Link></li>
            </ul>
          </div>

          {/* Newsletter or Additional Info */}
          <div className="col-md-3">
            <h5>{t("footer.subscribe")}</h5>
            <p>{t("footer.subscribeText")}</p>
            <form>
              <div className="input-group">
                <input type="email" className="form-control" placeholder={t("footer.emailPlaceholder")} />
                <button className="btn btn-light" type="submit">→</button>
              </div>
            </form>
          </div>

        </div>

        <hr className="mt-4 border-white" />

        {/* Footer Bottom */}
        <div className="text-center">
          <p className="mb-0">© {currentYear} {t("footer.companyName")} {t("footer.rights")}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
