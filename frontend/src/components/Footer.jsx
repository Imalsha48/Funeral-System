import React from 'react';
import { Link } from 'react-router-dom'; // For navigation
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-links">
        <ul>
          <li><Link to="/about-us">About Us</Link></li>
          <li><Link to="/contact-us">Contact Us</Link></li>
          <li><Link to="/funeral-procedures">Funeral Procedures</Link></li>
        </ul>
      </div>
      <div className="footer-info">
        <p>&copy; 2025 Memorial Services Hub Services. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
