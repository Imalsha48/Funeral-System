import React from "react";
import "./ContactUs.css";  // Make sure your CSS file is located here
import "../components/Header.css";  // Corrected import path
import "../components/Footer.css";  // Corrected import path
import officeImg from "../assets/office.jpg";
import supportImg from "../assets/support.jpg";
import socialImg from "../assets/social.jpg";

const ContactUs = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>
        Have questions or need assistance? Get in touch with us. We are here to help you with all your needs.
      </p>

      <div className="contact-section">
        <h2>Our Contact Details</h2>
        <div className="contact-details">
          <div className="contact-item">
            <img src={officeImg} alt="Head Office" />
            <h3>Head Office</h3>
            <p>Memorial Services Hub</p>
            <p>123 Serenity Street, Colombo, Sri Lanka</p>
            <p>Email: info@memorialhub.com</p>
            <p>Phone: +94 112 345 678</p>
          </div>
          <div className="contact-item">
            <img src={supportImg} alt="Customer Support" />
            <h3>Customer Support</h3>
            <p>For inquiries and assistance, contact our support team.</p>
            <p>Email: support@memorialhub.com</p>
            <p>Phone: +94 112 987 654</p>
            <p>Available 24/7</p>
          </div>
          <div className="contact-item">
            <img src={socialImg} alt="Follow Us" />
            <h3>Follow Us</h3>
            <p>Stay connected through our social media channels.</p>
            <p>Facebook: facebook.com/memorialhub</p>
            <p>Twitter: twitter.com/memorialhub</p>
            <p>Instagram: instagram.com/memorialhub</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
