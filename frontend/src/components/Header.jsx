import React from 'react';
import { Link } from 'react-router-dom'; // For navigation (React Router)
import './Header.css';

const Header = () => {
  return (
    <header className="header-container">
      <div className="logo">
        <h1>Memorial Services Hub</h1>
      </div>
      <nav className="nav-links">
        <ul>
        <li><Link to="/">Home</Link></li>  {/* ✅ Fixed Home Link */}
          <li><Link to="/packages">Packages</Link></li>
          
          <li><Link to="/about-us">AboutUs</Link></li>
          <li><Link to="/contact-us">ContactUs</Link></li>
          <li><Link to="/funeral-procedures">Funeral Procedures</Link></li>
          <li><Link to="/account">Account</Link></li>
          <li><Link to="/feedback">Feedback</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
