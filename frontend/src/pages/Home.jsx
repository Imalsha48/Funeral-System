import React from "react";
import "./Home.css"; // Import CSS
import "./Packages.css";
import "./PackageDetails.css";
import "../components/Header.css";  // Corrected import path
import "../components/Footer.css";  // Corrected import path





// Import Images
import mainImage1 from "../assets/main-image112.jpg";
import mainImage2 from "../assets/main-image2.jpg";
import service1 from "../assets/service1.jpg";
import service2 from "../assets/service2.jpg";
import service3 from "../assets/service3.jpg";
import service4 from "../assets/service4.jpg";
import service5 from "../assets/service5.jpg";


// Import package data
const packages = [
  {
    name: "Graceful Goodbye Package",
    image: "/src/assets/basic-package12.jpg",
    price: "$1,500",
  },
  {
    name: "Classic Memorial Package",
    image: "/src/assets/standard-package.jpg",
    price: "$3,000",
  },
  {
    name: "Grand Legacy Package",
    image: "/src/assets/premium-package.jpg",
    price: "$5,500",
  },
];

const Home = ({ onServiceClick = () => {} }) => {
  return (
    <div className="home-container">
      {/* Funeral Management Heading */}
      <header className="funeral-management-header">
        <h1>Memorial Services Hub</h1>
      </header>

      {/* Main Image Section */}
      <section className="main-image">
        <img src={mainImage1} alt="Funeral Services" />
      </section>
      <section id="packages-section" className="packages-section">
<h2>We Support You in Honoring Your Loved Ones</h2>
<p>At Memorial Services Hub, we are committed to providing compassionate and professional funeral arrangements, ensuring dignity and care in every service we offer. More than just a funeral management service, we stand as a trusted companion during your time of need.

Our support doesn’t end with the final farewell. We continue to assist you throughout, offering guidance, comfort, and unwavering support—because honoring a life is more than just a service; it’s a heartfelt commitment.</p>
</section>

      {/* Funeral Packages Section - FIXED */}
      {/* Funeral Packages Section */}
<section id="packages-section" className="packages-section">
  <h2>Our Funeral Packages</h2>
  <div className="packages-container">
    {packages.map((pkg, index) => (
      <div key={index} className="package-card">
        <img src={pkg.image} alt={pkg.name} className="package-image" />
        <h3 className="package-title">{pkg.name}</h3>
        <p className="package-price">{pkg.price}</p>
      </div>
    ))}
  </div>
</section>



      {/* Main Image Before Services Section */}
      <section className="main-image">
        <img src={mainImage2} alt="Our Services" />
      </section>

      {/* Services Section */}
      <section id="services-section" className="services-section">
        <h2>Our Services</h2>
        <div className="services">
          <div className="service-card" onClick={() => onServiceClick("burial")}>
            <img src={service1} alt="Burial Service" className="service-image" />
            <h3>Burial Services</h3>
            <p>We offer complete burial services with care and dignity.</p>
          </div>
          <div className="service-card" onClick={() => onServiceClick("cremation")}>
            <img src={service2} alt="Cremation Service" className="service-image" />
            <h3>Cremation Services</h3>
            <p>Affordable and respectful cremation services.</p>
          </div>
          <div className="service-card" onClick={() => onServiceClick("memorial")}>
            <img src={service3} alt="Memorial Service" className="service-image" />
            <h3>Memorial Services</h3>
            <p>Personalized memorial services to honor your loved ones.</p>
          </div>
          <div className="service-card" onClick={() => onServiceClick("prePlanning")}>
            <img src={service4} alt="Pre-Planning Service" className="service-image" />
            <h3>Pre-Planning Services</h3>
            <p>Plan ahead to ease the burden on your family.</p>
          </div>
          <div className="service-card" onClick={() => onServiceClick("griefSupport")}>
            <img src={service5} alt="Grief Support" className="service-image" />
            <h3>Grief Support</h3>
            <p>Compassionate support to help you through difficult times.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
