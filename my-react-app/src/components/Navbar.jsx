import React, { useContext } from "react";
import { LanguageContext } from "../containers/StudentContainer";

const Navbar = () => {
  const { language, toggleLanguage } = useContext(LanguageContext);

  return (
    <nav className="navbar bg-dark border-bottom shadow-sm">
      <div className="container">
        <h1 className="navbar-brand text-white m-0">
          <i className="bi bi-person-fill-gear"></i>{" "}
          {language === "id"
            ? "Sistem Manajemen Siswa"
            : "Student Management System"}
        </h1>
        <button
          className="btn btn-outline-light ms-auto"
          onClick={toggleLanguage}
        >
          {language === "id"
            ? "Ganti ke Bahasa Inggris"
            : "Switch to Bahasa Indonesia"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
