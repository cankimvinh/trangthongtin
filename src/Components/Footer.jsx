import React from "react";
import Logo from "../Assets/logo_3.png";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <img src={Logo} alt="" />
        </div>
        <div className="footer-icons">
          <button className="logo-twitter"><BsTwitter /></button>
          <button className="logo-SiLinkedin"><SiLinkedin /></button>
          <button className="logo-youtube"><BsYoutube /></button>
          <button className="logo-facebook"> <FaFacebookF /></button>
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span>Hotline</span>
          <span>Email</span>
          <span>Hỗ trợ</span>
          <span>Website</span>
        </div>
        <div className="footer-section-columns">
          <span>244-5333-7783</span>
          <span>mangatoon@work.com</span>
          <span>mangatoon@work.com</span>
          <span>manga.toon</span>
        </div>
        <div className="footer-section-columns">
          <span>Terms & Conditions</span>
          <span>Copyright © 2024 manga.toon</span>
        </div>
      </div>
    </div>
  );
};

export default Footer; 