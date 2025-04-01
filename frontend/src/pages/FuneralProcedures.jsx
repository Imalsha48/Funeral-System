import "./FuneralProcedures.css";
import "../components/Header.css";  // Corrected import path
import "../components/Footer.css";  // Corrected import path
import medicalImg from "../assets/medical.jpg";
import certificateImg from "../assets/certificate.jpg";
import funeralImg from "../assets/funeral.jpg";
import funeralPackageImg from "../assets/funeralPackage.jpg"; // New image for Funeral Package
import bodyTransferImg from "../assets/bodyTransfer.jpg"; // New image for Body Transfer
import covidImg from "../assets/covid.jpg"; // New image for COVID-related steps

const FuneralProcedures = () => {
  return (
    <div className="procedures-container">
      <h1>Funeral Procedures</h1>
      <p>
      Losing a loved one is a deeply emotional experience, and many individuals are uncertain about the next steps, whom to contact, and the essential procedures to follow. In Sri Lanka, there is a lack of awareness about these crucial steps. As a leader in the funeral service industry, we provide expert guidance and knowledge to help families navigate this difficult time with ease and compassion, ensuring a smooth and respectful process.
      </p>
      <p>
        Therefore, we are here to guide you through each step you should follow
        in such a situation to make it a hassle-free and smooth operation.
      </p>
      <div className="steps-section">
        <h2>Follow These Steps</h2>
        <div className="steps-details">
          <div className="step-item">
            <img src={medicalImg} alt="Contacting Medical Authorities" />
            <h3>Step 1: Contacting the Medical Authorities</h3>
            <p>
              The first thing you should do when a death occurs is contacting
              the necessary medical authorities related to the death.
            </p>
          </div>
          <div className="step-item">
            <img src={certificateImg} alt="Obtaining the Medical Certificate" />
            <h3>Step 2: Obtaining the Medical Certificate</h3>
            <p>
              After contacting the medical authorities, obtain the medical
              certificate which confirms the death.
            </p>
          </div>
          <div className="step-item">
            <img src={funeralImg} alt="Funeral Arrangements" />
            <h3>Step 3: Contacting the Funeral Home</h3>
            <p>
              With the medical certificate in hand, contact the selected funeral
              home to arrange for further proceedings.
            </p>
          </div>
          <div className="step-item">
            <img src={funeralPackageImg} alt="Selecting Funeral Package" />
            <h3>Step 4: Selection of Funeral Package</h3>
            <p>
              With the assistance of the funeral home's management, select and
              book the preferred funeral package and make the required payments.
            </p>
          </div>
          <div className="step-item">
            <img src={bodyTransferImg} alt="Body Transfer" />
            <h3>Step 5: Handing Over the Body of the Deceased</h3>
            <p>
              The body of the deceased will be sent to the funeral service for
              preparation once the funeral package is selected.
            </p>
          </div>
          <div className="step-item">
            <img src={covidImg} alt="COVID-19 Related Steps" />
            <h3>Step 6: Special Steps to Follow</h3>
            <p>
              Due to the COVID-19 guidelines, certain changes have been made
              in the procedures. The PHI in charge must be notified, and a PCR
              test may be required depending on the situation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FuneralProcedures;
