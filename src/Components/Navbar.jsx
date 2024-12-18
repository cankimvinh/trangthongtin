import React from "react";
import Logo from "../Assets/logo_3.png";

const Navbar = () => {
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav>
      <div className="nav-logo-container">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="navbar-links-container">
        <button onClick={() => handleScroll("home")}>Trang chủ</button>
        <button onClick={() => handleScroll("about")}>Giới thiệu</button>
        <button onClick={() => handleScroll("contact")}>Liên hệ</button>
        <button className="primary-button">Khám phá ngay</button>
      </div>
    </nav>
  );
};

export default Navbar; 
