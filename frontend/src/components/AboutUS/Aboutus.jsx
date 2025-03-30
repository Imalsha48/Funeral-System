import React from 'react';
import './Aboutus.css'; // For styling the page

const AboutUs = () => {
  return (
    <div className="about-us-container">
      {/* Navigation Bar */}
      <nav className="home-nav">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Packages</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Contact Us</a></li>
          <li><a href="#">Login</a></li>
        </ul>
      </nav>

      <header className="about-us-header">
        <h1>About Us</h1>
      </header>
      <section className="about-us-content">
        <h2>Our Mission</h2>
        <p>
          Our mission is to provide the best services to our customers, ensuring quality, reliability, and customer satisfaction in everything we do.
        </p>
        <h2>Our Story</h2>
        <p>
          We started as a small team with a big vision. Over the years, we have grown into a trusted provider of innovative solutions for our clients.
        </p>
        <h2>Meet Our Team</h2>
        
        {/* Adding images */}
        <div className="about-us-images">
          <img src="image/image1.jpg" alt="Our Team" />
          
        </div>
      </section>
      <footer className="about-us-footer">
        <p>&copy; 2025 Our Company</p>
      </footer>
    </div>
  );
};

export default AboutUs;
