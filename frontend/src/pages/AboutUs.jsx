import "./AboutUs.css";
import "../components/Header.css";  // Corrected import path
import "../components/Footer.css";  // Corrected import path

import team1 from "../assets/team1.jpg";
import team2 from "../assets/team2.jpg";
import team3 from "../assets/team3.jpg";

const AboutUs = () => {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <p>
        We are a dedicated team passionate about delivering the best services.
        Our goal is to provide high-quality solutions tailored to your needs.
      </p>

      <div className="team-section">
        <h2>Meet Our Team</h2>
        <div className="team-members">
          <div className="team-member">
            <img src={team1} alt="Team Member 1" />
            <p>Ahan res - CEO</p>
            <p>Memorial Services Hub is dedicated to honoring life with dignity and compassion. We provide personalized memorial services, from prearrangement planning to customized ceremonies, ensuring the highest standards of care and quality. As a family-operated business with a legacy of excellence, we are committed to supporting families during life's most profound moments with professionalism and attention to every detail.
</p>
          </div>
          <div className="team-member">
            <img src={team2} alt="Team Member 2" />
            <p>Naswim allam- CTO</p>
            <p>Memorial Services Hub is a leader in the funeral service industry, offering innovative and compassionate services to ensure dignified farewells for loved ones. With a dedicated team and a wide network of locations, we provide seamless support to families, regardless of faith or background. Our commitment to excellence ensures each memorial is a meaningful tribute, crafted with care and respect. We remain devoted to upholding the highest service standards, supporting families through their most delicate moments.</p></div>
          <div className="team-member">
            <img src={team3} alt="Team Member 3" />
            <p>Rassw maher - Lead Developer</p>
            <p>Memorial Services Hub is transforming the funeral service industry by offering innovative, high-quality services to honor loved ones with respect and care. We provide state-of-the-art memorial parlors, advanced morgue facilities, and internationally trained embalming specialists. Our premium fleet ensures dignified transportation, and we offer customized solutions such as catering, repatriation services, and international transportation of remains. Committed to excellence, Memorial Services Hub continues to set new standards, ensuring families receive the best support and farewell for their loved ones.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
