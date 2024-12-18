import React from "react";

const Contact = () => {
  return (
    <section id="contact">
    <div className="contact-page-wrapper">
    <p className="primary-subheading">Contact</p>
      <h1 className="primary-heading">Liên hệ với chúng tôi</h1>
      <div className="contact-form-container">
        <input type="text" placeholder="full name" />
      </div>
      <div className="contact-form-container">
        <input type="email" placeholder="email" />
      </div>
      <div className="contact-form-container">
        <input type="messenge" placeholder="messenge" />
      </div>
      <button className="secondary-button">Send messenge</button>
    </div>
    </section>
  );
};

export default Contact; 