import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import logo from "../assets/logo.png";
import "../i18n/i18n";
import "bootstrap/dist/js/bootstrap.bundle.min";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setDropdownOpen(false); // Close dropdown after selection
  };

  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#f2f1f0" }}>
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img src={logo} alt="Company Logo" height="40" className="me-2" />
          <span className="fw-bold" style={{ color: "black" }}>Mingyou</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><Link className="nav-link" style={{ color: "black" }} to="/">{t("navbar.home")}</Link></li>
            <li className="nav-item"><Link className="nav-link" style={{ color: "black" }} to="/about">{t("navbar.about")}</Link></li>
            <li className="nav-item"><Link className="nav-link" style={{ color: "black" }} to="/products">{t("navbar.products")}</Link></li>
            <li className="nav-item"><Link className="nav-link" style={{ color: "black" }} to="/faq">{t("navbar.faq")}</Link></li>
            <li className="nav-item"><Link className="nav-link" style={{ color: "black" }} to="/contact">{t("navbar.contact")}</Link></li>
          </ul>

          {/* Language Selector (Dropdown) */}
          <div className="dropdown ms-3">
            <button
              className="btn btn-outline-dark dropdown-toggle"
              type="button"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              {t("navbar.language")}
            </button>
            <ul className={`dropdown-menu ${dropdownOpen ? "show" : ""}`} style={{ display: dropdownOpen ? "block" : "none" }}>
              <li><button className="dropdown-item" onClick={() => changeLanguage("en")}>English</button></li>
              <li><button className="dropdown-item" onClick={() => changeLanguage("zh")}>中文</button></li>
              <li><button className="dropdown-item" onClick={() => changeLanguage("es")}>Español</button></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
